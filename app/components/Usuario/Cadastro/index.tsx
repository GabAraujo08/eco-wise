'use client';

import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsuarioForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    pontos: 0,
    empresaId: '',
  });

  const [empresas, setEmpresas] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Carregar lista de empresas ao montar o componente
  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get('/api/empresa/all');
        setEmpresas(response.data); // Atualiza a lista de empresas com os dados retornados
      } catch (error) {
        console.error('Erro ao buscar empresas:', error);
        setErrorMessage('Erro ao carregar a lista de empresas. Tente novamente mais tarde.');
      }
    };

    fetchEmpresas();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('/api/usuario/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setResponseMessage(`Usuário criado com sucesso! ID: ${response.data.id}`);
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.mensagem || 'Erro ao criar usuário. Por favor, tente novamente.'
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome do Usuário
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
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
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

        {/* <div className="mb-3">
          <label htmlFor="pontos" className="form-label">
            Pontos (opcional)
          </label>
          <input
            type="number"
            className="form-control"
            id="pontos"
            name="pontos"
            value={formData.pontos}
            onChange={handleInputChange}
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="empresaId" className="form-label">
            Empresa
          </label>
          <select
            className="form-select"
            id="empresaId"
            name="empresaId"
            value={formData.empresaId}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione uma empresa</option>
            {empresas.map((empresa: { id: number; nome: string }) => (
              <option key={empresa.id} value={empresa.id}>
                {empresa.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar Usuário
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

export default UsuarioForm;
