import React from 'react';
import Header from '../components/header/header'
import SubMenu from '../components/SubMenu/SubMenu'
import InputCadastrarModelo from '../components/Inputs/InputCadastrarModelo/inputCadastrarModelo'

import './ModeloCadastro.css'
const ModeloCadastro = () => (
    <>
  
      <Header />
      <div id="container">
        <SubMenu/>

        <div className="campo">
               
          <h2>Cadastrar Modelo</h2>
          <InputCadastrarModelo /> 
        </div>
      </div>
    </>
  
  );
  
  export default ModeloCadastro;