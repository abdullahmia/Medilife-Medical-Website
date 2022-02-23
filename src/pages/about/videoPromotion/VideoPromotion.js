import './videopromotion.css';
import videoBg from '../../../media/bg/video.jpg';

const VideoPromotion = () => {
    return (
        <div style={{backgroundImage: `linear-gradient(90deg, rgba(94,85,233,0.8463760504201681) 0%, rgba(55,55,189,0.7455357142857143) 100%, rgba(0,212,255,1) 100%),url(${videoBg})`}} className="wrapper-top wrapper-bottom video-promotion">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                        <iframe className="w-100" height="480" src="https://www.youtube.com/embed/linlz7-Pnvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-lg-0 mb-5">
                        <div className="video-promotion-content py-5">
                            <h2 className="text-uppercase">A day at Medilife -Video</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing eli. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPromotion;