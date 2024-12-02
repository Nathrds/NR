import { EducationProps } from '../types';

export const EducationItem = ({ icon, degree, institution, year }: EducationProps) => {
  return (
    <article className="item">
      <div className="frame" role="img" aria-label={degree}>
        {icon}
      </div>
      <div className="content">
        <h3 className="title">{degree}</h3>
        <p className="subtitle">{institution}</p>
      </div>
      <p className="period">{year}</p>
    </article>
  );
};