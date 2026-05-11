const row1 = [
  '/assets/img/Work Experience/aws.png',
  '/assets/img/Work Experience/hp.png',
  '/assets/img/Certi/google.jpg',
  '/assets/img/Certi/nvidia.png',
  '/assets/img/Work Experience/cmu.png',
  '/assets/img/Collaborations/gtc.png',
  '/assets/img/Work Experience/openmined.png',
  '/assets/img/Collaborations/Oxford.jpg',
  '/assets/img/Work Experience/Sony.jpg',
  '/assets/img/Work Experience/colgate.jpg',
  '/assets/img/Collaborations/microsoft_oxford.png',
  '/assets/img/Trade Shows/gartner.png',
  '/assets/img/Mentorship/kaggle.png',
  '/assets/img/Work Experience/wandb.png',
]

const row2 = [
  '/assets/img/Trade Shows/AI Summit_London_2024.png',
  '/assets/img/Collaborations/northeastern.png',
  '/assets/img/Collaborations/siggraph.png',
  '/assets/img/Work Experience/hp_nvidia.png',
  '/assets/img/Collaborations/anaconda.png',
  '/assets/img/Work Experience/ELC.png',
  '/assets/img/Work Experience/US_Army.png',
  '/assets/img/Collaborations/Waterloo.png',
  '/assets/img/Trade Shows/supercomputing_2024.png',
  '/assets/img/Collaborations/KaggleDays.png',
  '/assets/img/Work Experience/pathcheck.png',
  '/assets/img/Collaborations/acm.png',
  '/assets/img/Trade Shows/NAB_2024.png',
  '/assets/img/Collaborations/odsc.png',
]

function MarqueeRow({ images, direction }) {
  // Duplicate for seamless loop
  const doubled = [...images, ...images]
  return (
    <div className="marquee-track-wrapper">
      <div className={`marquee-track ${direction}`}>
        {doubled.map((src, i) => (
          <div className="marquee-item" key={i}>
            <img src={src} alt="" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <section className="marquee-section">
      <div className="wrap" style={{ marginBottom: '1.5rem' }}>
        <p className="label" style={{ textAlign: 'center' }}>Worked with & spoken at</p>
      </div>
      <MarqueeRow images={row1} direction="scroll-left" />
      <MarqueeRow images={row2} direction="scroll-right" />
    </section>
  )
}
