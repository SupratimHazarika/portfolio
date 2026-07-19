'use client';

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const SUGGESTED_PROMPTS = [
  'What is your current role?',
  'What tech stack do you use?',
  'Tell me about your RAG project',
  'How many years of experience do you have?',
] as const;

const MAX_QUESTION_LENGTH = 500;

type MessageRole = 'user' | 'assistant';

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  sources?: string[];
  isError?: boolean;
}

interface AskApiSuccess {
  answer: string;
  sources: string[];
  num_contexts: number;
}

interface AskApiError {
  error: string;
}

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const AskAI = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const askQuestion = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    if (trimmed.length > MAX_QUESTION_LENGTH) {
      setError(`Please keep questions under ${MAX_QUESTION_LENGTH} characters.`);
      return;
    }

    setError(null);
    setInput('');

    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed, top_k: 3 }),
      });

      const data = (await response.json()) as AskApiSuccess & AskApiError;

      if (!response.ok) {
        throw new Error(
          data.error || 'Something went wrong. Please try again.'
        );
      }

      const assistantMessage: ChatMessage = {
        id: createId(),
        role: 'assistant',
        content: data.answer,
        sources: data.sources?.length ? data.sources : undefined,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.';

      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: 'assistant',
          content:
            'Sorry — I could not get an answer right now. You can retry your question.',
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void askQuestion(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void askQuestion(input);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
    setInput('');
    inputRef.current?.focus();
  };

  const handleChipClick = (prompt: string) => {
    void askQuestion(prompt);
  };

  const handleRetry = () => {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
    if (lastUser) {
      void askQuestion(lastUser.content);
    }
  };

  return (
    <div id="ask-ai" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Ask AI
        </p>
        <h2 className="py-4">Ask AI about me</h2>
        <p className="pb-8 text-gray-400 max-w-[720px]">
          Curious about my experience, skills, or projects? Ask a question and
          get an answer grounded in my portfolio.
        </p>

        <div className="w-full shadow-xl shadow-indigo-500/40 rounded-xl p-4 md:p-6 bg-[#0f0f0f]/60 border border-indigo-500/20">
          <div className="flex items-center justify-between gap-4 mb-4">
            <p className="text-sm text-gray-400">
              Conversation stays in this browser session only.
            </p>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                disabled={loading}
                className="text-sm uppercase tracking-wider text-[#5651e5] hover:text-indigo-300 disabled:opacity-50"
              >
                Clear chat
              </button>
            )}
          </div>

          <div className="h-[360px] md:h-[420px] overflow-y-auto rounded-lg bg-[#151515] p-4 space-y-4 border border-gray-800">
            {messages.length === 0 && !loading ? (
              <div className="h-full flex flex-col justify-center gap-4">
                <p className="text-gray-400 text-center">
                  Try a suggested question to get started
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleChipClick(prompt)}
                      className="text-left text-sm px-3 py-2 rounded-lg border border-indigo-500/40 text-gray-200 hover:bg-indigo-500/10 hover:border-[#5651e5] transition"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[90%] md:max-w-[75%] rounded-xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-gray-100'
                          : message.isError
                            ? 'bg-[#1a1515] border border-red-500/40 text-gray-200'
                            : 'bg-[#1b195b]/50 border border-indigo-500/30 text-gray-200'
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
                        {message.content}
                      </p>
                      {message.sources && message.sources.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-indigo-500/20">
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                            Sources
                          </p>
                          <ul className="space-y-1">
                            {message.sources.map((source) => (
                              <li
                                key={source}
                                className="text-xs text-gray-500 truncate"
                                title={source}
                              >
                                {source}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-xl px-4 py-3 bg-[#1b195b]/50 border border-indigo-500/30 text-gray-400 text-sm">
                      Thinking…
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </>
            )}
          </div>

          {error && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-500/30 bg-red-950/20 px-4 py-3">
              <p className="text-sm text-red-300">{error}</p>
              <button
                type="button"
                onClick={handleRetry}
                disabled={loading}
                className="text-sm uppercase tracking-wider text-[#5651e5] hover:text-indigo-300 disabled:opacity-50"
              >
                Retry
              </button>
            </div>
          )}

          {messages.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleChipClick(prompt)}
                  disabled={loading}
                  className="text-xs px-2.5 py-1.5 rounded-lg border border-indigo-500/30 text-gray-400 hover:text-gray-200 hover:border-[#5651e5] disabled:opacity-50 transition"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="ask-ai-input" className="sr-only">
              Ask a question
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <textarea
                id="ask-ai-input"
                ref={inputRef}
                rows={2}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_QUESTION_LENGTH))}
                onKeyDown={handleKeyDown}
                disabled={loading}
                placeholder="Ask about my experience, skills, or projects…"
                className="flex-1 border-2 rounded-lg p-3 border-gray-700 bg-[#151515] text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-[#5651e5] disabled:opacity-60 resize-none"
                maxLength={MAX_QUESTION_LENGTH}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="sm:self-stretch px-6 py-3 text-gray-100 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg uppercase tracking-wider text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition"
              >
                {loading ? 'Sending…' : 'Send'}
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500 text-right">
              {input.length}/{MAX_QUESTION_LENGTH}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskAI;
