import { useState } from 'react'
import { testimonials, skills, certifications, experiences, education, aboutItems } from './data'
import styles from './css/Portfolio.module.css'


import Logo from '../assets/Logo NR roxo.png'
import Avatar from '../assets/avatar.png'
import Me from '../assets/image-about-me.png'
import CertifiedAWS from '../assets/Certificado-AWS.png'
import CertifiedScrum from '../assets/certificate-scrum 1.png'

export const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Função para alternar o menu
  const changeMenu = () => {
    setMenuOpen(!menuOpen)
  };

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    setMenuOpen(false)
  };

  return (
    <div className={styles.page}>
      <header className={styles.topBar} role="banner">
        <div className={styles.topBar_logo}>
            <img src={Logo} alt="Portfolio Logo" className={styles.img} />
            <h1 className={styles.title}>Nathália Portfolio</h1>
        </div>
        <button 
          className={styles.hamburger} 
          aria-label="Toggle navigation" 
          aria-expanded={menuOpen}
          // onClick={() => setMenuOpen(!menuOpen)}
          onClick={changeMenu}
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
        <nav 
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`} role="navigation"
        >
          <a href="#home" className={styles.tab} onClick={closeMenu}>Home</a>
          <a href="#about" className={styles.tab} onClick={closeMenu}>About</a>
          <a href="#experience" className={styles.tab} onClick={closeMenu}>Experience</a>
          <a href="#skills" className={styles.tab} onClick={closeMenu}>Skills</a>
          <a href="#certifications" className={styles.tab} onClick={closeMenu}>Certifications</a>
          <a href="#contact" className={styles.tab} onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main role="main">
        {/* Hero Section */}
        <section className={styles.section} id="home">
          <div className={styles.section_container}>
              <img src={Avatar} alt="Nathália's profile" className={styles.img2} />
              <div className={styles.container}>
                <h2 className={styles.title2}>Nathália Rodrigues</h2>
                <div className={styles.selection}>
                  <span className={styles.labelNormal}>Front-end Developer</span>
                </div>
                <p className={styles.description}>
                  Passionate about creating responsive and engaging web experiences.
                </p>
              </div>
          </div>
          <a href="https://github.com/Nathrds" className={styles.button} target="_blank" rel="noopener noreferrer">
            <span className={styles.primary}>View Github</span>
          </a>
        </section>

        {/* About Section */}
        <section className={styles.section2} id="about">
          <div className={styles.container2}>
            <h2 className={styles.title3}>Hello, I'm Nathália.</h2>
            <p className={styles.description2}>
              Front-end Developer with expertise in HTML, CSS, JavaScript, TypeScript, MaterialUI, React and Figma.
            </p>
            <a href="mailto:nathaliarsantos@live.com" className={styles.button2}>
              <span className={styles.primary2}>Contact Me</span>
            </a> 
          </div>
        </section>

        {/* About Items */}
        <section className={styles.contents}>
          <div className={styles.container3}>
            <img src={Me} alt="Me" className={styles.img3} />
            <div className={styles.container_aboutMe}>
              <h2 className={styles.title4}>About Me</h2>
              <p className={styles.description3}>
                Driven web developer with a keen eye for design.
              </p>
              <div className={styles.list}>
              {aboutItems.map((item, index) => (
                  <div key={index} className={styles.aboutItem}>
                    <h3 className={styles.aboutItemTitle}>{item.title}</h3>
                    <p className={styles.aboutItemDescription}>{item.description}</p>
                  </div>
                ))}
              </div>
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
              <div key={index} className={styles.experienceItem}>
                <p className={styles.experienceIcon}>{exp.icon}</p>
                <p className={styles.experienceCompany}>{exp.company}</p>
                <h3 className={styles.experienceTitle}>{exp.role}</h3>
                <p className={styles.experiencePeriod}>{exp.period}</p>
              </div>
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
            <div key={index} className={styles.educationItem}>
              <p className={styles.educationIcon}>{edu.icon}</p>
              <p className={styles.educationDegree}>{edu.degree}</p>
              <h3 className={styles.educationInstitution}>{edu.institution}</h3>
              <p className={styles.educationYear}>{edu.year}</p>
            </div>
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
              <div key={index} className={styles.certificationItem}>
                <p className={styles.certificationIcon}>{cert.icon}</p>
                <p className={styles.certificationTitle}>{cert.title}</p>
                <p className={styles.certificationIssuer}>{cert.issuer}</p>
              </div>
              ))}
            </div>
              <div className={styles.listImgCertified}>
                <img src={CertifiedAWS} alt="Certified AWS" className={styles.img4} />
                <img src={CertifiedScrum} alt="Certified AWS" className={styles.img5} />
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
            <div className={styles.list8} role="list">
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <p className={styles.skillName}>{skill.name}</p>
                </div>
              ))}
            </div>
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
                <div key={index} className={styles.testimonialItem}>
                  <div className={styles.testimonialsRoleBkg}>
                    <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                    <p className={styles.testimonialRole}>{testimonial.role}</p>
                  </div>
                  <p className={styles.testimonialContent}>"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.form} id="contact">
          <h2 className={styles.title18}>Contact Me</h2>
          <div className={styles.list10}>
            <div className={styles.button3}>
              <a 
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
                className={styles.seconday}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
              <a 
                href="mailto:nathaliarsantos@live.com" 
                className={styles.primary3}
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.section3} role="contentinfo">
        © 2024 Web Developer Portfolio | All rights reserved
      </footer>
    </div>
  );
};