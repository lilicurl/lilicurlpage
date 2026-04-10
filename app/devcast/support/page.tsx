'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

const SupportSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Enter a valid email').max(254),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

type SupportForm = z.infer<typeof SupportSchema>;

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SupportForm>({ resolver: zodResolver(SupportSchema) });

  const onSubmit = async (data: SupportForm) => {
    setServerError(null);

    const res = await fetch('/api/devcast/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
      return;
    }

    const body = await res.json().catch(() => null);
    const message =
      res.status === 429
        ? 'Too many requests. Try again in 15 minutes.'
        : (body?.error?.message ?? 'Something went wrong. Try again later.');

    setServerError(message);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/devcast">
            <Image
              src="/devcast-logo.svg"
              alt="devcast"
              width={120}
              height={120}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <Link
            href="/devcast"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </nav>

      <section className="flex min-h-[calc(100vh-65px)] items-center justify-center px-6 py-20">
        <div className="w-full max-w-lg">
          {submitted ? (
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <CheckCircle className="h-10 w-10 text-emerald-400" />
              </div>
              <h1 className="mb-2 text-2xl font-semibold text-white">Message sent</h1>
              <p className="text-sm text-zinc-400">
                Got it. I&apos;ll get back to you as soon as I can.
              </p>
              <Link
                href="/devcast"
                className="mt-8 inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to devcast
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h1 className="mb-2 text-3xl font-semibold text-white">Get in touch</h1>
                <p className="text-sm text-zinc-400">
                  Questions, issues, ideas — send them here.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register('name')}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    placeholder="Liliana Castellanos"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                    placeholder="Tell me what's on your mind…"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {serverError && (
                  <p className="rounded-lg border border-red-900 bg-red-950 px-4 py-2.5 text-sm text-red-400">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending…'
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
