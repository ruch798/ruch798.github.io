import { useState, useMemo } from 'react'

function groupByCat(items) {
  const map = {}
  items.forEach(item => {
    const cat = item.cat || 'Other'
    if (!map[cat]) map[cat] = []
    map[cat].push(item)
  })
  return Object.entries(map)
}

function groupByOrg(items) {
  const map = {}
  items.forEach(item => {
    const key = item.img
    if (!map[key]) map[key] = { img: item.img, title: item.title, role: item.role, events: [] }
    map[key].events.push({ title: item.title, date: item.date, link: item.link, role: item.role })
  })
  return Object.values(map)
}

const catEmoji = {
  'Big Tech & Industry': '🏢',
  'Conferences': '🎤',
  'Universities': '🎓',
  'Judging': '⚖️',
  'Trade Shows & Demos': '🎪',
}

export default function SpeakingGrid({ id, title, items, sectionClass = '' }) {
  const groups = useMemo(() => groupByCat(items), [items])
  const [activeGroup, setActiveGroup] = useState(groups[0]?.[0] || '')
  const activeItems = groups.find(([cat]) => cat === activeGroup)?.[1] || []
  const orgs = useMemo(() => groupByOrg(activeItems), [activeItems])

  return (
    <section id={id} className={`sec ${sectionClass} route`}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="heading-lg">{title}</h2>
          <p className="body-md" style={{ maxWidth: 600, margin: '0 auto' }}>
            I've spoken at Google Cloud Next, NVIDIA GTC, Gartner, SIGGRAPH, Oxford, Waterloo, and more, sharing insights on data science, AI product marketing, and career growth.
          </p>
        </div>
        <div className="tl-tabs" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          {groups.map(([cat, list]) => (
            <button key={cat} className={`tl-tab ${activeGroup === cat ? 'tl-tab-active' : ''}`}
              onClick={() => setActiveGroup(cat)}>
              {catEmoji[cat] || '📌'} {cat}
              <span className="tl-tab-count">{list.length}</span>
            </button>
          ))}
        </div>
        <div className="speaking-card-grid">
          {orgs.map((org, i) => (
            <SpeakingOrg org={org} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpeakingOrg({ org }) {
  const [open, setOpen] = useState(false)
  const single = org.events.length === 1

  return (
    <div className="speaking-card-item" onClick={() => !single && setOpen(!open)}
      style={{ cursor: single ? 'default' : 'pointer' }}>
      <div className="speaking-card-logo">
        <img src={org.img} alt="" loading="lazy" />
      </div>
      <span className="speaking-card-role">{org.events[0].role}</span>
      <h4 className="speaking-card-title">{org.events[0].title}</h4>
      <span className="speaking-card-date">{org.events[0].date}</span>
      {!single && (
        <span className="speaking-card-more">
          {open ? '− less' : `+${org.events.length - 1} more`}
        </span>
      )}
      {single && org.events[0].link && (
        <a href={org.events[0].link} target="_blank" rel="noopener noreferrer"
          className="speaking-card-link" onClick={e => e.stopPropagation()}>View ↗</a>
      )}
      {open && !single && (
        <div className="speaking-card-expand">
          {org.events.slice(1).map((ev, j) => (
            <div className="speaking-card-sub" key={j}>
              <span>{ev.role} · {ev.title}</span>
              <span className="speaking-card-sub-date">{ev.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
