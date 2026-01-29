import { Navbar } from "@/app/components/Navbar";
import { Heart, Baby, Bone, Brain, Eye, Pill } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ServicesPage() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Dermatologist",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1765142377587-06b9047095b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXJtYXRvbG9naXN0JTIwc2tpbiUyMGNhcmV8ZW58MXx8fHwxNzY5NTI3MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1709127347876-9636bed47ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcGVkaWF0cmljaWFuJTIwY2hpbGRyZW58ZW58MXx8fHwxNzY5NTI3MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Cardiologist",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2dpc3QlMjBoZWFydCUyMHNwZWNpYWxpc3R8ZW58MXx8fHwxNzY5NTI3MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. James Wilson",
      specialty: "General Physician",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZmVtYWxlJTIwZG9jdG9yfGVufDF8fHx8MTc2OTUyNzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const specialties = [
    {
      icon: Heart,
      name: "Cardiology",
      description: "Comprehensive heart care and cardiovascular health management",
      doctorCount: 8,
    },
    {
      icon: Baby,
      name: "Pediatrics",
      description: "Expert care for infants, children, and adolescents",
      doctorCount: 12,
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description: "Treatment for bones, joints, and musculoskeletal conditions",
      doctorCount: 6,
    },
    {
      icon: Brain,
      name: "Neurology",
      description: "Specialized care for brain and nervous system disorders",
      doctorCount: 5,
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Complete eye care and vision correction services",
      doctorCount: 7,
    },
    {
      icon: Pill,
      name: "General Medicine",
      description: "Primary care for all your general health needs",
      doctorCount: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Our Medical Expertise</h1>
          <p className="text-xl text-blue-100">
            Access to 53+ certified doctors across multiple specialties
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-12 text-center">Our Specialties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <div key={specialty.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl mb-2">{specialty.name}</h3>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                <p className="text-blue-600">{specialty.doctorCount} specialists available</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Meet Our Doctors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.experience} experience</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-12 text-center">Services We Provide</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl mb-4 text-blue-600">For Patients</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>24/7 online consultation booking system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Video consultations from the comfort of your home</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Digital prescriptions and medical records</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Automated appointment reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Access to detailed doctor profiles and reviews</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl mb-4 text-blue-600">Our Commitment</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Only board-certified and verified doctors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Secure and HIPAA-compliant data protection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Quick response times for urgent consultations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Follow-up care and continuous health monitoring</span>
              </li>
            </ul>
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
