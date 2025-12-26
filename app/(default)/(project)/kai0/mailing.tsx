'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function EmailSubscribe() {
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const isValid = emailRegex.test(email.trim())
    setValid(isValid && email.trim() !== '')
  }, [email])

  const handleSubmit = async () => {
    if (!valid) return
    setLoading(true)

    const payload = new URLSearchParams()
    payload.append('EMAIL', email)

    try {
      await fetch(
        'https://855a7d8a.sibforms.com/serve/MUIFAHvMRnDHa-jw4GgbBzFCpeKTBcfAAdQ3_WHz5m5GOJugx2h3srw6PTCk83XziouQJcGG2pJTjzn4OKE0Cv7LIso36yIAoGhqLEpoirjTXqBTLUJZADYRdK4TthSDzVc7sqE4-OzpB2lRvhyVQnlWN6z6TG6IxUH-x8_8TwoB_XseDAtD1XHWvYaTmmZjHg53ufU6HK5VoTa60A==',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: payload.toString(),
        }
      )
    } catch (err) {
      // ignore
    } finally {
      setEmail('')
      setSubscribed(true)
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && valid && !loading) {
      handleSubmit()
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 md:p-10">
        {/* Background orbs */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-mred/20 via-morange/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-mblue/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-2">
              Stay in the loop
            </h3>
            <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
              Get notified about live demos, challenges, and the latest research updates.
            </p>
          </div>

          {!subscribed ? (
            <div
              className={cn(
                'relative flex flex-col md:flex-row md:items-center gap-3 md:gap-0 rounded-xl transition-all duration-300',
                'bg-white/[0.04] border',
                focused
                  ? 'border-white/20 shadow-[0_0_0_3px_rgba(255,255,255,0.05)]'
                  : 'border-white/[0.08]'
              )}
            >
              {/* Icon (desktop only) */}
              <div className="hidden md:flex pl-4 text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              {/* Input */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={handleKeyDown}
                className="flex-1 min-w-0 bg-transparent border-none outline-none px-4 py-4 text-sm text-white placeholder:text-neutral-500"
              />

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={!valid || loading}
                className={cn(
                  'w-full md:w-auto md:mr-2 px-5 py-3 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-300',
                  'flex items-center justify-center gap-2',
                  valid && !loading
                    ? 'bg-white text-black hover:bg-neutral-200 active:scale-95'
                    : 'bg-white/10 text-neutral-500 cursor-not-allowed'
                )}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  <>
                    Subscribe
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 text-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-neutral-300">
                You're on the list. We'll be in touch.
              </span>
            </div>
          )}

          <p className="text-center text-[11px] text-neutral-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
