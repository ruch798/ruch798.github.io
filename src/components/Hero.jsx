import { ReactTyped } from 'react-typed'

export default function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-wave">Hi, I'm Ruchi 👋</p>
          <h1 className="hero-headline">
            I turn complex AI into stories people <em style={{ fontFamily: 'var(--font-accent)', fontStyle: 'normal' }}>actually care about.</em>
          </h1>
          <p className="hero-desc">
            I've spent my career making data science accessible, from leading data science at OpenMined to speaking at Google Cloud Next.
          </p>
          <div className="hero-roles">
            <ReactTyped
              strings={[
                'Product Marketing Manager at Amazon Web Services',
                'Youngest Triple Kaggle Grandmaster',
                'Google Cloud Next Speaker',
                'Carnegie Mellon Alum',
              ]}
              typeSpeed={50}
              backSpeed={25}
              backDelay={2000}
              loop
            />
          </div>
          <div className="hero-ctas">
            <a href="#about" className="btn-shadow"
              onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
              More about me
            </a>
            <a href="#contact" className="btn-outline"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/img/Portfolio_picture.png" alt="Ruchi Bhatia" />
        </div>
      </div>
    </div>
  )
}
