'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { motion } from 'motion/react'
// --- Validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Your name is too short.' }),
  email: z.email({ message: 'Enter a valid email.' }),
  phone: z.string().optional(),
  service: z.string().min(1, {
    error: 'Select a service',
  }),
  budget: z.string().min(1, {
    error: 'Select your budget',
  }),
  message: z.string().min(10, { message: 'Tell us a bit more!' }),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: undefined,
      budget: undefined,
      message: '',
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch('https://formspree.io/f/mleyzzgv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error(err)
      alert('Error submitting form.')
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold">Thank You 🎉</h2>
        <p className="mt-2 text-gold-400">{`We'll get back to you shortly.`}</p>
      </motion.div>
    )
  }
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-[#1a1d18] to-[#2a2e26] text-[#e6e1d7]"
    >
      <div className="max-w-2xl w-full space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            {`Let's Build Something Epic`}
          </h2>
          <p className="text-sm md:text-base opacity-70">
            Fill out the form and our PRO BRO squad will get back to you.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 backdrop-blur-xl bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Elon Musk"
                      className="bg-transparent border-b border-gold-500 rounded-none focus-visible:ring-0 focus-visible:border-gold-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="elon@mars.com"
                      className="bg-transparent border-b border-gold-500 rounded-none focus-visible:ring-0 focus-visible:border-gold-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+91 99999 99999"
                      className="bg-transparent border-b border-gold-500 rounded-none focus-visible:ring-0 focus-visible:border-gold-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid space-y-8 sm:grid-cols-2">
              {/* Service */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent border-b border-gold-500 rounded-none focus:ring-0 focus:border-gold-300">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border border-gold-500 text-gold-50">
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mvp">MVP Development</SelectItem>
                        <SelectItem value="edit">Video Editing</SelectItem>
                        <SelectItem value="clip">
                          Mass Clipping (Content Farm)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Budget */}
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent border-b border-gold-500 rounded-none focus:ring-0 focus:border-gold-300">
                          <SelectValue placeholder="Pick your budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black border border-gold-500 text-gold-50">
                        <SelectItem value="1k-5k">$1,000 – $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 – $10,000</SelectItem>
                        <SelectItem value="10k-50k">
                          $10,000 – $50,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your idea..."
                      className="bg-transparent border-b border-gold-500 rounded-none focus-visible:ring-0 focus-visible:border-gold-300 resize-none h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-gold-400 cursor-pointer text-gold-50 uppercase tracking-widest font-bold hover:bg-gold-400 rounded-none"
            >
              Submit 🚀
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
