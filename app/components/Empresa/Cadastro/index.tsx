'use client';

import './style.css';
import React, { useState } from 'react';
import axios from 'axios';

const EmpresaForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cnpj: '',
    senha: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('/api/empresa/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setResponseMessage(`Empresa criada com sucesso! ID: ${response.data.id}`);
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.mensagem || 'Erro ao criar empresa. Por favor, tente novamente.'
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Empresa</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome da Empresa
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cnpj" className="form-label">
            CNPJ
          </label>
          <input
            type="text"
            className="form-control"
            id="cnpj"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="senha" className="form-label">
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar Empresa
        </button>
      </form>

      {responseMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {responseMessage}
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default EmpresaForm;
