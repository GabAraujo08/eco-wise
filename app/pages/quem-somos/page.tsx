import Navbar from '../../components/Navbar';
import './style.css';
import Image from 'next/image';
import github from '../../../public/assets/img/github.png';
import linkedin from '../../../public/assets/img/linkedin.png';
import thiago from '../../../public/assets/img/thiago.jpeg';
import gabriel from '../../../public/assets/img/gabriel.jpeg';
import gabrielly from '../../../public/assets/img/gabrielly.jpeg';
export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className="card" style={{ width: '18rem' }}>
                    <Image src={gabriel} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Gabriel Araujo</h5>
                        <p className="card-text">Desenvolvedor Fullstack</p>
                        <div className="redes-sociais">
                            <a href="#"  >
                                <Image src={github} alt="Banner" width={40} height={40} />
                            </a>
                            <a href="#" >
                                <Image src={linkedin} alt="Banner" width={40} height={40} />
                            </a>
                        </div>


                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <Image src={gabrielly} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Gabrielly Macedo</h5>
                        <p className="card-text">DBA e Desenvolvedora back-end</p>
                        <div className="redes-sociais">
                            <a href="#"  >
                                <Image src={github} alt="Banner" width={40} height={40} />
                            </a>
                            <a href="#" >
                                <Image src={linkedin} alt="Banner" width={40} height={40} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <Image src={thiago} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Thiago Henry</h5>
                        <p className="card-text">Desenvolvedor Fullstack.</p>
                        <div className="redes-sociais">
                            <a href="#">
                                <Image src={github} alt="Banner" width={40} height={40} />
                            </a>
                            <a href="#">
                                <Image src={linkedin} alt="Banner" width={40} height={40} />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}