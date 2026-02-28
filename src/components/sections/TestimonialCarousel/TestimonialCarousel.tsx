import { useTranslation } from 'react-i18next';
import Card from '../../common/Card/Card';

interface Testimonial {
  quote: string;
  name: string;
  country: string;
  year: string;
  photo: string;
}

export default function TestimonialCarousel() {
  const { t } = useTranslation('home');

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

  return (
    <section className="section-padding bg-brand-bg/30 border-y border-gray-200">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-primary mb-12 tracking-tighter">
          {t('stories.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-6">
                <p className="text-lg text-brand-text italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-brand-primary text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-brand-muted text-xs">
                      {testimonial.country} • {t('stories.classOf')} {testimonial.year}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
