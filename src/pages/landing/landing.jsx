import Navbar from "../../components/navbar"
import Faq from "./faq"
import Hero from "./hero"
import Intro from "./intro"
import Judge from "./judge"
import Rules from "./rules"
import Timeline from "./timeline"

function Landing() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Rules/>
      <Judge/>
      <Faq/>
      <Timeline/>
    </div>
  )
}

export default Landing