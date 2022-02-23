import logo from '../../media/logo.png';
import blogImg from '../../media/blog/blog-1.jpg';
import './footer.css';


const Footer = () => {
    return (
        <div className="py-5 footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="footer-left">
                            <img src={logo} alt="logo" />
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer.</p>

                            <div className='mt-5 d-flex gap-4 footer-social'>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="footer-letest-news">
                            <h3 className='footer-title'>Letest News</h3>
                            <div className="d-flex gap-4 footer-lestest-news-item">
                                <div className='news-img'>
                                    <img src={blogImg} alt="" />
                                </div>
                                <div className="footer-letest-news-content">
                                    <h2>Better Health Care</h2>
                                    <p>Dec 02, 2017</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4 footer-lestest-news-item">
                                <div className='news-img'>
                                    <img src={blogImg} alt="" />
                                </div>
                                <div className="footer-letest-news-content">
                                    <h2>A new drug is tested</h2>
                                    <p>Dec 02, 2017</p>
                                </div>
                            </div>

                            <div className="d-flex gap-4 footer-lestest-news-item">
                                <div className='news-img'>
                                    <img src={blogImg} alt="" />
                                </div>
                                <div className="footer-letest-news-content">
                                    <h2>Health department advice</h2>
                                    <p>Dec 02, 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <h2 className="footer-title">Contact form</h2>
                        <form>
                            <input type="text" className='search-input-noborder' placeholder='Name' />
                            <input type="email" className='mt-3 search-input-noborder' placeholder='Email' />
                            
                            <textarea className='mt-4 search-input-noborder' placeholder='Message' cols="30" rows="3"></textarea>
                            <button className='mt-3 medilife-btn' type="submit">
                                Send Message
                                <span>
                                    <i className="fa-regular fa-plus ps-2 pt-2"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <h3 className="footer-title">News Letter</h3>
                        <div>
                            <input type="text" className='search-input' placeholder='Your Email here' />
                            <button className='mt-3 w-100 medilife-btn' type="submit">
                                Send Message
                            </button>
                        </div>

                        <p className='mt-4 footer-newsletter-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;