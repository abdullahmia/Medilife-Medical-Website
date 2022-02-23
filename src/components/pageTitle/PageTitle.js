import './pagetitle.css';


const PageTitle = ({title, descrition, bg}) => {
    return (
        <div style={{backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(189,189,200,0.5102415966386555) 0%, rgba(195,200,201,0.5074404761904762) 100%),url(${bg})`}} className="text-center page-title">
            <div className="container text-start page-title-content">
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer</p>
            </div>
        </div>
    )
}

export default PageTitle;