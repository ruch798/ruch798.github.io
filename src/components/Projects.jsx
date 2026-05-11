export default function Projects() {
  return (
    <section id="projects" className="sec route">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="heading-lg">Projects & Publications</h2>
          <p className="body-md" style={{ maxWidth: 600, margin: '0 auto' }}>
            I contribute to the data science community through open-source work, research publications, and technical reviews. My Kaggle profile is where it all started, and my GitHub is where I keep building.
          </p>
        </div>

        <div className="profile-tiles">
          <a className="profile-tile" href="https://www.kaggle.com/ruchi798" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/kaggle profile.jpg" alt="Kaggle" className="profile-tile-img" loading="lazy" />
            <div className="profile-tile-info">
              <h4>Kaggle</h4>
              <span>@ruchi798</span>
              <p className="profile-tile-desc">Youngest Triple Grandmaster across Notebooks, Datasets, and Discussion categories. Ranked #3 globally in Datasets among 31M+ users with 12 gold medals and 17 silver medals across 51 datasets.</p>
              <div className="profile-tile-stats">
                <span><strong>#3</strong> Datasets</span>
                <span><strong>3x</strong> GM</span>
                <span><strong>12</strong> Golds</span>
              </div>
            </div>
          </a>
          <a className="profile-tile" href="https://github.com/ruch798" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/github.png" alt="GitHub" className="profile-tile-img" loading="lazy" />
            <div className="profile-tile-info">
              <h4>GitHub</h4>
              <span>@ruch798</span>
              <p className="profile-tile-desc">50+ repositories spanning data science, NLP, computer vision, and data visualization. Active contributor since 2018, with projects used in Kaggle competitions and university coursework.</p>
              <div className="profile-tile-stats">
                <span><strong>1.1K</strong> Followers</span>
                <span><strong>50+</strong> Repos</span>
              </div>
            </div>
          </a>
        </div>

        <div className="profile-tiles" style={{ marginTop: '1.25rem' }}>
          <a className="profile-tile" href="http://www.ijirset.com/upload/2020/june/115_4_Source.PDF" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/Extras/ijirset.jpg" alt="Research Paper" className="profile-tile-img" loading="lazy" />
            <div className="profile-tile-info">
              <h4>Research Paper</h4>
              <span>IJIRSET, June 2020</span>
              <p className="profile-tile-desc">Published during undergrad at K.J. Somaiya College of Engineering. Focused on applying machine learning techniques to real-world engineering problems.</p>
            </div>
          </a>
          <a className="profile-tile" href="https://www.christchurchcall.org/content/files/2024/11/Christchurch-Call-AI-Transparency-in-Practice-Report-October-2024-1.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/assets/img/Extras/christchurch.png" alt="Technical Report" className="profile-tile-img" loading="lazy" />
            <div className="profile-tile-info">
              <h4>Technical Report</h4>
              <span>Christchurch Call, October 2024</span>
              <p className="profile-tile-desc">AI Transparency in Practice report. Part of the Christchurch Call Initiative on Algorithmic Outcomes (CCIAO) with OpenMined, Microsoft, LinkedIn, and Dailymotion. Used privacy-enhancing technologies to enable independent auditing of social media recommendation algorithms.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
