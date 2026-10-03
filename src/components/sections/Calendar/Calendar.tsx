import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Mock schedule data for the calendar
// Since the program is 120 lectures over months, we mock an example flow for April-June
const calendarData = [
    {
        id: 'month-1',
        name: { en: 'April', ko: '4월', ja: '4月', 'zh-TW': '4月', 'zh-CN': '4月' },
        days: 30,
        startDay: 3, // Assuming April starts on Wednesday (0=Sun, 1=Mon, ..., 6=Sat)
        highlights: [
            { day: 1, type: 'start', text: { en: 'Opening Ceremony', ko: '개강 예배', ja: '開講礼拝', 'zh-TW': '開學崇拜', 'zh-CN': '开学崇拜' } },
            { day: 15, type: 'lecture', text: { en: 'Our Great Salvation', ko: '우리의 위대한 구원', ja: '私たちの偉大な救い', 'zh-TW': '我們偉大的救恩', 'zh-CN': '我们伟大的救恩' } },
            { day: 28, type: 'activity', text: { en: 'Seoul Cultural Tour', ko: '서울 문화 탐방', ja: 'ソウル文化探訪', 'zh-TW': '首爾文化參訪', 'zh-CN': '首尔文化参访' } },
        ]
    },
    {
        id: 'month-2',
        name: { en: 'May', ko: '5월', ja: '5月', 'zh-TW': '5月', 'zh-CN': '5月' },
        days: 31,
        startDay: 5, // May starts on Friday
        highlights: [
            { day: 5, type: 'lecture', text: { en: 'The Gospel of the Cross', ko: '십자가의 복음 초집중', ja: '十字架の福音 集中講義', 'zh-TW': '十字架的福音 密集課程', 'zh-CN': '十字架的福音 密集课程' } },
            { day: 20, type: 'activity', text: { en: 'Local Church Visit', ko: '지역 교회 탐방', ja: '地域教会の訪問', 'zh-TW': '當地教會參訪', 'zh-CN': '当地教会参访' } },
        ]
    },
    {
        id: 'month-3',
        name: { en: 'June', ko: '6월', ja: '6月', 'zh-TW': '6月', 'zh-CN': '6月' },
        days: 30,
        startDay: 1, // June starts on Monday
        highlights: [
            { day: 10, type: 'lecture', text: { en: 'Missional Church', ko: '선교적 교회 실습', ja: '宣教的教会の実習', 'zh-TW': '宣教的教會實習', 'zh-CN': '宣教的教会实习' } },
            { day: 20, type: 'lecture', text: { en: 'Spiritual Leadership', ko: '영적 리더십 훈련', ja: '霊的リーダーシップ訓練', 'zh-TW': '屬靈領導力訓練', 'zh-CN': '属灵领导力训练' } },
            { day: 30, type: 'end', text: { en: 'Graduation / Sending Service', ko: '수료 및 파송 예배', ja: '修了・派遣礼拝', 'zh-TW': '結業與差派崇拜', 'zh-CN': '结业与差派崇拜' } },
        ]
    }
];

const CALENDAR_TITLE: Record<string, string> = {
    en: 'Training Calendar Overview',
    ko: '주요 일정 캘린더',
    ja: '主要スケジュール・カレンダー',
    'zh-TW': '主要行程日曆',
    'zh-CN': '主要行程日历',
};

const CALENDAR_SUBTITLE: Record<string, string> = {
    en: "Get a bird's-eye view of our core lectures and special activities throughout the training period.",
    ko: '전체 훈련 기간 동안의 핵심 강의와 특별 활동 일정을 한눈에 확인하세요.',
    ja: '訓練期間全体の主要な講義と特別活動の日程を、一目でご確認ください。',
    'zh-TW': '一次掌握整個訓練期間的主要課程與特別活動行程。',
    'zh-CN': '一次掌握整个训练期间的主要课程与特别活动行程。',
};

const PHASE_LABEL: Record<string, string> = {
    en: 'Phase',
    ko: '여정',
    ja: 'の歩み',
    'zh-TW': '歷程',
    'zh-CN': '历程',
};

export default function Calendar() {
    const { i18n } = useTranslation('program');
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

    const LANGS = ['ko', 'ja', 'zh-TW', 'zh-CN'] as const;
    const lang = LANGS.find((code) => code === i18n.language) ?? 'en';
    const currentMonth = calendarData[currentMonthIndex];

    const handlePrev = () => {
        setCurrentMonthIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentMonthIndex((prev) => (prev < calendarData.length - 1 ? prev + 1 : prev));
    };

    // Generate blank cells for the start of the month
    const blanks = Array.from({ length: currentMonth.startDay }).map((_, i) => (
        <div key={`blank-${i}`} className="h-24 md:h-32 bg-gray-50/50 border border-gray-100 rounded-lg"></div>
    ));

    // Generate day cells
    const days = Array.from({ length: currentMonth.days }).map((_, i) => {
        const dayIndex = i + 1;
        const highlight = currentMonth.highlights.find(h => h.day === dayIndex);

        let highlightStyle = "";
        if (highlight) {
            if (highlight.type === 'start' || highlight.type === 'end') highlightStyle = "bg-brand-accent-pink/20 border-brand-accent-pink text-brand-primary-blue";
            else if (highlight.type === 'activity') highlightStyle = "bg-brand-primary-teal/20 border-brand-primary-teal text-brand-primary-blue";
            else highlightStyle = "bg-brand-primary-blue/10 border-brand-primary-blue/30 text-brand-primary-blue";
        }

        return (
            <div
                key={`day-${dayIndex}`}
                className={`h-24 md:h-32 p-2 border rounded-lg flex flex-col transition-colors ${highlight ? highlightStyle : 'border-gray-100 hover:border-brand-primary-teal/30 bg-white'}`}
            >
                <span className={`font-bold ${highlight ? 'opacity-100' : 'text-gray-400'}`}>{dayIndex}</span>
                {highlight && (
                    <div className="mt-auto text-xs md:text-sm font-semibold leading-tight line-clamp-2">
                        {highlight.text[lang]}
                    </div>
                )}
            </div>
        );
    });

    const allCells = [...blanks, ...days];
    const weekDays = lang === 'ko'
        ? ['일', '월', '화', '수', '목', '금', '토']
        : lang === 'ja'
            ? ['日', '月', '火', '水', '木', '金', '土']
            : lang.startsWith('zh')
                ? ['日', '一', '二', '三', '四', '五', '六']
                : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <section className="section-padding bg-gray-50 border-t border-gray-200">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-primary-blue mb-4">
                        {CALENDAR_TITLE[lang] ?? CALENDAR_TITLE.en}
                    </h2>
                    <p className="text-lg text-brand-text max-w-2xl mx-auto">
{CALENDAR_SUBTITLE[lang] ?? CALENDAR_SUBTITLE.en}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={handlePrev}
                            disabled={currentMonthIndex === 0}
                            className={`p-3 rounded-full transition-colors ${currentMonthIndex === 0 ? 'text-gray-300' : 'text-brand-primary-blue hover:bg-brand-primary-blue/10'}`}
                        >
                            <HiChevronLeft className="w-6 h-6" />
                        </button>
                        <h3 className="text-2xl font-extrabold text-brand-primary-teal tracking-tight">
                            {currentMonth.name[lang]} {PHASE_LABEL[lang] ?? PHASE_LABEL.en}
                        </h3>
                        <button
                            onClick={handleNext}
                            disabled={currentMonthIndex === calendarData.length - 1}
                            className={`p-3 rounded-full transition-colors ${currentMonthIndex === calendarData.length - 1 ? 'text-gray-300' : 'text-brand-primary-blue hover:bg-brand-primary-blue/10'}`}
                        >
                            <HiChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="w-full">
                        {/* Weekday Names */}
                        <div className="grid grid-cols-7 gap-2 mb-4">
                            {weekDays.map((day, idx) => (
                                <div key={day} className={`text-center font-bold text-sm uppercase tracking-wider ${idx === 0 ? 'text-brand-accent-pink' : 'text-brand-muted'}`}>
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Days Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentMonthIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-7 gap-2"
                            >
                                {allCells}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Legend */}
                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded bg-brand-primary-blue/10 border border-brand-primary-blue/30"></div>
                            <span className="text-brand-text">{lang === 'ko' ? '핵심 강의' : 'Core Lectures'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded bg-brand-primary-teal/20 border border-brand-primary-teal"></div>
                            <span className="text-brand-text">{lang === 'ko' ? '특별 활동/탐방' : 'Special Activities'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 rounded bg-brand-accent-pink/20 border border-brand-accent-pink"></div>
                            <span className="text-brand-text">{lang === 'ko' ? '주요 행사' : 'Major Events'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
