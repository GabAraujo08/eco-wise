'use client';

import './style.css';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
export default function Home() {
    interface Tarefa {
        nome: string;
        descricao: string;
        pontos: number;
    }

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Função para buscar as tarefas no endpoint
        const fetchTarefas = async () => {
            try {
                const response = await fetch('/api/tarefa/all');
                if (!response.ok) {
                    throw new Error('Erro ao buscar tarefas');
                }
                const data = await response.json();
                setTarefas(data);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Erro:', error.message);
                } else {
                    console.error('Erro desconhecido:', error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTarefas();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center mb-4">Listagem de Tarefas</h1>
                {loading ? (
                    <p className="text-center">Carregando tarefas...</p>
                ) : (
                    <div className="row g-3">
                        {tarefas.length === 0 ? (
                            <p className="text-center">Nenhuma tarefa encontrada.</p>
                        ) : (
                            tarefas.map((tarefa) => (
                                <div className="col-md-4" key={tarefa.nome}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{tarefa.nome}</h5>
                                            <p className="card-text">{tarefa.descricao}</p>
                                            <p className="card-text">
                                                <strong>Pontos:</strong> {tarefa.pontos}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
