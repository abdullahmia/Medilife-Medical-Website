import PageTitle from '../../components/pageTitle/PageTitle';
import Wrapper from '../../components/wrapper/Wrapper';
import aboutbg from '../../media/bg/aboutbg.jpg';
import Feature from './feature/Feature';
import FeatureTabs from './featureTabs/FeatureTabs';
import Progresses from './progresses/Progresses';
import VideoPromotion from './videoPromotion/VideoPromotion';

const About = () => {
    return (
        <Wrapper title={`Medilife | About Us`}>
            <div>
                <PageTitle title={'About Us'} bg={aboutbg} />
                <Feature />
                <VideoPromotion />
                <Progresses />
                <FeatureTabs />
            </div>
        </Wrapper>
    )
}

export default About;