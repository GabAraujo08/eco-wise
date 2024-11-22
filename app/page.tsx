import styles from "./page.module.css";

import Navbar from '../app/components/Navbar';
import Banner from '../app/components/Banner';
import Footer from '../app/components/Footer';
import EcoWise from "./components/Banner1";
import Funcionalidades from "./components/Funcionalidades";


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Banner/>
      <EcoWise />
      <Funcionalidades />
      <Footer />
    </main>
  );
}