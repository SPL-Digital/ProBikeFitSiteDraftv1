import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! Gary will get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#494949] mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-[#8c8c8a] max-w-3xl mx-auto leading-relaxed">
              Ready to improve your cycling experience? Contact Gary to schedule your 
              professional bike fitting consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#494949] mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#494949] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1d423] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#494949] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1d423] focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#494949] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1d423] focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#494949] mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1d423] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="basic">Basic Fit ($150)</option>
                      <option value="comprehensive">Comprehensive Fit ($300)</option>
                      <option value="performance">Performance Fit ($450)</option>
                      <option value="followup">Follow-up Adjustment ($75)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#494949] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d1d423] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell Gary about your cycling goals, any pain points, and what you hope to achieve with a bike fitting..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4c71f] transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#494949] mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#d1d423] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#494949] mb-1">Email</h3>
                      <p className="text-[#8c8c8a]">gary@probikefit.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#d1d423] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#494949] mb-1">Phone</h3>
                      <p className="text-[#8c8c8a]">(555) 123-BIKE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#d1d423] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#494949] mb-1">Location</h3>
                      <p className="text-[#8c8c8a]">
                        123 Cycling Way<br />
                        Bike City, BC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#d1d423] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#494949] mb-1">Hours</h3>
                      <p className="text-[#8c8c8a]">
                        <strong>Available Appointments:</strong><br />
                        Wednesday: 7:00 PM<br />
                        Friday: 10:00 AM & 1:00 PM<br />
                        Saturday: 10:00 AM & 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#494949] mb-6">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#494949] mb-2">
                      How long does a bike fitting take?
                    </h3>
                    <p className="text-[#8c8c8a] text-sm">
                      Basic fittings take 1.5 hours, while comprehensive fittings 
                      can take up to 3-4 hours depending on the complexity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-[#494949] mb-2">
                      What should I bring to my appointment?
                    </h3>
                    <p className="text-[#8c8c8a] text-sm">
                      Bring your bike, cycling shoes, and any gear you typically 
                      use. Wear comfortable cycling clothing.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-[#494949] mb-2">
                      Do you offer follow-up adjustments?
                    </h3>
                    <p className="text-[#8c8c8a] text-sm">
                      Yes! All comprehensive and performance fittings include 
                      follow-up consultations to ensure optimal results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;