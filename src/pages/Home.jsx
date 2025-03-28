import Banner from '../components/Banner.jsx'
import bannerHome from '../assets/images/bannerHome.webp'

function Home() {
    return (
        <div>
            <Banner backgroundImage={bannerHome} />
        </div>
    );
}
  
export default Home;