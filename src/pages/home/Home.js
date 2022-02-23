import Banner from "./banner/Banner";
import Wrapper from "../../components/wrapper/Wrapper";
import DoctorSearch from "./doctorSearch/DoctorSearch";
import Services from "./services/Services";
import Features from "./features/Features";
import Facility from "./facility/Facility";
import Blogs from "./blogs/Blogs";
import Emergency from "./emergency/Emergency";

const Home = () => {
    return (
        <Wrapper title="Medilife | Health & Medical">
            <Banner />
            <DoctorSearch />
            <Services />
            <Features />
            <Facility />
            <Blogs />
            <Emergency />
        </Wrapper>
    )
}

export default Home;