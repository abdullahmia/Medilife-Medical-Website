import { Link } from 'react-router-dom';
import Service from '../../../components/service/Service';
import './services.css';

const Services = () => {
    return (
        <div className="container wrapper-bottom">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-4">
                    <div className="services-left-content">
                        <h2>We always put our pacients first</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
                        <Link to={'/services'} className='mt-5 medilife-btn'>
                            View the service
                            <span>
                                <i className="fa-regular fa-plus ps-2 pt-2"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 mb-lg-0 mb-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-5 service-item">
                            <Service icon={`fa-regular fa-user-doctor`} name='The Best Doctors' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                            <Service icon={'fa-solid fa-hand-holding-dollar'} name="Baby Nursery" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                            <Service icon={'fa-solid fa-book-open-reader'} name='Laboratory' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                            <Service icon={'fa-solid fa-hospital'} name={'Emergency Room'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;