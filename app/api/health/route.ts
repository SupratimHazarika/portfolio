function getRagApiUrl(): string | undefined {
  return process.env.RAG_API_URL || process.env.NEXT_PUBLIC_RAG_API_URL;
}

export async function GET() {
  const ragApiUrl = getRagApiUrl();

  if (!ragApiUrl) {
    return Response.json(
      { status: 'offline', reason: 'RAG_API_URL is not configured' },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(`${ragApiUrl.replace(/\/$/, '')}/health`, {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });

    let data: { status?: string } = {};
    try {
      data = (await response.json()) as { status?: string };
    } catch {
      data = {};
    }

    const isOk = response.ok && (data.status === 'ok' || response.status === 200);

    if (!isOk) {
      return Response.json(
        { status: 'offline', reason: 'RAG health check failed' },
        { status: 503 }
      );
    }

    return Response.json({ status: 'ok' });
  } catch (error) {
    console.error('Error calling RAG /health:', error);
    return Response.json(
      { status: 'offline', reason: 'Could not reach RAG API' },
      { status: 503 }
    );
  }
}
