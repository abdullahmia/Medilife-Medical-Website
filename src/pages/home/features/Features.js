import './features.css';

const Features = () => {
    return (
        <div className="wrapper-top wrapper-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="text-center feature">
                            <i className="fa-solid fa-fire-flame-simple mb-4"></i>
                            <h2 className='mb-3'>5632</h2>
                            <h6 className='mb-3'>Blood donations</h6>
                            <p>Dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="text-center feature">
                            <i className="fa-brands fa-react mb-4"></i>
                            <h2 className='mb-3'>23k</h2>
                            <h6 className='mb-3'>Pacients</h6>
                            <p>Dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="text-center feature">
                            <i className="fa-solid fa-microscope mb-4"></i>
                            <h2 className='mb-3'>25</h2>
                            <h6 className='mb-3'>Specialities</h6>
                            <p>Dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                        <div className="text-center feature">
                            <i className="fa-solid fa-user-doctor mb-4"></i>
                            <h2 className='mb-3'>723</h2>
                            <h6 className='mb-3'>Doctors</h6>
                            <p>Dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;