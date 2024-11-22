'use client'


import React, { useState } from 'react';
import Image from 'next/image';
import './style.css';
import logoImg from '../../../public/assets/img/LOGO.png';

const Funcionalidades = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container">
            {/* Footer */}
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <Image src={logoImg} alt="Logo" width={80} />
                    </a>
                    <p className="text-body-secondary">&copy; 2024</p>
                </div>

                <div className="col mb-3"></div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Parceiros</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Preços</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sobre nós</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <button
                                className="nav-link p-0 text-body-secondary btn btn-link"
                                onClick={handleShow}
                            >
                                Política de Privacidade
                            </button>
                        </li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Feedbacks</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Nossa loja</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Perguntas frequentes</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>
            </footer>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Política de Privacidade</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleClose}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                               
                                <p >
                                    A EcoWise valoriza sua privacidade e se compromete a proteger os dados pessoais coletados por meio de nossa plataforma gamificada de conscientização sobre consumo sustentável de energia. Esta política explica como coletamos, usamos, armazenamos e protegemos suas informações.
                                    <br></br>

                                    1. Coleta de Dados
                                    <br></br>
                                    Coletamos os seguintes tipos de informações:
                                    <br></br>
                                    1.1. Dados Pessoais: Nome, e-mail, cargo, departamento e outros dados necessários para identificar e integrar os colaboradores à plataforma.
                                    <br></br>
                                    1.2. Dados de Uso: Informações sobre interações na plataforma, como progresso em cursos, resultados de quizzes e participação em tarefas.
                                    <br></br>
                                    1.3. Dados Técnicos: Endereço IP, tipo de dispositivo, navegador e outras informações relacionadas ao acesso.
                                    <br></br>
                                    2. Uso das Informações
                                    <br></br>
                                    Utilizamos as informações coletadas para:
                                    <br></br>
                                    2.1. Personalizar a experiência do usuário.
                                    <br></br>
                                    2.2. Gerar rankings e relatórios de desempenho.
                                    <br></br>
                                    2.3. Oferecer suporte técnico e melhorar a plataforma.
                                    <br></br>
                                    2.4. Cumprir obrigações legais ou contratuais.
                                    <br></br>
                                    3. Compartilhamento de Dados
                                    <br></br>
                                    Compartilhamos dados apenas nos seguintes casos:
                                    <br></br>
                                    3.1. Com a Empresa Contratante: Relatórios consolidados sobre o desempenho dos colaboradores, sem expor dados sensíveis ou pessoais fora do escopo necessário.
                                    <br></br>
                                    3.2. Com Terceiros: Fornecedores de tecnologia, apenas para suporte técnico ou melhorias, sempre em conformidade com esta política.
                                    <br></br>
                                    4. Armazenamento e Segurança
                                    <br></br>
                                    4.1. Armazenamos os dados em servidores seguros e adotamos medidas técnicas e organizacionais para proteger suas informações contra acessos não autorizados, alterações ou perdas.
                                    <br></br>
                                    4.2. Os dados serão armazenados pelo período necessário para os fins descritos nesta política ou conforme exigido por lei.
                                    <br></br>
                                    5. Direitos dos Usuários
                                    <br></br>
                                    Você tem os seguintes direitos:
                                    <br></br>
                                    5.1. Acessar, corrigir ou atualizar seus dados pessoais.
                                    <br></br>
                                    5.2. Solicitar a exclusão de seus dados, salvo obrigações legais que exijam sua retenção.
                                    <br></br>
                                    5.3. Retirar o consentimento para o uso de seus dados a qualquer momento.
                                    <br></br>
                                    6. Cookies e Tecnologias Semelhantes
                                    <br></br>
                                    Utilizamos cookies para melhorar a experiência do usuário e analisar o desempenho da plataforma. Você pode configurar seu navegador para desativar cookies, mas isso pode limitar algumas funcionalidades da plataforma.
                                    <br></br>
                                    7. Alterações na Política de Privacidade
                                    <br></br>
                                    Reservamo-nos o direito de atualizar esta política de privacidade periodicamente. Notificaremos os usuários sobre mudanças relevantes antes de sua implementação.
                                    <br></br>
                                    8. Contato
                                    <br></br>
                                    Se você tiver dúvidas, reclamações ou solicitações relacionadas a esta política, entre em contato conosco por meio do e-mail: [email protegido].
                                    
                                    Esta política de privacidade reflete o compromisso da EcoWise com a proteção dos seus dados e a transparência em relação às práticas de uso de informações.
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleClose}
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Funcionalidades;
