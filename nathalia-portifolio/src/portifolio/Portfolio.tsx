import { testimonials, skills, certifications, experiences, education, aboutItems } from './data';
import { Testimonial } from './components/Testimonial';
import { SkillItem } from './components/SkillItem';
import { CertificationItem } from './components/CertificationItem';
import { ExperienceItem } from './components/ExperienceItem';
import { EducationItem } from './components/EducationItem';
import { AboutItem } from './components/AboutItem';
import styles from './css/Portfolio.module.css';

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

      <main role="main">
        {/* Hero Section */}
        <section className={styles.section} id="home">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d935f44b3c424fe97725cbb9cc549f708e289613635011b009a502e28083ccd7?placeholderIfAbsent=true&apiKey=959c2ee901d142ddb70599de45bd7956" alt="Nathália's profile" className={styles.img2} />
          <div className={styles.container}>
            <h2 className={styles.title2}>Nathália Rodrigues</h2>
            <div className={styles.selection}>
              <span className={styles.labelNormal}>Front-end Developer</span>
            </div>
            <p className={styles.description}>
              Passionate about creating responsive and engaging web experiences.
            </p>
          </div>
          <a href="https://github.com" className={styles.button} target="_blank" rel="noopener noreferrer">
            <span className={styles.primary}>View Github</span>
          </a>
        </section>

        {/* About Section */}
        <section className={styles.section2} id="about">
          <div className={styles.container2}>
            <h2 className={styles.title3}>Hello, I'm Nathália.</h2>
            <p className={styles.description2}>
              Front-end Developer with expertise in HTML, CSS, JavaScript, TypeScript, MaterialUI and React.
            </p>
            <a href="#contact" className={styles.button2}>
              <span className={styles.primary2}>Contact Me</span>
            </a>
          </div>
        </section>

        {/* About Items */}
        <section className={styles.contents}>
          <div className={styles.container3}>
            <h2 className={styles.title4}>About Me</h2>
            <p className={styles.description3}>
              Driven web developer with a keen eye for design.
            </p>
            <div className={styles.list}>
              {aboutItems.map((item, index) => (
                <AboutItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.list2} id="experience">
          <div className={styles.container5}>
            <h2 className={styles.title7}>Professional Experience</h2>
            <p className={styles.description4}>
              Check out my previous roles and projects.
            </p>
          </div>
          <div className={styles.list3}>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.list4}>
          <div className={styles.container6}>
            <h2 className={styles.title10}>Academic Background</h2>
            <p className={styles.description5}>My educational journey.</p>
          </div>
          <div className={styles.list5}>
            {education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className={styles.list6} id="certifications">
          <div className={styles.container7}>
            <div className={styles.container8}>
              <h2 className={styles.title13}>Certifications</h2>
              <p className={styles.description6}>Some of my certifications.</p>
            </div>
            <div className={styles.list7}>
              {certifications.map((cert, index) => (
                <CertificationItem key={index} {...cert} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.dataMetrics} id="skills">
          <div className={styles.container10}>
            <div className={styles.container11}>
              <h2 className={styles.title16}>Skills</h2>
              <p className={styles.description7}>Technical & Soft Skills</p>
            </div>
          </div>
          <div className={styles.list8} role="list">
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.socialPosts}>
          <div className={styles.socialPosts2}>
            <div className={styles.container12}>
              <h2 className={styles.title17}>Testimonials</h2>
              <p className={styles.description8}>What Others Say About Me</p>
            </div>
            <div className={styles.list9}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.form} id="contact">
          <h2 className={styles.container13}>Contact Me</h2>
          <div className={styles.list10}>
            <div className={styles.button3}>
              <a 
                href="https://linkedin.com" 
                className={styles.seconday}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
              <a 
                href="mailto:contact@example.com" 
                className={styles.primary3}
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.section3} role="contentinfo">
        © 2022 Web Developer Portfolio | All rights reserved
      </footer>
    </div>
  );
};