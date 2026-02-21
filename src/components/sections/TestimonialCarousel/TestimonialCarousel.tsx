import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Card from '../../common/Card/Card';

interface Testimonial {
  quote: string;
  name: string;
  country: string;
  year: string;
  photo: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      quote: "This program transformed my understanding of missions. Learning from the Korean church's perspective gave me insights I never could have gained elsewhere.",
      name: 'Sarah Johnson',
      country: 'USA',
      year: '2025',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    {
      quote: 'The community here is incredible. I made friends from 15 different countries and experienced Korean hospitality that exceeded all my expectations.',
      name: 'Miguel Torres',
      country: 'Mexico',
      year: '2025',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      quote: 'The training was rigorous but deeply enriching. I returned home equipped not just with knowledge, but with a heart transformed for cross-cultural ministry.',
      name: 'Aditi Sharma',
      country: 'India',
      year: '2024',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    },
    {
      quote: "Experiencing Korea's vibrant church culture firsthand was eye-opening. The early morning prayers, the fellowship, the worship - it all left a lasting impact.",
      name: 'Emmanuel Okafor',
      country: 'Nigeria',
      year: '2024',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-teal-50">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Hear from Our Alumni
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Photo */}
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].country} • Class of{' '}
                        {testimonials[currentIndex].year}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-primary-50"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-6 h-6 text-primary-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-primary-50"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
