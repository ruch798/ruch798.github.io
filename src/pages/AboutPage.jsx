import { Link } from 'react-router-dom'
import { education, certifications } from '../data'

const certGroups = {
  'Cloud & Infrastructure': ['AWS Cloud Practitioner'],
  'Machine Learning & AI': ['AWS AI Practitioner', 'Machine Learning', 'Deep Learning Specialization', 'Fundamentals of Accelerated Computing with CUDA Python'],
  'Data & Analytics': ['Tableau Analyst', 'Tableau Data Scientist', 'Intermediate R', 'Advanced Google Analytics', 'Product Management for AI & Data Science'],
  'Development': ['Flutter and Dart', 'Android Foundation Nanodegree I, II', 'RPA Developer Advanced'],
  'Other': ['Privacy Law and Data Protection'],
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <section className="sec">
        <div className="wrap">
          <Link to="/" className="back-link">← Back home</Link>
          <div className="about-full">
            <div className="about-full-text">
              <h1 className="heading-xl">About me</h1>
              <div className="personality-tags" style={{ margin: '1.5rem 0' }}>
                <span className="p-tag">🎓 CMU '23</span>
                <span className="p-tag">🏆 3x Kaggle GM</span>
                <span className="p-tag">🎤 50+ Talks</span>
                <span className="p-tag">💻 Coding since 13</span>
              </div>
              <p className="body-md">
                Data scientist turned technical product marketing manager. Currently at Amazon Web Services, where I own model customization and training on SageMaker AI.
              </p>
              <p className="body-md">
                I started coding at 13, which built my interest in Computer Science well before I chose to study Computer Engineering in college. This search eventually led me to Data Science. I jumped in by taking courses, doing research, and working on my own projects, and Kaggle played a huge role in that journey.
              </p>
              <p className="body-md">
                One of my proudest achievements was becoming the youngest Triple Kaggle Grandmaster, ranked 3rd globally in Datasets among 31M+ data scientists. My active contributions led me to become a Data Science Global Ambassador at HP and NVIDIA.
              </p>
              <p className="body-md">
                At OpenMined, I led a pivotal research collaboration with Twitter on algorithmic accountability, studying the amplification of political content. I also chaired meetings with the United Nations Privacy Enhancing Technologies Lab and independently built new data science demonstrations using state of the art techniques.
              </p>
              <p className="body-md">
                At HP, I led product marketing for AI Studio, Boost, Gen AI Lab, and AI workstations, presenting to 500+ potential customers across 10 major trade shows. I ran a global hackathon with DevPost and NVIDIA that attracted 1,000+ participants and authored a weekly AI strategy newsletter that influenced the product roadmap.
              </p>
              <p className="body-md">
                Beyond my professional work, I'm dedicated to mentoring early-career professionals, helping aspiring technologists break into the tech industry through speaking engagements and by sharing my own journey. In my 5-9, I create content about AI careers, mentor data scientists at KaggleX and CMU, and dive deep into the latest ML research. I remain committed to empowering the next generation of innovators in the evolving world of AI and data science.
              </p>
            </div>
            <div className="about-full-photos">
              <img src="/assets/img/Gallery/siggraph 2023.png" alt="SIGGRAPH 2023" className="about-full-img" loading="lazy" />
              <img src="/assets/img/Gallery/interview 2023.png" alt="Interview" className="about-full-img" loading="lazy" />
              <img src="/assets/img/Gallery/times_square.JPG" alt="Times Square" className="about-full-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="sec sec-cream">
        <div className="wrap">
          <h2 className="heading-lg">Education</h2>
          <div className="role-grid" style={{ marginTop: '1.5rem', justifyItems: 'center', maxWidth: '100%', margin: '1.5rem auto 0', gridTemplateColumns: '1fr 1fr' }}>
            {education.map((e, i) => (
              <div className="role-card" key={i} style={{ minHeight: '280px' }}>
                <div className="role-card-accent" style={{ background: i === 0 ? '#FFDAB3' : '#A8D5BA' }} />
                <div className="role-card-logo" style={{ aspectRatio: '1.5/1' }}><img src={e.img} alt="" loading="lazy" /></div>
                <div className="role-card-info">
                  <h4 className="role-card-title" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{e.title}</h4>
                  <span className="role-card-date" style={{ fontSize: '0.9rem' }}>{e.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="sec">
        <div className="wrap">
          <h2 className="heading-lg">Certifications</h2>
          <p className="body-md" style={{ maxWidth: 550, marginBottom: '2rem' }}>
            I keep learning. From Stanford's ML course to NVIDIA's CUDA certification, I stay sharp across the stack.
          </p>
          {Object.entries(certGroups).map(([group, titles]) => {
            const items = titles.map(t => certifications.find(c => c.title === t)).filter(Boolean)
            if (!items.length) return null
            return (
              <div key={group} style={{ marginBottom: '2rem' }}>
                <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>{group}</h3>
                <div className="cert-group-grid">
                  {items.map((c, i) => (
                    <a className="cert-card" href={c.link} target="_blank" rel="noopener noreferrer" key={i}>
                      <div className="cert-card-logo"><img src={c.img} alt="" loading="lazy" /></div>
                      <div className="cert-card-info">
                        <h4>{c.title}</h4>
                        <span>{c.date}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
