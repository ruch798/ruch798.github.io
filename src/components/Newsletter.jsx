import { useState, useEffect } from 'react'

const FEED_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechbyruchi.substack.com%2Ffeed'

export default function Newsletter() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(FEED_URL)
      .then(res => res.json())
      .then(data => {
        const items = (data.items || []).slice(0, 3)
        const parsed = items.map(item => {
          const imgMatch = item.content?.match(/<img[^>]+src="([^"]+)"/)
          return {
            title: item.title,
            link: item.link,
            image: imgMatch ? imgMatch[1] : null,
            date: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          }
        })
        setPosts(parsed)
      })
      .catch(() => setError(true))
  }, [])

  if (error) return null

  return (
    <section className="sec sec-cream route" id="newsletter">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="heading-lg">Newsletter</h2>
          <p className="body-md" style={{ maxWidth: 550, margin: '0 auto' }}>
            I write about AI careers, data science, and lessons from building products. Subscribe on Substack.
          </p>
        </div>
        <div className="newsletter-grid">
          {posts.map((post, i) => (
            <a className="newsletter-card" href={post.link} target="_blank" rel="noopener noreferrer" key={i}>
              <div className="newsletter-card-img">
                {post.image && <img src={post.image} alt={post.title} loading="lazy" />}
              </div>
              <div className="newsletter-card-body">
                <h4>{post.title}</h4>
                <span>{post.date}</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a className="btn-outline" href="https://techbyruchi.substack.com" target="_blank" rel="noopener noreferrer">
            Subscribe on Substack ↗
          </a>
        </div>
      </div>
    </section>
  )
}
