import { AboutItemProps } from '../types';

export const AboutItem = ({ title, description }: AboutItemProps) => {
  return (
    <article className="article">
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{description}</p>
      </div>
    </article>
  );
};