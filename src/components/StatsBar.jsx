const stats = [
  { number: 'Youngest', label: 'Triple Kaggle Grandmaster', color: '#FFDAB3' },
  { number: '#3', label: 'out of 31M+ on Kaggle Datasets', color: '#A8D5BA' },
  { number: '50+', label: 'Talks & Keynotes', color: '#C4B5E0' },
  { number: '300K+', label: 'Followers Across Socials', color: '#87CEEB' },
]

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i} style={{ borderTopColor: s.color }}>
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
