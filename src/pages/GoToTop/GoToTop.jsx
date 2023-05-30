import React , {useEffect , useState} from 'react'
import './GoToTop.css';
import { FaArrowUp} from "react-icons/fa";


const GoToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const goTOBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        let heightToHidden = 100;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll); 
    }, []);
    return (
        <div className='wrapper'>
            { isVisible && (
            <div className='top-btn' onClick={goTOBtn}>
                <FaArrowUp className='top-btn--icon' />
            </div>
            )}
        </div>

    )
};

export default GoToTop;
