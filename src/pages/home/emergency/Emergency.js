import './emergency.css';

const Emergency = () => {
    return (
        <div className='emergency wrapper-top wrapper-bottom'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-lg-0 mb-5">
                        <div className="emergency-content">
                            <i class="fa-solid fa-panel-ews"></i>
                            <h2>For Emergency calls</h2>
                            <h3>+12-823-611-8721</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-lg-0 mb-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                <div className="text-light emergency-helpline">
                                    <h5>London</h5>
                                    <p>0080 673 729 766 <br /> contact@business.com <br /> Lamas Str, no 14-18 <br /> 41770 Miami</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                <div className="text-light emergency-helpline">
                                    <h5>New Castle</h5>
                                    <p>0080 673 729 766 <br /> contact@business.com <br /> Lamas Str, no 14-18 <br /> 41770 Miami</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                <div className="text-light emergency-helpline">
                                    <h5>Manchester</h5>
                                    <p>0080 673 729 766 <br /> contact@business.com <br /> Lamas Str, no 14-18 <br /> 41770 Miami</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                <div className="text-light emergency-helpline">
                                    <h5>Bristol</h5>
                                    <p>0080 673 729 766 <br /> contact@business.com <br /> Lamas Str, no 14-18 <br /> 41770 Miami</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emergency;