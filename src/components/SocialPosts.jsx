const linkedinPosts = [
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7401831142288596992?collapsed=1', height: 670 },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:6943431809028235264?collapsed=1', height: 670 },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7201454988571639808?collapsed=1', height: 670 },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7348936255583281152?collapsed=1', height: 670 },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:6808262422697168896?collapsed=1', height: 477 },
]

export default function SocialPosts() {
  const doubled = [...linkedinPosts, ...linkedinPosts]
  return (
    <section className="sec route" id="social">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="heading-lg">On Social</h2>
          <p className="body-md" style={{ maxWidth: 550, margin: '0 auto' }}>
            I share insights on AI careers, data science tips, and behind-the-scenes from conferences and product launches.
          </p>
        </div>
      </div>
      <div className="social-marquee-wrapper">
        <div className="social-marquee">
          {doubled.map((post, i) => (
            <div className="social-marquee-card" key={i}>
              <iframe
                src={post.src}
                height={post.height}
                width="504"
                frameBorder="0"
                allowFullScreen
                title={`LinkedIn post ${(i % linkedinPosts.length) + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
