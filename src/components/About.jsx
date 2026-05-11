import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="sec sec-cream route">
      <div className="wrap">
        <div className="about-home">
          <div className="about-home-photos">
            <img src="/assets/img/Gallery/siggraph 2023.png" alt="" loading="lazy" />
            <img src="/assets/img/Gallery/interview 2023.png" alt="" loading="lazy" />
            <img src="/assets/img/Gallery/times_square.JPG" alt="" loading="lazy" style={{ objectPosition: 'center' }} />
            <img src="/assets/img/Gallery/instagram.jpg" alt="" loading="lazy" />
          </div>
          <div className="about-home-text">
            <h2 className="heading-lg">About me</h2>
            <div className="personality-tags" style={{ marginBottom: '1.25rem' }}>
              <span className="p-tag">🎓 CMU '23</span>
              <span className="p-tag">🏆 3x Kaggle GM</span>
              <span className="p-tag">🎤 50+ Talks</span>
              <span className="p-tag">💻 Coding since 13</span>
            </div>
            <p className="body-md">
              Data scientist turned technical product marketing manager. Currently at Amazon Web Services, where I own model customization and training on SageMaker AI.
            </p>
            <p className="body-md">
              I'm also the youngest Triple Kaggle Grandmaster (#3 globally in Datasets out of 31M+ users), a Carnegie Mellon alum, and I spend a lot of my time mentoring and creating content about AI careers.
            </p>
            <Link to="/about" className="btn-outline" style={{ marginTop: '1.5rem' }}>Keep reading</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
