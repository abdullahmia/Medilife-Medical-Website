import { Link } from 'react-router-dom';
import './blog.css';
import blogImg from '../../media/blog/blog-1.jpg';

const Blog = () => {
    return (
        <div className="w-100 blog">
            <div style={{backgroundImage: `url(${blogImg})`}} className="blog-image">
                <div className="blog-time">
                    Jan 23, 2022
                </div>
            </div>
            <div className="p-3 blog-content">
                <h2>New drog release soon</h2>
                <p>Dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                <Link to='/' className='blog-link'>View More</Link>
            </div>
        </div>
    )
}

export default Blog;