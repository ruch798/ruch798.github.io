const articles = [
  { title: 'Kaggle Grandmasters Unveil Winning Strategies', source: 'NVIDIA Developer Blog', date: '2024', link: 'https://developer.nvidia.com/blog/kaggle-grandmasters-unveil-winning-strategies-for-data-science-superpowers/', img: '/assets/img/Certi/nvidia.png' },
  { title: 'Journey from Triple Kaggle Grandmaster to Lead Data Scientist', source: 'Analytics Vidhya', date: 'Mar 2024', link: 'https://www.analyticsvidhya.com/blog/2024/03/ruchi-bhatia/', img: '/assets/img/Interviews/analytics_vidhya.jpg' },
  { title: 'Triple Grandmaster Journey on Kaggle', source: 'Analytics Vidhya', date: 'Dec 2022', link: 'https://www.analyticsvidhya.com/blog/2022/12/interview-excerpts-with-kaggle-datasets-grandmaster-ruchi-bhatia-a-sneak-peek-into-her-triple-grandmaster-journey-on-kaggle/', img: '/assets/img/Interviews/analytics_vidhya.jpg' },
  { title: 'Measuring Social: CMU Feature', source: 'Carnegie Mellon University', date: 'Nov 2022', link: 'https://www.cmu.edu/news/stories/archives/2022/november/measuring-social.html', img: '/assets/img/Work Experience/cmu.png' },
  { title: 'Interview in The Kaggle Book', source: 'Packt Publishing', date: 'May 2022', link: 'https://www.amazon.com/Data-Analysis-Machine-Learning-Kaggle/dp/1801817472', img: '/assets/img/Interviews/KaggleBook.png' },
  { title: 'HP Z by HP Case Study', source: 'HP', date: 'Feb 2022', link: 'https://h20195.www2.hp.com/v2/getpdf.aspx/4AA8-0304ENW.pdf', img: '/assets/img/Work Experience/hp.png' },
  { title: '2x Kaggle Grandmaster Interview', source: 'Analytics India Magazine', date: 'Feb 2022', link: 'https://analyticsindiamag.com/ai-features/interview-with-2x-kaggle-grandmaster-ruchi-bhatia', img: '/assets/img/Interviews/aim.png' },
  { title: 'Exclusive Interview with Kaggle Datasets Grandmaster (#Rank 5)', source: 'Analytics Vidhya', date: 'Feb 2021', link: 'https://www.analyticsvidhya.com/blog/2021/02/kaggle-grandmaster-series-exclusive-interview-with-kaggle-datasets-grandmaster-ruchi-bhatiarank-5/', img: '/assets/img/Interviews/analytics_vidhya.jpg' },
  { title: 'Technical Reviewer: Generative AI with LangChain', source: 'Packt Publishing', date: '2024', link: 'https://www.amazon.com/Generative-AI-LangChain-language-ChatGPT/dp/1835083463', img: '/assets/img/Extras/langchain_book.svg' },
]

export default function Voice() {
  return (
    <section id="voice" className="sec sec-cream route">
      <div className="wrap">
        <div className="split-layout">
          <div className="split-text">
            <h2 className="heading-lg">Featured In</h2>
            <p className="body-md">From NVIDIA's developer blog to The Kaggle Book, my work and insights have been featured across publications, podcasts, and interviews.</p>
          </div>
          <div className="split-content">
            <div className="voice-list">
              {articles.map((a, i) => (
                <a className="voice-row" href={a.link} target="_blank" rel="noopener noreferrer" key={i}>
                  <div className="voice-row-logo"><img src={a.img} alt="" /></div>
                  <div className="voice-row-main">
                    <h4>{a.title}</h4>
                    <span>{a.source} · {a.date}</span>
                  </div>
                  <span className="voice-row-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
