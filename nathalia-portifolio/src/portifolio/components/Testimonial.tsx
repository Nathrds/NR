import { TestimonialProps } from '../types';

export const Testimonial = ({ author, role, content }: TestimonialProps) => {
  return (
    <article className="post">
      <header className="user">
        <div className="avatar">
          <h3 className="title">{author} - {role}</h3>
        </div>
        <div className="iconButtons" />
      </header>
      <p className="textContent">{content}</p>
    </article>
  );
};