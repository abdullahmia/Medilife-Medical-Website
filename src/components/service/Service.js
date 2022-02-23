import './service.css';

const Service = ({icon, name, description}) => {
    return (
        <div className="d-flex gap-4 service">
            <div className='service-icon'>
                <i class={icon}></i>
            </div>
            <div className='service-content'>
                <h4>{name}</h4>
                <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
            </div>
        </div>
    )
}

export default Service;