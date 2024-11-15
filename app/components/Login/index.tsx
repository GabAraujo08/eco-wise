import React from 'react';
import './styles.css';

const Login = () => {
    return (
        <div className="container">
      <div className="contender">
      </div>
      <div className="form-container">
        <h1>EcoWise</h1>
        <p>
          Gamifique seu programa corporativo de conscientização em energia renovavel. Experimente por <strong>15 dias!</strong>
        </p>
        <form id="contact-form">
          <label htmlFor="name">Nome *</label>
          <input type="text" id="name" name="name" required placeholder="Campo Inválido" />
          
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="phone">Telefone *</label>
          <input type="tel" id="phone" name="phone" required />
          
          <label htmlFor="organization">Organização *</label>
          <input type="text" id="organization" name="organization" required />
          
          <div className="checkbox">
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent">
              Ao entrar em contato conosco você concorda com os <a href="#">termos de nossa política de privacidade</a>.
            </label>
          </div>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
    );
};

export default Login;