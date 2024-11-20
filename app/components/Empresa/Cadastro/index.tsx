"use client";
import "./style.css";
import React, { useState } from "react";



export default function FormCadastroEmpresa() {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    cnpj: "",
    senha: "",
  });   
  

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensagem(""); // Limpa mensagem ao enviar o formulário

    // Monta o body no formato esperado pela API
    const body = {
        nome: formData.nomeEmpresa,
        cnpj: formData.cnpj,  // Deixe como string
        senha: formData.senha,
    };
    

    try {
      const response = await fetch(
        "http://localhost:8080/eco_wise_war/api/empresa/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          mode : 'no-cors'
        }
      );

      if (response.ok) {
        setMensagem("Empresa cadastrada com sucesso!");
        setFormData({
          nomeEmpresa: "",
          cnpj: "",
          senha: "",
        });
      } else {
        const errorData = await response.json();
        setMensagem(
          `Erro ao cadastrar: ${errorData.message || "Erro desconhecido"}`
        );
      }
    } catch {
      setMensagem(
        "Erro ao conectar com o servidor. Tente novamente mais tarde."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formCadastro">
      <h1>Cadastre uma empresa e comece a jornada sustentável</h1>
      <div className="formGroup">
        <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
        <input
          type="text"
          id="nomeEmpresa"
          name="nomeEmpresa"
          value={formData.nomeEmpresa}
          onChange={handleChange}
          placeholder="Digite o nome da empresa"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="cnpj">CNPJ:</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
          placeholder="Digite o CNPJ da empresa"
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Defina uma senha para a empresa"
          required
        />
      </div>
      <button type="submit" className="submitButton">
        Cadastrar Empresa
      </button>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </form>
  );
}
