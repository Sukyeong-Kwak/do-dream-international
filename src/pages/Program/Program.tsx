import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';

export default function Program() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const curriculum = [
    {
      title: 'Korean Church History & Theology',
      description: 'Explore the unique development and theology of the Korean church, from persecution to explosive growth.',
    },
    {
      title: 'Cross-Cultural Communication',
      description: 'Learn effective communication strategies across cultural boundaries and develop cultural intelligence.',
    },
    {
      title: 'Bible Study Methods',
      description: 'Master various approaches to Scripture study including Korean inductive methods and devotional practices.',
    },
    {
      title: 'Worship & Prayer',
      description: 'Experience Korean worship styles and prayer traditions, including early morning prayer (Saemoonsuk).',
    },
    {
      title: 'Korean Language Basics',
      description: 'Gain functional Korean language skills for daily life and ministry contexts.',
    },
    {
      title: 'Leadership Development',
      description: 'Develop leadership skills through hands-on ministry and mentorship relationships.',
    },
  ];

  const schedule = [
    { time: '5:30 AM', activity: 'Early Morning Prayer (Saemoonsuk)' },
    { time: '7:00 AM', activity: 'Breakfast & Personal Devotions' },
    { time: '9:00 AM', activity: 'Morning Classes (Theology, Missiology)' },
    { time: '12:00 PM', activity: 'Lunch & Rest' },
    { time: '2:00 PM', activity: 'Afternoon Sessions (Language, Cultural Studies)' },
    { time: '5:00 PM', activity: 'Ministry Practice / Small Groups' },
    { time: '6:30 PM', activity: 'Dinner & Fellowship' },
    { time: '8:00 PM', activity: 'Evening Worship / Personal Study' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            8-Month Intensive Training Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Comprehensive missionary training from a Korean church perspective
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our program provides a unique opportunity to experience missionary training through the lens of Korea's dynamic church movement. You'll gain practical skills, theological depth, and cross-cultural competency while being immersed in one of the world's most vibrant Christian communities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">8</div>
                <div className="text-gray-600">Months</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-accent-600 mb-2">15+</div>
                <div className="text-gray-600">Countries Represented</div>
              </Card>
              <Card className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-gray-600">Community Living</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Curriculum</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer"
                  hoverable
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    {openAccordion === index ? (
                      <HiChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <HiChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  {openAccordion === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-600 leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Daily Schedule</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monday - Friday</h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-start border-l-4 border-primary-500 pl-4 py-2">
                    <span className="font-bold text-primary-600 w-24 flex-shrink-0">{item.time}</span>
                    <span className="text-gray-700">{item.activity}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500 italic">
                * Weekends include church services, cultural activities, and free time for rest and exploration.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable 8-month journey of growth, learning, and transformation.
          </p>
          <Link to="/apply">
            <Button size="lg">Apply Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
