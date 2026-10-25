import { useInView } from '../hooks/useInView';

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  threshold = 0.15,
}) {
  const [ref, inView] = useInView({ threshold });

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
