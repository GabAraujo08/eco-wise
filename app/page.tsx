import styles from "./page.module.css";
import Image from 'next/image';
import Logo from '../public/assets/img/LOGO.png';
import Navbar from '../app/components/Navbar';
import Banner from '../app/components/Banner';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Banner/>
    </main>
  );
}