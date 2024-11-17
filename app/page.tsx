import styles from "./page.module.css";
import Image from 'next/image';
import Logo from '../public/assets/img/LOGO.png';
import Navbar from '../app/components/Navbar';
import Banner from '../app/components/Banner';
import Login from "./components/Login";
import EcoWise from "./components/Banner1";
import Banner2 from "./components/Banner2";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Login />
      <Banner/>
      <EcoWise />
      <Banner2  />
    </main>
  );
}