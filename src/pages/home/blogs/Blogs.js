import Blog from "../../../components/blog/Blog";

const Blogs = () => {
    return (
        <div className="container wrapper-top wrapper-bottom">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-4">
                    <Blog />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-4">
                    <Blog />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-4">
                    <Blog />
                </div>
            </div>
        </div>
    )
}

export default Blogs;