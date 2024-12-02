import { CertificationProps } from '../types';

export const CertificationItem = ({ icon, title, issuer }: CertificationProps) => {
  return (
    <div className="item" role="listitem">
      <div className="frame" aria-hidden="true">{icon}</div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{issuer}</p>
      </div>
    </div>
  );
};