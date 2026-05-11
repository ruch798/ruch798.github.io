import { useState, useMemo } from 'react'

const accents = ['#FFDAB3', '#A8D5BA', '#C4B5E0', '#87CEEB', '#F4C542', '#FFB3B3']

const TABS = [
  { key: 'ambassadors', label: '🌍 Ambassador' },
  { key: 'mentorship', label: '🤝 Mentorship' },
  { key: 'positions', label: '🏅 Positions' },
]

function groupByOrg(items) {
  const groups = []
  const seen = {}
  items.forEach(item => {
    const key = item.img
    if (!seen[key]) {
      seen[key] = { img: item.img, org: item.org, link: item.link, items: [] }
      groups.push(seen[key])
    }
    seen[key].items.push(item)
  })
  return groups
}

function GroupedCard({ group, accent }) {
  const [open, setOpen] = useState(false)
  const first = group.items[0]
  const hasMore = group.items.length > 1

  return (
    <div className="role-card" style={{ cursor: hasMore ? 'pointer' : 'default' }}
      onClick={() => hasMore && setOpen(!open)}>
      <div className="role-card-accent" style={{ background: accent }} />
      <div className="role-card-logo"><img src={group.img} alt="" /></div>
      <div className="role-card-info">
        {first.org && <span className="role-card-org">{first.org}</span>}
        <h4 className="role-card-title">{first.title || first.org}</h4>
        {first.date && <span className="role-card-date">{first.date}</span>}
        {first.location && <span className="role-card-date">{first.location}</span>}
        {hasMore && (
          <span className="por-toggle">{open ? 'Show less ↑' : `+${group.items.length - 1} more ↓`}</span>
        )}
        {open && group.items.slice(1).map((item, i) => (
          <div className="grouped-role-sub" key={i}>
            <h4 className="role-card-title">{item.title || item.org}</h4>
            {item.date && <span className="role-card-date">{item.date}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function PorCard({ por, accent }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="role-card" style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
      <div className="role-card-accent" style={{ background: accent }} />
      <div className="role-card-logo"><img src={por.img} alt="" /></div>
      <div className="role-card-info">
        <span className="role-card-org">{por.org}</span>
        <h4 className="role-card-title">{por.roles[0]}</h4>
        <span className="role-card-date">{por.location}</span>
        {por.roles.length > 1 && (
          <span className="por-toggle">{open ? 'Hide ↑' : `+${por.roles.length - 1} more ↓`}</span>
        )}
        {open && por.roles.length > 1 && (
          <ul className="por-details">
            {por.roles.slice(1).map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Mentorship({ ambassadors, mentorship, positions }) {
  const [tab, setTab] = useState('ambassadors')
  const dataMap = { ambassadors, mentorship, positions }
  const items = dataMap[tab] || []
  const groups = useMemo(() => groupByOrg(items), [items])

  return (
    <section id="mentorship" className="sec sec-cream route">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="heading-lg">Community & Leadership</h2>
          <p className="body-md" style={{ maxWidth: 600, margin: '0 auto' }}>
            The data science community helped me grow from a curious student to a Kaggle Grandmaster. I try to pay that forward through ambassador programs, mentoring, and judging hackathons around the world.
          </p>
        </div>
        <div className="tl-tabs" style={{ justifyContent: 'center' }}>
          {TABS.map(t => (
            <button key={t.key} className={`tl-tab ${tab === t.key ? 'tl-tab-active' : ''}`}
              onClick={() => setTab(t.key)}>
              {t.label}
              <span className="tl-tab-count">{dataMap[t.key].length}</span>
            </button>
          ))}
        </div>
        <div className="role-grid">
          {tab === 'positions'
            ? items.map((p, i) => <PorCard por={p} accent={accents[i % accents.length]} key={i} />)
            : groups.map((g, i) => <GroupedCard group={g} accent={accents[i % accents.length]} key={`${tab}-${i}`} />)
          }
        </div>
      </div>
    </section>
  )
}
