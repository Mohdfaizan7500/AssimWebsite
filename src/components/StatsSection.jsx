import CountUp from './CountUp';
import Icon from './Icon';
import { site } from '../data/site';

const icons = ['Building2', 'CalendarRange', 'Users', 'HardHat'];

export default function StatsSection() {
  return (
    <section className="relative z-10 bg-navy-800">
      <div className="container-x">
        <div className="grid grid-cols-2 divide-navy-700/60 lg:grid-cols-4 lg:divide-x">
          {site.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-4 py-8 text-center lg:py-10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
                <Icon name={icons[index]} className="h-5 w-5" />
              </span>
              <p className="font-display text-4xl font-extrabold text-white lg:text-5xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}