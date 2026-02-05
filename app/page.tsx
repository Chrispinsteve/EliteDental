"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Shield,
  Zap,
  Heart,
  Check,
  ArrowRight,
  User,
  Calendar,
  Users,
  Award,
  Target,
  Smile,
} from "lucide-react";

interface PageProps {
  setCurrentPage: (page: string) => void;
}

interface LoginPageProps extends PageProps {
  setIsLoggedIn: (value: boolean) => void;
  setUserRole: (role: string) => void;
}

interface NavigationProps extends PageProps {
  currentPage: string;
  isLoggedIn: boolean;
  userRole: string;
  setIsLoggedIn: (value: boolean) => void;
}

function Navigation({
  currentPage,
  setCurrentPage,
  isLoggedIn,
  userRole,
  setIsLoggedIn,
}: NavigationProps) {
  const navItems = ["Home", "About", "Services", "Doctors", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-purple-700 to-cyan-500 rounded-xl flex items-center justify-center">
            <Sparkles size={24} color="white" />
          </div>
          <span className="font-bold text-xl text-gray-900">Elite Dental</span>
        </button>
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCurrentPage(item.toLowerCase())}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === item.toLowerCase()
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <button
                type="button"
                onClick={() =>
                  setCurrentPage(userRole === "admin" ? "admin" : "portal")
                }
                className="px-5 py-2 border-2 border-purple-700 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Dashboard
              </button>
              <button
                type="button"
                onClick={() => setIsLoggedIn(false)}
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setCurrentPage("login")}
                className="px-5 py-2 border-2 border-purple-700 text-purple-700 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage("booking")}
                className="px-5 py-2 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Book Now
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function HomePage({ setCurrentPage }: PageProps) {
  const features = [
    {
      icon: Shield,
      title: "Advanced Technology",
      desc: "State-of-the-art equipment for precise diagnostics",
    },
    {
      icon: Heart,
      title: "Gentle Care",
      desc: "Compassionate treatment in a relaxing environment",
    },
    {
      icon: Zap,
      title: "Quick Recovery",
      desc: "Minimally invasive procedures for faster healing",
    },
  ];

  const services = [
    { icon: Smile, name: "General Dentistry", price: "From $75" },
    { icon: Sparkles, name: "Cosmetic Dentistry", price: "From $299" },
    { icon: Target, name: "Orthodontics", price: "From $2,500" },
    { icon: Shield, name: "Emergency Care", price: "From $150" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Best dental experience ever! The team made me feel so comfortable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Professional, caring, and thorough. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "Finally found a dentist I trust. Amazing results!",
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              Award-Winning Dental Care
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Smile Deserves{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500">
                Elite Care
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience world-class dentistry with cutting-edge technology and
              a gentle touch. Your perfect smile starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setCurrentPage("booking")}
                className="px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-purple-200"
              >
                Book Appointment <ArrowRight size={20} />
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage("services")}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-purple-300 hover:text-purple-700 transition-colors"
              >
                Our Services
              </button>
            </div>
            <div className="flex items-center gap-8 mt-10 pt-10 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">15k+</div>
                <div className="text-gray-500">Happy Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-500">Rating</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-purple-200 to-cyan-200 rounded-3xl overflow-hidden flex items-center justify-center">
              <Smile size={200} className="text-purple-700 opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Elite Dental?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise with compassion to deliver exceptional dental
              care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={32} color="white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive dental care for the whole family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <button
                type="button"
                key={idx}
                className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group text-left"
                onClick={() => setCurrentPage("services")}
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                  <service.icon
                    size={28}
                    className="text-purple-700 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-purple-700 font-medium">{service.price}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">{`"${t.text}"`}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <User size={24} color="white" />
                  </div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Best Smile?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Book your appointment today and experience the Elite Dental
            difference
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage("booking")}
            className="px-10 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ setCurrentPage }: PageProps) {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      desc: "Your comfort and satisfaction are our top priorities",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Committed to the highest standards of dental care",
    },
    {
      icon: Users,
      title: "Community",
      desc: "Building lasting relationships with our patients",
    },
    {
      icon: Target,
      title: "Innovation",
      desc: "Embracing the latest in dental technology",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Elite Dental
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 20 years, Elite Dental has been the trusted choice for
              families seeking exceptional dental care. Our mission is to
              provide personalized, compassionate treatment that helps every
              patient achieve their healthiest, most beautiful smile.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <button
            type="button"
            onClick={() => setCurrentPage("booking")}
            className="px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Book Your Visit
          </button>
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ setCurrentPage }: PageProps) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      name: "General Dentistry",
      icon: Smile,
      description:
        "Comprehensive care for your everyday dental health including cleanings, fillings, and preventive treatments.",
      benefits: [
        "Regular checkups",
        "Professional cleanings",
        "Cavity fillings",
        "Gum disease treatment",
      ],
      price: "From $75",
    },
    {
      name: "Cosmetic Dentistry",
      icon: Sparkles,
      description:
        "Transform your smile with our advanced cosmetic procedures designed to enhance your natural beauty.",
      benefits: ["Teeth whitening", "Veneers", "Bonding", "Smile makeovers"],
      price: "From $299",
    },
    {
      name: "Orthodontics",
      icon: Target,
      description:
        "Straighten your teeth and correct bite issues with our modern orthodontic solutions.",
      benefits: [
        "Clear aligners",
        "Traditional braces",
        "Retainers",
        "Bite correction",
      ],
      price: "From $2,500",
    },
    {
      name: "Emergency Care",
      icon: Shield,
      description:
        "Same-day emergency appointments for urgent dental issues when you need us most.",
      benefits: [
        "Same-day appointments",
        "Pain relief",
        "Tooth repair",
        "24/7 support line",
      ],
      price: "From $150",
    },
  ];

  const active = services[activeTab];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive dental care tailored to your unique needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
            {services.map((service, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                  activeTab === idx
                    ? "bg-purple-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <service.icon size={20} />
                {service.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <active.icon size={32} className="text-purple-700" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {active.name}
                  </h2>
                  <p className="text-purple-700 font-semibold text-lg">
                    {active.price}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-8">{active.description}</p>
              <button
                type="button"
                onClick={() => setCurrentPage("booking")}
                className="px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Book This Service <ArrowRight size={20} />
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {"What's"} Included
              </h3>
              <div className="space-y-4">
                {active.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={18} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DoctorsPage({ setCurrentPage }: PageProps) {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Dentist",
      specialty: "Cosmetic Dentistry",
      experience: "15 years",
    },
    {
      name: "Dr. James Wilson",
      role: "Orthodontist",
      specialty: "Orthodontics",
      experience: "12 years",
    },
    {
      name: "Dr. Emily Chen",
      role: "Pediatric Dentist",
      specialty: "Children's Dentistry",
      experience: "10 years",
    },
    {
      name: "Dr. Michael Brown",
      role: "Oral Surgeon",
      specialty: "Oral Surgery",
      experience: "18 years",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Meet Our Doctors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Expert care from our experienced team of dental professionals
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-purple-200 to-cyan-200 flex items-center justify-center">
                  <User size={64} className="text-purple-700 opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-purple-700 font-medium mb-3">
                    {doctor.role}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Specialty: {doctor.specialty}</p>
                    <p>Experience: {doctor.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Book with Your Preferred Doctor
          </h2>
          <button
            type="button"
            onClick={() => setCurrentPage("booking")}
            className="px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Schedule Appointment
          </button>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            {"We're"} here to help with all your dental needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Dental Street, Suite 100
                      <br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@elitedental.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Mon-Fri: 8am - 6pm
                      <br />
                      Sat: 9am - 2pm
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookingPage({ setCurrentPage }: PageProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    "General Checkup",
    "Teeth Cleaning",
    "Teeth Whitening",
    "Cavity Filling",
    "Root Canal",
    "Orthodontics Consultation",
  ];
  const doctors = [
    "Dr. Sarah Mitchell",
    "Dr. James Wilson",
    "Dr. Emily Chen",
    "Dr. Michael Brown",
  ];
  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Book Appointment
        </h1>

        <div className="flex items-center gap-2 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <React.Fragment key={s}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`flex-1 h-1 ${
                    step > s ? "bg-purple-700" : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select Service
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      selectedService === service
                        ? "bg-purple-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => selectedService && setStep(2)}
                disabled={!selectedService}
                className="mt-8 w-full py-4 bg-purple-700 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select Doctor
              </h2>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <button
                    key={doctor}
                    type="button"
                    onClick={() => setSelectedDoctor(doctor)}
                    className={`w-full p-4 rounded-xl text-left flex items-center gap-4 transition-all ${
                      selectedDoctor === doctor
                        ? "bg-purple-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedDoctor === doctor
                          ? "bg-white/20"
                          : "bg-purple-100"
                      }`}
                    >
                      <User
                        size={24}
                        className={
                          selectedDoctor === doctor
                            ? "text-white"
                            : "text-purple-700"
                        }
                      />
                    </div>
                    {doctor}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => selectedDoctor && setStep(3)}
                  disabled={!selectedDoctor}
                  className="flex-1 py-4 bg-purple-700 text-white rounded-xl font-semibold disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select Date & Time
              </h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl font-medium transition-all ${
                        selectedTime === time
                          ? "bg-purple-700 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => selectedDate && selectedTime && setStep(4)}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 py-4 bg-purple-700 text-white rounded-xl font-semibold disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600 mb-8">
                Your appointment has been scheduled for {selectedDate} at{" "}
                {selectedTime} with {selectedDoctor} for {selectedService}.
              </p>
              <button
                type="button"
                onClick={() => setCurrentPage("home")}
                className="px-8 py-4 bg-purple-700 text-white rounded-xl font-semibold"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LoginPage({
  setCurrentPage,
  setIsLoggedIn,
  setUserRole,
}: LoginPageProps) {
  const [isStaff, setIsStaff] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserRole(isStaff ? "admin" : "patient");
    setCurrentPage(isStaff ? "admin" : "portal");
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Sign in to your account
          </p>

          <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
            <button
              type="button"
              onClick={() => setIsStaff(false)}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                !isStaff
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Patient
            </button>
            <button
              type="button"
              onClick={() => setIsStaff(true)}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                isStaff ? "bg-white text-purple-700 shadow-sm" : "text-gray-600"
              }`}
            >
              Staff
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function PatientPortal({ setCurrentPage }: PageProps) {
  const appointments = [
    {
      date: "Feb 15, 2026",
      time: "10:00 AM",
      doctor: "Dr. Sarah Mitchell",
      service: "General Checkup",
      status: "Upcoming",
    },
    {
      date: "Jan 20, 2026",
      time: "2:00 PM",
      doctor: "Dr. James Wilson",
      service: "Teeth Cleaning",
      status: "Completed",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Patient Portal
        </h1>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Calendar size={24} className="text-purple-700" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Next Appointment</p>
                <p className="text-xl font-bold text-gray-900">Feb 15, 2026</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Check size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Completed Visits</p>
                <p className="text-xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                <Star size={24} className="text-cyan-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Reward Points</p>
                <p className="text-xl font-bold text-gray-900">2,450</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">My Appointments</h2>
            <button
              type="button"
              onClick={() => setCurrentPage("booking")}
              className="px-4 py-2 bg-purple-700 text-white rounded-lg font-medium text-sm"
            >
              Book New
            </button>
          </div>
          <div className="space-y-4">
            {appointments.map((apt, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Calendar size={20} className="text-purple-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {apt.date} at {apt.time}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {apt.service} with {apt.doctor}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    apt.status === "Upcoming"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const stats = [
    { label: "Today's Appointments", value: "24", icon: Calendar },
    { label: "Total Patients", value: "1,847", icon: Users },
    { label: "Revenue (MTD)", value: "$45,230", icon: Star },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <stat.icon size={24} className="text-purple-700" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {"Today's"} Schedule
          </h2>
          <div className="space-y-4">
            {[
              {
                time: "9:00 AM",
                patient: "John Smith",
                service: "Checkup",
                doctor: "Dr. Mitchell",
              },
              {
                time: "10:00 AM",
                patient: "Sarah Johnson",
                service: "Cleaning",
                doctor: "Dr. Wilson",
              },
              {
                time: "11:00 AM",
                patient: "Mike Davis",
                service: "Filling",
                doctor: "Dr. Chen",
              },
            ].map((apt, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="font-bold text-purple-700">{apt.time}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{apt.patient}</p>
                    <p className="text-gray-600 text-sm">
                      {apt.service} - {apt.doctor}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium text-sm"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ setCurrentPage }: PageProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Sparkles size={20} color="white" />
              </div>
              <span className="font-bold text-lg">Elite Dental</span>
            </div>
            <p className="text-gray-400">
              Providing exceptional dental care for over 20 years.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Doctors", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    type="button"
                    onClick={() => setCurrentPage(link.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Dental Street</p>
              <p>Los Angeles, CA 90001</p>
              <p>(555) 123-4567</p>
              <p>info@elitedental.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400">
              <p>Mon-Fri: 8am - 6pm</p>
              <p>Sat: 9am - 2pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>2026 Elite Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case "services":
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case "doctors":
        return <DoctorsPage setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage />;
      case "booking":
        return <BookingPage setCurrentPage={setCurrentPage} />;
      case "login":
        return (
          <LoginPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
            setUserRole={setUserRole}
          />
        );
      case "portal":
        return <PatientPortal setCurrentPage={setCurrentPage} />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        setIsLoggedIn={setIsLoggedIn}
      />
      {renderPage()}
      {!["login", "portal", "admin"].includes(currentPage) && (
        <Footer setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
