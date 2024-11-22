'use client';
import './style.css';
import React, { useState } from 'react';

export default function FormCadastroTarefa() {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        pontos: '',
    });

    const [mensagem, setMensagem] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/eco_wise_war/api/tarefa/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode : 'no-cors',
                body: JSON.stringify({
                    nome: formData.nome,
                    descricao: formData.descricao,
                    pontos: parseInt(formData.pontos, 10),
                }),
            });

            if (response.ok) {
                setMensagem('Tarefa cadastrada com sucesso!');
                setFormData({ nome: '', descricao: '', pontos: '' }); // Limpa o formulário
            } else {
                const errorData = await response.json();
                setMensagem(`Erro ao cadastrar tarefa: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            setMensagem('Erro ao conectar-se ao servidor.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='formCadastroTarefa'>
            <h1>Cadastro de Tarefas</h1>
            <div className='formGroup'>
                <label htmlFor='nome'>Nome da Tarefa:</label>
                <input
                    type='text'
                    id='nome'
                    name='nome'
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder='Digite o nome da tarefa'
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor='descricao'>Descrição:</label>
                <textarea
                    id='descricao'
                    name='descricao'
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder='Digite uma descrição para a tarefa'
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor='pontos'>Pontos:</label>
                <input
                    type='number'
                    id='pontos'
                    name='pontos'
                    value={formData.pontos}
                    onChange={handleChange}
                    placeholder='Atribua uma pontuação para a tarefa'
                    required
                    min='0'
                />
            </div>
            <button type='submit' className='submitButton'>Cadastrar Tarefa</button>
            {mensagem && <p className='mensagem'>{mensagem}</p>}
        </form>
    );
}
