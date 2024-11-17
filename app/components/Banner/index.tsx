import Image from 'next/image';
import ImgBanner from '../../../public/assets/img/banner-unsplash.jpg'; 
import './style.css'

const Banner = () => {
    return (
        <div className="banner">
            <Image src={ImgBanner} className='imgBanner' alt="Banner" />
        </div>
    );
};

export default Banner;