import Navbar from "../../components/navbar"
import Faq from "./faq"
import Hero from "./hero"
import Intro from "./intro"
import Judge from "./judge"
import Partners from "./partners"
import Policy from "./policy"
import Prizes from "./prizes"
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
      <Prizes/>
      <Partners/>
      <Policy/>
    </div>
  )
}

export default Landing