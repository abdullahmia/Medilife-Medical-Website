import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress.css';

const Progresses = () => {
    return (
        <div className="container wrapper-top wrapper-bottom">
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 mb-lg-0 mb-5">
                    <div className="text-center progresses-card">
                        <CircularProgressbar value={90} text={`90%`} className='mb-4' />
                        <h5>Donations</h5>
                        <p>Dolor sit amet</p>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6 mb-lg-0 mb-5">
                    <div className="text-center progresses-card">
                        <CircularProgressbar value={65} text={`65%`} className='mb-4' />
                        <h5>Ambition</h5>
                        <p>Dolor sit amet</p>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6 mb-lg-0 mb-5">
                    <div className="text-center progresses-card">
                        <CircularProgressbar value={25} text={`25%`} className='mb-4' />
                        <h5>Good Luck</h5>
                        <p>Dolor sit amet</p>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6 mb-lg-0 mb-5">
                    <div className="text-center progresses-card">
                        <CircularProgressbar value={69} text={`69%`} className='mb-4' />
                        <h5>High Tech</h5>
                        <p>Dolor sit amet</p>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6 mb-lg-0 mb-5">
                    <div className="text-center progresses-card">
                        <CircularProgressbar value={83} text={`83%`} className='mb-4' />
                        <h5>Science</h5>
                        <p>Dolor sit amet</p>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6 mb-lg-0 mb-5">
                    <div className="text-center progresses-card">
                        <CircularProgressbar value={38} text={`38%`} className='mb-4' />
                        <h5>Creativity</h5>
                        <p>Dolor sit amet</p>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default Progresses;