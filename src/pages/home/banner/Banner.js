import { Link } from 'react-router-dom';
import './banner.css';
import heroBg from '../../../media/hero.jpg';

const Banner = () => {
    return (
        <section style={{background: `url(${heroBg})`}} className="banner">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="banner-content">
                            <h2>Medical Services that You can Trust 100%</h2>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod.
                            </h6>

                            <Link to='/' className='medilife-btn'>Discover Medilife <span><i className="fa-regular fa-plus ps-2"></i></span></Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;