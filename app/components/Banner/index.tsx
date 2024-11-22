import Image from 'next/image';
import ImgBanner from '../../../public/assets/img/banner-unsplash.jpg';
import Login from "../Login";
import './style.css'

const Banner = () => {
    return (
        <div className="banner">
            <Image src={ImgBanner} className='imgBanner' alt="Banner" />
            <Login />
        </div>
    );
};

export default Banner;