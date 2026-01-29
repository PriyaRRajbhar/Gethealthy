import { useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { Calendar, User, CheckCircle, Clock, Users, Shield } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">
                Your Health, Our Priority
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Connect with top-rated doctors instantly. Book appointments, get consultations, and manage your health - all in one place.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Register Now
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjb25zdWx0YXRpb24lMjBtZWRpY2FsJTIwb2ZmaWNlfGVufDF8fHx8MTc2OTUxMTk1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Doctor consultation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">Book appointments with your preferred doctors in just a few clicks</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Access to a network of certified and experienced healthcare professionals</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your health data is protected with industry-leading security measures</p>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Book Your Appointment</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Select Specialty</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Choose a specialty...</option>
                  <option>General Physician</option>
                  <option>Dermatologist</option>
                  <option>Pediatrician</option>
                  <option>Cardiologist</option>
                  <option>Orthopedic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Select Doctor</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Choose a doctor...</option>
                  <option>Dr. Sarah Johnson</option>
                  <option>Dr. Michael Chen</option>
                  <option>Dr. Emily Rodriguez</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Preferred Time</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Select time...</option>
                  <option>9:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>2:00 PM - 3:00 PM</option>
                  <option>3:00 PM - 4:00 PM</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Reason for Visit</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  rows={4}
                  placeholder="Briefly describe your symptoms or reason for consultation..."
                ></textarea>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-600">1</span>
            </div>
            <h3 className="text-lg mb-2">Register</h3>
            <p className="text-gray-600">Create your account in minutes</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-600">2</span>
            </div>
            <h3 className="text-lg mb-2">Choose Doctor</h3>
            <p className="text-gray-600">Browse and select your preferred specialist</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-600">3</span>
            </div>
            <h3 className="text-lg mb-2">Book Appointment</h3>
            <p className="text-gray-600">Schedule at your convenient time</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-blue-600">4</span>
            </div>
            <h3 className="text-lg mb-2">Get Consultation</h3>
            <p className="text-gray-600">Receive expert medical care</p>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl">Welcome Back</h2>
              <button onClick={() => setShowLoginModal(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Login
              </button>
              <p className="text-center text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setShowLoginModal(false);
                    setShowRegisterModal(true);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl">Create Account</h2>
              <button onClick={() => setShowRegisterModal(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="••••••••"
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
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Register
              </button>
              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setShowRegisterModal(false);
                    setShowLoginModal(true);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 HealthConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
