export interface TestimonialProps {
    author: string;
    role: string;
    content: string;
  }
  
  export interface SkillProps {
    name: string;
  }
  
  export interface CertificationProps {
    icon: string;
    title: string;
    issuer: string;
  }
  
  export interface ExperienceProps {
    icon: string;
    company: string;
    role: string;
    period: string;
  }
  
  export interface EducationProps {
    icon: string;
    degree: string;
    institution: string;
    year: string;
  }
  
  export interface AboutItemProps {
    title: string;
    description: string;
  }