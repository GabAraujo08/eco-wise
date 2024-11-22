import React from 'react';
import Image from 'next/image';
import './style.css';
import listaTarefasImg from '../../../public/assets/img/lista-tarefas.jpg';
import quizzesImg from '../../../public/assets/img/quiz-img.jpg';
import cursosImg from '../../../public/assets/img/cursos-img.jpg';
const Funcionalidades = () => {
    return (
        <div className="funcionalidades">
            {/* Card 1: Tarefas Diárias */}
            <div className="card" style={{ width: '18rem' }}>
                <Image
                    src={listaTarefasImg}
                    alt="Lista de Tarefas"
                    layout="responsive"
                />
                <div className="card-body">
                    <h5 className="card-title">Tarefas Diárias</h5>
                    <p className="card-text">
                        Descubra desafios diários para reduzir o consumo de energia em sua rotina.
                        Cada ação contribui para um futuro mais sustentável e você ainda pode
                        acumular pontos!
                    </p>
                    <a href="/pages/tarefa/listagem" className="btn btn-success">Descubra nossas tarefas</a>
                </div>
            </div>

            {/* Card 2: Mini Cursos */}
            <div className="card" style={{ width: '18rem' }}>
            <Image
                    src={cursosImg}
                    alt="Lista de Tarefas"
                    layout="responsive"
                />
                <div className="card-body">
                    <h5 className="card-title">Mini Cursos</h5>
                    <p className="card-text">
                        Aprenda práticas e conceitos para economizar energia e promover
                        a sustentabilidade. Cursos rápidos e práticos para todos os níveis!
                    </p>
                    <a href="#" className="btn btn-info">Inscreva-se agora</a>
                </div>
            </div>

            {/* Card 3: Quizzes */}
            <div className="card" style={{ width: '18rem' }}>
            <Image
                    src={quizzesImg}
                    alt="Lista de Tarefas"
                    layout="responsive"
                />
                <div className="card-body">
                    <h5 className="card-title">Quizzes Interativos</h5>
                    <p className="card-text">
                        Teste seus conhecimentos sobre economia de energia e práticas sustentáveis.
                        Desafie seus amigos e veja quem é o mestre da sustentabilidade!
                    </p>
                    <a href="#" className="btn btn-warning">Faça o quiz</a>
                </div>
            </div>
        </div>



    );
};

export default Funcionalidades;
