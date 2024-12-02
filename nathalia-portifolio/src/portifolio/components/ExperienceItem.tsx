import { ExperienceProps } from '../types';

export const ExperienceItem = ({ icon, company, role, period }: ExperienceProps) => {
  return (
    <div className="item" role="listitem">
      <div className="frame" aria-hidden="true">{icon}</div>
      <div className="content">
        <h3 className="title">{company}</h3>
        <p className="subtitle">{role}</p>
      </div>
      <p className="period">{period}</p>
    </div>
  );
};