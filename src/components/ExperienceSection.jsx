import { useState, useMemo } from 'react'

const COLORS = ['#FFDAB3', '#A8D5BA', '#C4B5E0', '#87CEEB', '#F4C542', '#FFB3B3']

const TABS = [
  { key: 'fulltime', label: 'Full-Time' },
  { key: 'internships', label: 'Internships' },
  { key: 'academicResearch', label: 'Academic & Research' },
  { key: 'ambassadors', label: 'Ambassador' },
  { key: 'mentorship', label: 'Mentorship' },
  { key: 'positions', label: 'Positions' },
]
const DESCS = {
  fulltime: 'From Colgate-Palmolive to Amazon. The core roles that shaped my career.',
  internships: 'Where it all started. Early career experiences across engineering and data.',
  academicResearch: 'Teaching, consulting, research, and student leadership at CMU and beyond.',
  ambassadors: 'Brand ambassador programs across HP, NVIDIA, and Weights & Biases.',
  mentorship: 'Mentoring aspiring data scientists at KaggleX, CMU, SWE, and hackathons worldwide.',
  positions: 'Student leadership and positions of responsibility.',
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

function groupByOrg(roles) {
  const groups = []
  const seen = {}
  roles.forEach(role => {
    const key = role.img
    if (!seen[key]) {
      seen[key] = { img: role.img, org: role.org, link: role.link, roles: [] }
      groups.push(seen[key])
    }
    seen[key].roles.push(role)
  })
  return groups
}

function GroupedRoleCard({ group, accent }) {
  const [open, setOpen] = useState(false)
  const first = group.roles[0]
  const hasMore = group.roles.length > 1
  const isPresent = first.date.includes('Present')

  return (
    <div className="role-card" style={{ cursor: hasMore ? 'pointer' : 'default' }}
      onClick={() => hasMore && setOpen(!open)}>
      <div className="role-card-accent" style={{ background: accent }} />
      <div className="role-card-logo"><img src={group.img} alt={group.org} /></div>
      <div className="role-card-info">
        <span className="role-card-org">{first.org}</span>
        <h4 className="role-card-title">{first.title}</h4>
        {first.subtitle && <p className="role-card-subtitle">{first.subtitle}</p>}
        <span className="role-card-date">{first.date}{isPresent && <span className="present-dot" />}</span>
        {hasMore && (
          <span className="por-toggle">{open ? 'Show less ↑' : `+${group.roles.length - 1} more ↓`}</span>
        )}
        {open && group.roles.slice(1).map((r, i) => (
          <div className="grouped-role-sub" key={i}>
            <h4 className="role-card-title">{r.title}</h4>
            {r.subtitle && <p className="role-card-subtitle">{r.subtitle}</p>}
            <span className="role-card-date">{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection({ fulltime, internships, academic, research, ambassadors, mentorship, positions }) {
  const [tab, setTab] = useState('fulltime')
  const academicResearch = useMemo(() => [...(research || []), ...(academic || [])], [research, academic])
  const dataMap = { fulltime, internships, academicResearch, ambassadors: ambassadors || [], mentorship: mentorship || [], positions: positions || [] }
  const groups = useMemo(() => {
    if (tab === 'positions') return null
    return groupByOrg(dataMap[tab] || [])
  }, [tab, dataMap[tab]])

  return (
    <section id="work" className="sec route">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="heading-lg">Experience</h2>
          <p className="body-md">{DESCS[tab]}</p>
        </div>
        <div className="tl-tabs" style={{ justifyContent: 'center' }}>
          {TABS.map((t) => (
            <button key={t.key} className={`tl-tab ${tab === t.key ? 'tl-tab-active' : ''}`} onClick={() => setTab(t.key)}>
              {t.label}
              <span className="tl-tab-count">{dataMap[t.key].length}</span>
            </button>
          ))}
        </div>
        <div className="role-grid">
          {tab === 'positions'
            ? (dataMap.positions || []).map((p, i) => <PorCard por={p} accent={COLORS[i % COLORS.length]} key={`pos-${i}`} />)
            : groups.map((g, i) => (
              <GroupedRoleCard group={g} accent={COLORS[i % COLORS.length]} key={`${tab}-${i}`} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
