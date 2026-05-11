import { useState } from 'react'

const principles = [
  {
    icon: 'monitoring',
    title: 'Let the data lead.',
    desc: 'Every product story starts with evidence, not assumptions.',
    bg: '#FFE8E8',
    iconColor: '#FE7A78',
  },
  {
    icon: 'hub',
    title: "Translate, don't simplify.",
    desc: 'I make complex AI understandable without dumbing it down.',
    bg: '#E8F5EC',
    iconColor: '#83A38D',
  },
  {
    icon: 'rocket_launch',
    title: 'Ship and learn fast.',
    desc: 'Put work out there, measure, iterate.',
    bg: '#EDE8F5',
    iconColor: '#9B90B0',
  },
  {
    icon: 'diversity_3',
    title: 'Lift as you climb.',
    desc: 'Give back to the community that helped you grow.',
    bg: '#E8F0FE',
    iconColor: '#5B8DEF',
  },
]

export default function Approach() {
  const [open, setOpen] = useState({})

  const toggle = (i) => setOpen(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <section className="sec sec-cream route">
      <div className="wrap">
        <div className="approach-layout">
          <div className="approach-text">
            <h2 className="heading-lg">How I work</h2>
            <p className="body-lg">
              Whether I'm launching a product or crafting a Kaggle notebook at 2am, these are the principles I come back to.
            </p>
          </div>
          <div className="approach-grid">
            {principles.map((p, i) => (
              <div
                className={`approach-card ${open[i] ? 'approach-card-active' : ''}`}
                key={i}
                style={{ background: p.bg, cursor: 'pointer' }}
                onClick={() => toggle(i)}
              >
                <span className="material-symbols-rounded approach-icon" style={{ color: p.iconColor }}>
                  {p.icon}
                </span>
                <h4>{p.title}</h4>
                {open[i] && (
                  <p className="approach-card-desc">{p.desc}</p>
                )}
                <span className="approach-card-toggle">
                  {open[i] ? '−' : '+'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
