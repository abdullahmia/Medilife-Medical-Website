import './tabcontent.css';

const TabContent = ({title, img}) => {
    return (
        <div className="p-5 tab">
            <div className="row py-5">
                <div className="col-lg-7 col-md-12 col-sm-12 mb-lg-0 mb-4">
                    <div className="tab-content">
                        <h2>{title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing eli. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing eli sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing eli.</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mb-lg-0 mb-4">
                    <img src={img} alt="" className="w-100" />
                </div>
            </div>
        </div>
    )
}

export default TabContent;