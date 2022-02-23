import PageTitle from "../../components/pageTitle/PageTitle";
import Wrapper from "../../components/wrapper/Wrapper";
import serviceBg from '../../media/bg/services.jpg';
import ServicesItems from "./servicesItems/ServicesItems";

const Services = () => {
    return (
        <Wrapper title="Services">
            <PageTitle title='Services' bg={serviceBg} />
            <ServicesItems />
        </Wrapper>
    )
}
export default Services;