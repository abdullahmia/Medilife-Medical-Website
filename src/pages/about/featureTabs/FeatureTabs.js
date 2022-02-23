import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabContent from '../tab/TabContent';
import facilityImg from '../../../media/facility.png';
import featureImg from '../../../media/feature.jpg';
import g1 from '../../../media/g1.jpg';
import g3 from '../../../media/g3.jpg';
import g4 from '../../../media/g4.jpg';

const FeatureTabs = () => {
    return (
        <div className="container wrapper-top wrapper-bottom">
            <Tabs>
                <TabList>
                    <Tab>Institution</Tab>
                    <Tab>FAQS</Tab>
                    <Tab>Specialities</Tab>
                    <Tab>Labortory</Tab>
                    <Tab>Emergencies</Tab>
                    <Tab>Scholarship Programs</Tab>
                </TabList>

                <TabPanel>
                    <TabContent title='Take a look at this' img={facilityImg} />
                </TabPanel>

                <TabPanel>
                    <TabContent title='Take a look at this' img={featureImg} />
                </TabPanel>

                <TabPanel>
                    <TabContent title='Take a look at this' img={g1} />
                </TabPanel>

                <TabPanel>
                    <TabContent title='Take a look at this' img={g3} />
                </TabPanel>
                <TabPanel>
                    <TabContent title='Take a look at this' img={g4} />
                </TabPanel>

                <TabPanel>
                    <TabContent title='Take a look at this' img={featureImg} />
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default FeatureTabs;