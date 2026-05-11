import Hero from './components/Hero'
import About from './components/About'
import LogoMarquee from './components/LogoMarquee'
import StatsBar from './components/StatsBar'
import Approach from './components/Approach'
import ExperienceSection from './components/ExperienceSection'
import SpeakingGrid from './components/SpeakingGrid'
import Testimonials from './components/Testimonials'
import Voice from './components/Voice'
import SocialPosts from './components/SocialPosts'
import Newsletter from './components/Newsletter'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import {
  fullTimeRoles, internships, academicRoles,
  ambassadorRoles, researchRoles,
  collaborations, tradeShows, interviews,
  mentorship, positionsOfResponsibility
} from './data'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <LogoMarquee />
        <About />
        <StatsBar />
        <Approach />
        <ExperienceSection fulltime={fullTimeRoles} internships={internships} academic={academicRoles}
          research={researchRoles} ambassadors={ambassadorRoles} mentorship={mentorship} positions={positionsOfResponsibility} />
        <Testimonials />
        <SpeakingGrid id="collaborations" title="Speaking & Collaborations" items={collaborations} sectionClass="" />
        <Voice />
        <SocialPosts />
        <Newsletter />
        <Projects />
        <Gallery />
      </main>
    </>
  )
}
