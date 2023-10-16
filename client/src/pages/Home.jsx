import Cards from '../components/Cards'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Navbar from '../components/Navbar'
import AnimeDownloads from '../components/AnimeDownloads';
import OtakuScoop from '../components/OtakuScoop';
import BlogPosts from '../components/BlogPosts';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Hero />
      <Cards />
      <Highlights />
      <OtakuScoop />
      <AnimeDownloads />
      <BlogPosts />
      <Feedback />
      <Footer />
    </div>
  )
}

export default Home