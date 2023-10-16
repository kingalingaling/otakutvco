import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Expectations from "../components/OtakuConnect/Expectations"
import Hero from '../components/OtakuConnect/Hero'
import OtakuConnect2023 from "../components/OtakuConnect/OtakuConnect2023"
import Partners from "../components/OtakuConnect/Partners"
import Review from "../components/OtakuConnect/Review"
import Summary from "../components/OtakuConnect/Summary"
import { useNavigate } from "react-router-dom"

const OtakuConnect = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full'>
        <Navbar />
        <Hero navigate={navigate}/>
        <Summary />
        <Review />
        <OtakuConnect2023 navigate={navigate}/>
        <Expectations />
        <Partners />
        <Footer />
    </div>
  )
}

export default OtakuConnect