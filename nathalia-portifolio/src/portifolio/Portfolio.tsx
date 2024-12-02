import { testimonials, skills, certifications, experiences, education, aboutItems } from './data';
import { Testimonial } from './components/Testimonial';
import { SkillItem } from './components/SkillItem';
import { CertificationItem } from './components/CertificationItem';
import { ExperienceItem } from './components/ExperienceItem';
import { EducationItem } from './components/EducationItem';
import { AboutItem } from './components/AboutItem';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
  return (
    <div className={styles.page}>
      <header className={styles.topBar} role="banner">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/89d1eb31dde756913f28bc4f1db8b2393a2beb79626a03a4f45148cc31e5659e?placeholderIfAbsent=true&apiKey=959c2ee901d142ddb70599de45bd7956" alt="Portfolio Logo" className={styles.img} />
        <h1 className={styles.title}>Nathália Portfolio</h1>
        <nav className={styles.navigation} role="navigation">
          <a href="#home" className={styles.tab}>Home</a>
          <a href="#about" className={styles.tab}>About</a>
          <a href="#experience" className={styles.tab}>Experience</a>
          <a href="#skills" className={styles.tab}>Skills</a>
          <a href="#certifications" className={styles.tab}>Certifications</a>
          <a href="#contact" className={styles.tab}>Contact</a>
        </nav>
      </header>

      [Rest of the components implementation following the same pattern...]
    </div>
  );
};