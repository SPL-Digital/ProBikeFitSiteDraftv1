import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#494949] mb-6 leading-tight">
                Optimize Your
                <span className="text-[#d1d423]"> Cycling Performance</span>
              </h1>
              <p className="text-xl text-[#8c8c8a] mb-8 leading-relaxed">
                Professional bike fitting services that eliminate pain, improve efficiency, 
                and unlock your full potential on every ride.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4c71f] transition-all duration-300 flex items-center justify-center group"
                >
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#d1d423] transition-all duration-300"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional cyclist on road bike"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-[#d1d423]">500+</div>
                <div className="text-sm text-[#494949] font-medium">Successful Fittings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
              Why Choose Professional Bike Fitting?
            </h2>
            <p className="text-xl text-[#8c8c8a] max-w-3xl mx-auto">
              Experience the difference that proper bike fitting makes for your comfort, 
              performance, and overall cycling enjoyment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d1d423] transition-colors duration-300">
                <Target className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-3">Precision Fitting</h3>
              <p className="text-[#8c8c8a]">
                Advanced biomechanical analysis ensures optimal positioning for maximum efficiency.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d1d423] transition-colors duration-300">
                <Users className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-3">Personalized Approach</h3>
              <p className="text-[#8c8c8a]">
                Every fitting is tailored to your unique body geometry and cycling goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d1d423] transition-colors duration-300">
                <Award className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-3">Expert Experience</h3>
              <p className="text-[#8c8c8a]">
                25+ years of professional fitting experience with cyclists of all levels.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d1d423] transition-colors duration-300">
                <Clock className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-3">Ongoing Support</h3>
              <p className="text-[#8c8c8a]">
                Follow-up consultations and adjustments to ensure lasting comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
              Professional Fitting Services
            </h2>
            <p className="text-xl text-[#8c8c8a] max-w-3xl mx-auto">
              Choose from our comprehensive range of bike fitting services designed 
              to meet every cyclist's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#494949] mb-4">Retül Fit</h3>
              <p className="text-[#8c8c8a] mb-6">
                Advanced motion capture bike fit assessment with comprehensive setup report.
              </p>
              <div className="text-3xl font-bold text-[#d1d423] mb-4">$299</div>
              <Link
                to="/services"
                className="inline-flex items-center text-[#494949] hover:text-[#d1d423] transition-colors"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-[#494949] mb-4">Pre-Purchase Bike Fit</h3>
              <p className="text-[#8c8c8a] mb-6">
                Essential measurements and recommendations before buying your next bike.
              </p>
              <div className="text-3xl font-bold text-[#d1d423] mb-4">$249</div>
              <Link
                to="/services"
                className="inline-flex items-center text-[#494949] hover:text-[#d1d423] transition-colors"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4c71f] transition-all duration-300 inline-flex items-center group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#8c8c8a]">
              Real results from real cyclists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#494949]">Sarah Johnson</h4>
                  <p className="text-sm text-[#8c8c8a]">Austin, TX</p>
                </div>
              </div>
              <p className="text-[#494949] italic">
                "Gary's bike fitting completely transformed my cycling experience. 
                No more knee pain on long rides!"
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Mike Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#494949]">Mike Chen</h4>
                  <p className="text-sm text-[#8c8c8a]">San Francisco, CA</p>
                </div>
              </div>
              <p className="text-[#494949] italic">
                "My power output increased by 15% after the fitting. 
                Gary's expertise is unmatched."
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Emily Rodriguez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#494949]">Emily Rodriguez</h4>
                  <p className="text-sm text-[#8c8c8a]">Denver, CO</p>
                </div>
              </div>
              <p className="text-[#494949] italic">
                "Professional service from start to finish. 
                My cycling comfort improved dramatically."
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="border-2 border-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#d1d423] transition-all duration-300 inline-flex items-center group"
            >
              Read All Testimonials
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#494949]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Ride?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your professional bike fitting consultation today and experience 
            the difference proper positioning makes.
          </p>
          <Link
            to="/contact"
            className="bg-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4c71f] transition-all duration-300 inline-flex items-center group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;