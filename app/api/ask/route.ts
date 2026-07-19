import { NextRequest } from 'next/server';

interface AskRequestBody {
  question?: string;
  top_k?: number;
}

interface AskResponseBody {
  answer: string;
  sources: string[];
  num_contexts: number;
}

function getRagApiUrl(): string | undefined {
  return process.env.RAG_API_URL || process.env.NEXT_PUBLIC_RAG_API_URL;
}

export async function POST(req: NextRequest) {
  const ragApiUrl = getRagApiUrl();

  if (!ragApiUrl) {
    return Response.json(
      {
        error:
          'RAG API URL is not configured. Set RAG_API_URL in your environment.',
      },
      { status: 500 }
    );
  }

  let body: AskRequestBody;
  try {
    body = (await req.json()) as AskRequestBody;
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const question = body.question?.trim();
  if (!question) {
    return Response.json({ error: 'Question is required' }, { status: 400 });
  }

  if (question.length > 500) {
    return Response.json(
      { error: 'Question must be 500 characters or fewer' },
      { status: 400 }
    );
  }

  const top_k = typeof body.top_k === 'number' ? body.top_k : 3;

  try {
    const response = await fetch(`${ragApiUrl.replace(/\/$/, '')}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, top_k }),
    });

    const data = (await response.json()) as AskResponseBody & {
      error?: string;
      detail?: string;
    };

    if (!response.ok) {
      return Response.json(
        {
          error:
            data.error ||
            data.detail ||
            'The AI service could not answer right now.',
        },
        { status: response.status }
      );
    }

    return Response.json({
      answer: data.answer,
      sources: data.sources ?? [],
      num_contexts: data.num_contexts ?? 0,
    } satisfies AskResponseBody);
  } catch (error) {
    console.error('Error calling RAG API:', error);
    return Response.json(
      {
        error:
          'Could not reach the AI service. Please try again in a moment.',
      },
      { status: 502 }
    );
  }
}
