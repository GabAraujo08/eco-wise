import Image from 'next/image';
import Logo from '../../../public/assets/img/LOGO.png'; // Certifique-se de que o caminho está correto
import '../Navbar/style.css'
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/">
          <Image  src={Logo} alt="Banner" width={180} height={90} />
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Funcionalidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contratar</a>
            </li>
            <li className="nav-item">
              
                <a className="nav-link" href='/pages/quem-somos'>Quem somos</a>
             
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;