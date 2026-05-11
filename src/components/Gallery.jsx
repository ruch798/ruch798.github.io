import { galleryItems } from '../data'
import LazyVideo from './LazyVideo'

export default function Gallery() {
  return (
    <section id="gallery" className="sec sec-cream route">
      <div className="wrap">
        <div className="split-layout">
          <div className="split-text">
            <h2 className="heading-lg">Gallery 🎬</h2>
            <p className="body-md">Some of my favorite talks and appearances, from Google Cloud Next to the University of Waterloo. I love sharing what I've learned with audiences around the world.</p>
          </div>
          <div className="split-content">
            <div className="video-grid">
              {galleryItems.map((item, i) => (
                <div className="video-card" key={i}>
                  <div className="video-frame">
                    <LazyVideo src={item.src} title={item.title} />
                  </div>
                  <span className="video-title">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
