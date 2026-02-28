import { useTranslation } from 'react-i18next';
import { HiGlobeAsiaAustralia, HiAcademicCap, HiRocketLaunch } from 'react-icons/hi2';

export default function ProcessFlow() {
    const { t } = useTranslation('home');

    const steps = [
        {
            num: '01',
            title: t('process.s1_title'),
            desc: t('process.s1_desc'),
            icon: HiGlobeAsiaAustralia,
            color: 'text-brand-primary-blue',
            bgIcon: 'bg-brand-primary-blue/10',
            isActive: false,
        },
        {
            num: '02',
            title: t('process.s2_title'),
            desc: t('process.s2_desc'),
            icon: HiAcademicCap,
            color: 'text-brand-primary-teal',
            bgIcon: 'bg-brand-primary-teal/10',
            isActive: true, // Center step highlighted
        },
        {
            num: '03',
            title: t('process.s3_title'),
            desc: t('process.s3_desc'),
            icon: HiRocketLaunch,
            color: 'text-brand-accent-pink',
            bgIcon: 'bg-brand-accent-pink/10',
            isActive: false,
        }
    ];

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom relative z-10 w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-blue mb-6">
                        {t('process.title')}
                    </h2>
                    <p className="text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
                        {t('process.subtitle')}
                    </p>
                </div>

                {/* Process Flow Container */}
                <div className="relative">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0">
                        {/* Gradient fill line */}
                        <div className="h-full bg-gradient-to-r from-brand-primary-blue via-brand-primary-teal to-brand-accent-pink opacity-30"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 ${step.isActive
                                        ? 'bg-white shadow-xl shadow-brand-primary-teal/10 border-2 border-brand-primary-teal/20 -translate-y-2'
                                        : 'bg-gray-50 border border-gray-100 hover:shadow-md hover:-translate-y-1'
                                    }`}
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-4 bg-white px-4 py-1 rounded-full text-sm font-bold shadow-sm border border-gray-100 text-brand-muted uppercase tracking-wider">
                                    Step {step.num}
                                </div>

                                {/* Icon Circle */}
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 mt-4 ${step.bgIcon} ${step.color}`}>
                                    <step.icon className="w-10 h-10" />
                                </div>

                                <h3 className={`text-2xl font-bold mb-4 ${step.isActive ? 'text-brand-primary-teal' : 'text-brand-primary-blue'}`}>
                                    {step.title}
                                </h3>

                                <p className="text-brand-text leading-relaxed">
                                    {step.desc}
                                </p>

                                {/* Arrow pointing right (mobile: down) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-gray-300">
                                        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
