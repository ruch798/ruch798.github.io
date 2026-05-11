const socials = [
  { name: 'LinkedIn', icon: 'ion-social-linkedin', href: 'https://www.linkedin.com/in/ruchi798/', color: '#0A66C2' },
  { name: 'GitHub', icon: 'ion-social-github', href: 'https://github.com/ruch798', color: '#333' },
  { name: 'Twitter', icon: 'ion-social-twitter', href: 'https://twitter.com/ruchi798', color: '#1DA1F2' },
  { name: 'YouTube', icon: 'fa fa-youtube-play', href: 'https://www.youtube.com/@techbyruchi/playlists', color: '#FF0000' },
  { name: 'Kaggle', icon: '', href: 'https://www.kaggle.com/ruchi798', color: '#20BEFF', imgIcon: '/assets/img/Mentorship/kaggle.png' },
]

const FORM_URL = 'https://bit.ly/3YQCQkz'

export default function Contact() {
  return (
    <>
      <section id="contact" className="sec route">
        <div className="wrap">
          <div className="contact-split">
            <div className="contact-left">
              <h2 className="heading-lg">Let's get in touch</h2>
              <p className="body-md" style={{ marginTop: '1rem' }}>
                Open to collaborations, speaking invitations, and conversations about AI, data science, and product marketing.
              </p>
              <a className="contact-email-link" href="mailto:ruchisbhatia@gmail.com">
                ruchisbhatia@gmail.com
              </a>
              <div className="social-icons-row" style={{ marginTop: '2rem', justifyContent: 'flex-start' }}>
                {socials.map((s, i) => (
                  <a className="social-icon-btn" href={s.href} target="_blank" rel="noopener noreferrer" key={i}
                    style={{ color: s.color, borderColor: s.color }} aria-label={s.name}>
                    {s.imgIcon
                      ? <img src={s.imgIcon} alt={s.name} style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                      : <i className={s.icon}></i>
                    }
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-right">
              <a className="btn-shadow" href={FORM_URL} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                Contact me ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="wrap">
          <p className="footer-copy">© {new Date().getFullYear()} Ruchi Bhatia</p>
        </div>
      </footer>
    </>
  )
}
