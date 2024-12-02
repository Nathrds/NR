import { EducationProps } from '../types';

export const EducationItem = ({ icon, degree, institution, year }: EducationProps) => {
  return (
    <div className="item" role="listitem">
      <div className="frame" aria-hidden="true">{icon}</div>
      <div className="content">
        <h3 className="title">{degree}</h3>
        <p className="subtitle">{institution}</p>
      </div>
      <p className="year">{year}</p>
    </div>
  );
};