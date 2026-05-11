import { useState } from 'react'

function getYouTubeId(url) {
  const match = url.match(/embed\/([^?]+)/)
  return match ? match[1] : ''
}

export default function LazyVideo({ src, title }) {
  const [loaded, setLoaded] = useState(false)
  const videoId = getYouTubeId(src)
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  if (loaded) {
    return (
      <iframe
        src={`${src}&autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, border: 'none' }}
      />
    )
  }

  return (
    <button
      className="lazy-video-thumb"
      onClick={() => setLoaded(true)}
      aria-label={`Play ${title}`}
    >
      <img src={thumb} alt={title} loading="lazy" decoding="async" />
      <span className="lazy-video-play">▶</span>
    </button>
  )
}
