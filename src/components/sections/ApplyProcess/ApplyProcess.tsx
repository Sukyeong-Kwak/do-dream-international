import { useTranslation } from 'react-i18next';
import { getBrandColor } from '../../../lib/colors';
import SectionHeader from '../../common/SectionHeader';
import StepsProcess from '../../common/StepsProcess';

export default function ApplyProcess() {
  const { t } = useTranslation('apply');

  const steps = [
    ...(t('steps.items', { returnObjects: true }) as { num: string; title: string; desc: string }[]),
  ].map((step, index) => {
    const color = getBrandColor(index);
    return { ...step, iconColor: color.icon, borderColor: 'border-transparent' };
  });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom max-w-4xl mx-auto">
        <SectionHeader label={t('steps.label')} title={t('steps.title')} />
        <StepsProcess steps={steps} />
      </div>
    </section>
  );
}
