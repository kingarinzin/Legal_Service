"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-foreground text-balance">
            {"Let's start a conversation"}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Have questions about our services or need assistance finding the right 
              legal institution? We&apos;re here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <p className="text-muted-foreground">contact@lexconnect.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <p className="text-muted-foreground">+1 (800) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Office</p>
                  <p className="text-muted-foreground">123 Legal Avenue, Suite 500<br />Washington, DC 20001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="rounded-lg h-12 bg-background"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="rounded-lg h-12 bg-background"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="rounded-lg h-12 bg-background"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us how we can help..."
                className="rounded-lg min-h-[150px] bg-background resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="rounded-full px-8 w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
