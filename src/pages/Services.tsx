import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Target, Users, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Retül Fit",
      price: "$299",
      duration: "1.5 hours",
      description: "Advanced motion capture bike fit assessment with comprehensive setup report",
      features: [
        "Retül motion capture technology analysis",
        "Complete bike measurement and setup",
        "Detailed PDF report with exact measurements",
        "90-minute comprehensive assessment",
        "Professional positioning optimization",
        "Additional time available at $75 per 30 minutes"
      ],
      image: "https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      popular: true
    },
    {
      id: 2,
      name: "2nd Bike Fit",
      price: "$249",
      duration: "1.5 hours",
      description: "Second assessment and recalibration for race preparation and optimization",
      features: [
        "Complete bike recalibration",
        "Race-specific position optimization",
        "Time trial and competition setup",
        "Performance-focused adjustments",
        "Pre-event positioning refinement",
        "Detailed measurement verification"
      ],
      image: "https://images.pexels.com/photos/5851033/pexels-photo-5851033.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      popular: false
    },
    {
      id: 3,
      name: "Pre-Purchase Bike Fit",
      price: "$149",
      duration: "1 hour",
      description: "Essential measurements and recommendations before buying your next bike",
      features: [
        "Body geometry measurements",
        "Bike size and geometry recommendations",
        "Frame size guidance",
        "Component specification advice",
        "Riding style assessment",
        "Written measurement report"
      ],
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      popular: false
    },
    {
      id: 4,
      name: "Size Selection",
      price: "$149",
      duration: "1 hour",
      description: "Professional measurement and sizing for your existing or new bike",
      features: [
        "Precise body measurements",
        "Optimal bike size determination",
        "Frame geometry analysis",
        "Best fit recommendations",
        "Sizing consultation and guidance"
      ],
      image: "https://images.pexels.com/photos/28505242/pexels-photo-28505242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#494949] mb-6">
              Professional Bike Fitting
              <span className="text-[#d1d423]"> Services</span>
            </h1>
            <p className="text-xl text-[#8c8c8a] max-w-3xl mx-auto leading-relaxed">
              Choose the fitting service that best matches your cycling goals and experience level. 
              All fittings include detailed analysis and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white border-2 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  service.popular ? 'border-[#d1d423]' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#d1d423] text-[#494949] px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#494949] mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-center text-[#8c8c8a] mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#d1d423]">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#8c8c8a] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-[#494949] mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-[#d1d423] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-[#8c8c8a]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    service.popular
                      ? 'bg-[#d1d423] text-[#494949] hover:bg-[#c4c71f]'
                      : 'border-2 border-[#d1d423] text-[#494949] hover:bg-[#d1d423]'
                  }`}
                >
                  Book This Service
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-[#8c8c8a] max-w-3xl mx-auto">
              Every fitting follows a proven methodology to ensure optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-[#d1d423] font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#494949] mb-3">Initial Assessment</h3>
              <p className="text-[#8c8c8a] text-sm">
                Discussion of goals, pain points, and riding history
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-[#d1d423] font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#494949] mb-3">Physical Evaluation</h3>
              <p className="text-[#8c8c8a] text-sm">
                Flexibility, mobility, and biomechanical assessment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-[#d1d423] font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#494949] mb-3">Dynamic Analysis</h3>
              <p className="text-[#8c8c8a] text-sm">
                On-bike measurements and motion capture analysis
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-[#d1d423] font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#494949] mb-3">Optimization</h3>
              <p className="text-[#8c8c8a] text-sm">
                Precise adjustments and final position verification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#494949]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your Fitting?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards a more comfortable and efficient ride
          </p>
          <Link
            to="/contact"
            className="bg-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4c71f] transition-all duration-300 inline-flex items-center group"
          >
            Contact Gary Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;