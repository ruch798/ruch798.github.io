const testimonials = [
  {
    quote: "Ruchi is a leading voice in the world of data science. During her time at OpenMined she drove our highest profile data science work with Twitter and the United Nations. I was particularly impressed at how much Ruchi is a self-starter, driving forward initiatives with very high technical skill and mission focus.",
    name: "Andrew Trask",
    role: "Executive Director, OpenMined",
    relation: "Managed Ruchi directly",
    initial: "A",
  },
  {
    quote: "She's one of the most fearless and collaborative product marketers I've worked with. Her work on new AI software feature demos directly contributed to more than 1,000 hackathon sign-ups and 600 in-person demos that resulted in 80% sign-up conversations in the first month.",
    name: "Rick Gosalvez",
    role: "Principal AI Product Manager",
    relation: "Senior to Ruchi at HP",
    initial: "R",
  },
  {
    quote: "Ruchi embodies the skills of a natural leader, developing consensus and alignment across a team while assessing implications for future planning and analysis. She combines that with interpersonal skills focused on building trust, mentorship and support.",
    name: "Ari Lightman",
    role: "Professor, Carnegie Mellon University",
    relation: "Ruchi's teacher",
    initial: "A",
  },
  {
    quote: "She has represented HP on global stages like NVIDIA GTC, the Gartner Data & Analytics Summit, and the AI Summit, delivering with confidence and credibility. She developed and delivered a high-profile demo to Jensen Huang, CEO of NVIDIA.",
    name: "Spike Huang",
    role: "VP, Product Management, HP",
    relation: "Senior to Ruchi at HP",
    initial: "S",
  },
  {
    quote: "As a Data Scientist, she was extremely skilled and consistently displayed an incredible amount of creativity, resourcefulness, and an ability to deliver results despite ambiguity and short timelines. Ruchi was an absolute joy to work with.",
    name: "Ishan Mishra",
    role: "Engineering Technical Lead, OpenMined",
    relation: "Same team at OpenMined",
    initial: "I",
  },
  {
    quote: "Ruchi has returned to CMU Heinz College on several occasions to share her experience, insights and tips to current students. Her passion and knowledge she shares with students hoping to enter the product space is motivating and supportive.",
    name: "Christine Sundry",
    role: "Associate Director, Heinz College, Carnegie Mellon University",
    relation: "Worked with Ruchi across companies",
    initial: "C",
  },
  {
    quote: "Ruchi has been a great guidance for our team as an expert in the AI and Data Science field, she has helped influence our content, presence and direction with her great insights. She always stays the top of her game and is aware of the latest and greatest news in the AI world.",
    name: "Chloé Pasquet",
    role: "GTM, AI Solutions, HP",
    relation: "Senior to Ruchi at HP",
    initial: "C",
  },
  {
    quote: "Ruchi was, without a doubt, one of the most exceptional colleagues I had the pleasure of working with at Carnegie Mellon. Her outstanding leadership as Project Manager for our Capstone expertly coordinated our team, guiding us to explore innovative solutions.",
    name: "Michael Affare",
    role: "Graduate Student, Carnegie Mellon University",
    relation: "Studied together at CMU",
    initial: "M",
  },
  {
    quote: "Ruchi is definitely one of the most reliable, positive and responsible partners I have ever worked with during our time at CMU. We almost collaborated on all projects and all the projects turned out to be A or A+.",
    name: "Caroline Zhu",
    role: "Graduate Student, Carnegie Mellon University",
    relation: "Studied together at CMU",
    initial: "C",
  },
]

const AVATAR_COLORS = ['#FFDAB3', '#A8D5BA', '#C4B5E0', '#87CEEB']

function TestimonialCard({ t, index }) {
  const bg = AVATAR_COLORS[index % AVATAR_COLORS.length]
  return (
    <div className="testi-card">
      <blockquote>"{t.quote}"</blockquote>
      <div className="testi-author">
        <div className="testi-avatar" style={{ background: bg }}>{t.initial}</div>
        <div>
          <h5>{t.name}</h5>
          <span>{t.role}</span>
          {t.relation && <span className="testi-relation">{t.relation}</span>}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]
  return (
    <section className="sec sec-cream route" id="testimonials">
      <div className="wrap">
        <h2 className="heading-lg">Testimonials</h2>
        <p className="body-md" style={{ maxWidth: 550 }}>I've been lucky to work with incredible people, from startup founders to CMU professors.</p>
        <p className="body-md" style={{ maxWidth: 550 }}>Here's what some of them have to say.</p>
      </div>
      <div className="testi-marquee-wrapper">
        <div className="testi-marquee">
          {doubled.map((t, i) => (
            <TestimonialCard t={t} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
