import { Navbar } from "../components/Navbar";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100">
            We're here to help with any questions or concerns
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">support@healthconnect.com</p>
            <p className="text-sm text-gray-500">We respond within 24 hours</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">1-800-HEALTH (432584)</p>
            <p className="text-sm text-gray-500">Mon-Fri, 8AM-8PM EST</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-2">Available 24/7</p>
            <p className="text-sm text-gray-500">Instant support online</p>
          </div>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Issue Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Select an issue type...</option>
                  <option>Technical Support</option>
                  <option>Account Issues</option>
                  <option>Billing Questions</option>
                  <option>Doctor Consultation</option>
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Your Message</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  rows={6}
                  placeholder="Please describe your issue or question in detail..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Office Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-3">Support Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Phone Support:</strong></p>
                    <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                    <p>Saturday: 9:00 AM - 5:00 PM EST</p>
                    <p>Sunday: Closed</p>
                    <p className="mt-3"><strong>Email Support:</strong> 24/7</p>
                    <p><strong>Live Chat:</strong> 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-3">Our Office</h3>
                  <p className="text-gray-700">
                    HealthConnect Inc.<br />
                    123 Medical Plaza Drive<br />
                    Suite 500<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-3 text-blue-800">Common Questions?</h3>
                  <p className="text-gray-700 mb-4">
                    Before reaching out, check our FAQ section. You might find your answer there instantly!
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 underline">
                    Visit FAQ Page →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="bg-red-50 border-l-4 border-red-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl mb-2 text-red-800">Medical Emergency?</h3>
              <p className="text-gray-700">
                If you're experiencing a medical emergency, please call 911 immediately or visit your nearest emergency room. Our platform is designed for non-emergency consultations and routine healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 HealthConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
