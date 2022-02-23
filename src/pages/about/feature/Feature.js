import { Link } from 'react-router-dom';
import feature from '../../../media/feature.jpg';

const Feature = () => {
    return (
        <div className="container wrapper-top wrapper-bottom">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-5">
                    <div className="facility-content">
                        <h2>A new way to treat pacients in a revolutionary facility</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing eli.Lorem ipsum dolor sit amet, consec tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer.</p>
                        <Link to={'/services'} className='mt-5 medilife-btn'>
                            View the service
                            <span>
                                <i className="fa-regular fa-plus ps-2 pt-2"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-5">
                    <img src={feature} alt="" className="w-100" />
                </div>
            </div>
        </div>
    )
}

export default Feature;