import { ExperienceProps } from '../types';

export const ExperienceItem = ({ icon, company, role, period }: ExperienceProps) => {
  return (
    <article className="item">
      <div className="frame" role="img" aria-label={`${role} at ${company}`}>
        {icon}
      </div>
      <div className="content">
        <h3 className="title">{company}</h3>
        <p className="subtitle">{role}</p>
      </div>
      <p className="period">{period}</p>
    </article>
  );
};