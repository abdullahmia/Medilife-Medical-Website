import { useEffect } from 'react';
import Header from '../header/Header';

const Wrapper = ({title, children}) => {
    useEffect(() => {
        document.title = title || 'Medilife';
    }, [title])
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Wrapper;