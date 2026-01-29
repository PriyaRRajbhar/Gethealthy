import { Navbar } from "@/app/components/Navbar";
import { Target, Users, Award, TrendingUp, Heart, Shield } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Our Story</h1>
          <p className="text-xl text-blue-100">
            Revolutionizing healthcare access through technology
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl mb-6">What We Do</h2>
            <p className="text-gray-700 text-lg mb-4">
              HealthConnect is a cutting-edge telemedicine platform that bridges the gap between patients and healthcare providers. We leverage technology to make quality healthcare accessible, affordable, and convenient for everyone.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our platform enables patients to connect with board-certified doctors across various specialties through secure video consultations, instant messaging, and comprehensive appointment management.
            </p>
            <p className="text-gray-700 text-lg">
              We believe that distance and time should never be barriers to receiving quality medical care. That's why we've built a platform that brings the doctor's office to your fingertips.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-6 text-blue-800">Our Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl text-blue-600">50,000+</p>
                  <p className="text-gray-600">Active Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl text-blue-600">500+</p>
                  <p className="text-gray-600">Certified Doctors</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl text-blue-600">200,000+</p>
                  <p className="text-gray-600">Consultations Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built This Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Why We Built This Platform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Many people struggle to access healthcare due to geographical constraints, long waiting times, or lack of nearby specialists. We're solving this by bringing healthcare directly to patients, wherever they are.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-4">Patient-Centric</h3>
              <p className="text-gray-600">
                Healthcare should be about the patient, not the paperwork. We've designed our platform to be intuitive, easy to use, and focused on delivering the best patient experience possible.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-4">Trust & Security</h3>
              <p className="text-gray-600">
                Your health information is sacred. We employ bank-level encryption and comply with all healthcare privacy regulations to ensure your data is always protected and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Connect Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-12 text-center">How We Connect You to Doctors</h2>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-blue-800">Our Technology</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span><strong>Smart Matching:</strong> Our algorithm matches you with the most suitable doctor based on your symptoms, location, and preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span><strong>Secure Video Platform:</strong> HIPAA-compliant video consultations with crystal-clear quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span><strong>Integrated Health Records:</strong> All your medical history in one secure place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span><strong>Real-time Scheduling:</strong> See available time slots and book instantly</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-blue-800">The Process</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">1.</span>
                  <span>You describe your symptoms or select a specialty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">2.</span>
                  <span>We show you available doctors with their profiles, ratings, and available times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">3.</span>
                  <span>You book an appointment at your convenience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">4.</span>
                  <span>Receive reminders and join your consultation via video call</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">5.</span>
                  <span>Get your prescription, advice, and schedule follow-ups if needed</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl mb-4 text-blue-800">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To democratize healthcare by providing universal access to quality medical consultations through innovative technology, making healthcare convenient, affordable, and accessible to everyone, regardless of their location or circumstances.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl mb-4 text-blue-800">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To become the world's most trusted healthcare platform, where every person has instant access to expert medical care, and where technology and compassion come together to create better health outcomes for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 HealthConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
