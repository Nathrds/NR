import { TestimonialProps, SkillProps, CertificationProps, ExperienceProps, EducationProps, AboutItemProps } from './types';

export const testimonials: TestimonialProps[] = [
  {
    author: "Bruno Carnavalli",
    role: "Bruno was guiding Nathalia",
    content: "I've had the pleasure of knowing Nathalia for about a year now, during which I served as one of the instructors for her five-month internship at Compass.UOL. In my role, I was responsible for observing her technical and interpersonal skills, of which Nathalia consistently impressed me with her show of a clear understanding of development principles, while effectively communicating her progress. Her work always stood out to me and the rest of the team, earning our recognition. That said, her skills in communication and leadership are only matched by her drive to successfully deliver results, whilst improving her existing knowledge and learning from any mistakes listed in the feedbacks we provided. Her projects were some of the best I've seen. She is an avid learner and very persistent, consistently showing a very sharp skill when it comes to problem-solving. On a personal level, I can't help but to emphasize how much of an empathetic, approachable, and collaborative team member she is. Always offering support to her peers and stepping up whenever someone encountered obstacles. Features that left a lasting impression on our team. To be her mentor was one of the most rewarding experiences I've had in my almost 2 years as an instructor and I wholeheartedly recommend her to any organization or role where a dedicated, talented, and thoughtful professional is needed."
  },
  {
    author: "Jamile de Sousa",
    role: "Jamile worked with Nathalia in the same team",
    content: "Nathalia is an exceptional professional, committed, and makes a difference. During a scholarship program we worked on together, she served as Scrum Master, performing beyond exemplary. Her dedication stands out, always helping both the scholarship holders and colleagues overcome challenges. She has always shown a willingness to learn, share knowledge, and contribute to the team's success. It was a privilege to work by her side!"
  }
];

export const skills: SkillProps[] = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "MaterialUI" },
  { name: "React" },
  { name: "Figma" },
  { name: "Scrum Master" },
  { name: "Kanban" },
  { name: "English" },
  { name: "Spanish" }
];

export const certifications: CertificationProps[] = [
  {
    icon: "🏆",
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS Certified"
  },
  {
    icon: "🏆",
    title: "Scrum Foundation",
    issuer: "CertiProf"
  }
];

export const experiences: ExperienceProps[] = [
  {
    icon: "💼",
    company: "Compass UOL",
    role: "Trainee Front-end Developer",
    period: "May 2024 - Nov 2024"
  },
  {
    icon: "💻",
    company: "Compass UOL",
    role: "Intern in Front-end Development (React)",
    period: "Nov 2023 - Apr 2024"
  }
];

export const education: EducationProps[] = [
  {
    icon: "🎓",
    degree: "Postgraduate MBA in Project Management",
    institution: "Gran Cursos University",
    year: "2025"
  },
  {
    icon: "🎓",
    degree: "Analysis and System Development",
    institution: "SENAC DF University of Technology",
    year: "2024"
  },
  {
    icon: "🎓",
    degree: "Architecture and Urbanism",
    institution: "Unieuro University",
    year: "2019"
  }
];

export const aboutItems: AboutItemProps[] = [
  {
    title: "Personal Description",
    description: "I specialize in creating user-friendly interfaces with a focus on accessibility and performance."
  },
  {
    title: "Professional Objective",
    description: "Seeking opportunities to collaborate on innovative web projects that push boundaries and gain experience as a Scrum Master to become a strong team management coordinator."
  }
];