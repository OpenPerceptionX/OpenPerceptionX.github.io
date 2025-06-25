'use client'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export function EmailSubscribe() {
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [placeholder, setPlaceholder] = useState('enter your email');
  useEffect(() => {
    const isValid = emailRegex.test(email.trim())
    setValid(isValid && email.trim() !== '')
  }, [email])

  const handleSubmit = async () => {
    if (!valid) return
    setLoading(true)

    const payload = {
      email,
      message: '',
      organization: '',
      first_name: '',
      last_name: '',
    }

    try {
      const res = await fetch('https://drivelab.openxlab.org.cn/gw/drivelab-register-api-service/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
            setEmail('')
            setPlaceholder('subscribed!');
      } else {
      }
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }

    return (
        <div className="w-full flex flex-col md:flex-row gap-3 md:items-center">
            <span>
                Subscribe & stay tuned!
            </span>
            <div className="flex gap-3 items-center">
                <Input
                    type="email"
                    placeholder={placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='rounded-sm text-xs md:text-xs h-5 max-w-xs'
                />
                <Button onClick={handleSubmit} disabled={!valid || loading} className='text-xs h-5 p-2 hover:cursor-pointer font-normal rounded-sm'>
                    {loading ? '...' : 'subscribe'}
                </Button>
            </div>
        </div>
    )
}