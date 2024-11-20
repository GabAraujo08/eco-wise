'use client';
import './style.css';
// Importando o React
import React, { useState } from 'react';

export default function FormCadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Aqui você pode enviar os dados para a API
    };

    return (

            <form onSubmit={handleSubmit} className='formCadastro'>
                <h1 >Engaje seus colaboradores em uma jornada gamificada para o consumo sustentável de energia</h1>
                <div className='formGroup'>
                    <label htmlFor='nome'>Nome:</label>
                    <input
                        type='text'
                        id='nome'
                        name='nome'
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder='Digite o nome do colaborador'
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor='email'>E-mail:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Digite o e-mail do seu colaborador'
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor='senha'>Senha:</label>
                    <input
                        type='password'
                        id='senha'
                        name='senha'
                        value={formData.senha}
                        onChange={handleChange}
                        placeholder='Qual será a senha do colaborador?'
                        required
                    />
                </div>
                <button type='submit' className='submitButton'>Cadastrar</button>
            </form>
       
    );
}
