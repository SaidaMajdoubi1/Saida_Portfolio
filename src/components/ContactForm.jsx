import React from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const ContactForm = () => {
    const [status, setStatus] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        // Replace with your EmailJS credentials (sign up at emailjs.com)
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            e.target,
            'YOUR_PUBLIC_KEY'
        )
            .then(() => {
                setStatus('success')
                e.target.reset()
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-colors"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-colors"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject (e.g., Project Inquiry, AI Automation)"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-colors"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Your message..."
                        rows="5"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-neon transition-colors"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${status === 'sending'
                            ? 'bg-gray-700 cursor-not-allowed'
                            : 'bg-neon text-dark hover:shadow-lg hover:shadow-neon/40 transition-all'
                        }`}
                >
                    {status === 'sending' ? 'Sending...' :
                        status === 'success' ? '✓ Message Sent!' :
                            'Send Message →'}
                </button>
                {status === 'error' && (
                    <p className="text-red-400 text-center mt-2">Failed to send. Please try again.</p>
                )}
            </form>
        </div>
    )
}

export default ContactForm