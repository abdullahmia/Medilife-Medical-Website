import Service from "../../../components/service/Service";

const ServicesItems = () => {
    return (
        <div className="container wrapper-top wrapper-bottom">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5 service-item">
                    <Service icon={`fa-regular fa-user-doctor`} name='The Best Doctors' />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <Service icon={'fa-solid fa-hand-holding-dollar'} name="Baby Nursery" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <Service icon={'fa-solid fa-book-open-reader'} name='Laboratory' />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <Service icon={'fa-solid fa-hospital'} name={'Emergency Room'} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <Service icon={'fa-solid fa-hospital'} name={'Helicopters'} />
                </div>
            
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <Service icon={'fa-solid fa-hospital'} name={'Cardiology'} />
                </div>
            </div>
        </div>
    )
}

export default ServicesItems;