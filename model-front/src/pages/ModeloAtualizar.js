import React from 'react';
import Header from '../components/header/header'
import SubMenu from '../components/SubMenu/SubMenu'
import InputAtualizar from '../components/Inputs/InputAtualizar/inputAtualizar'

import './ModeloCadastro.css'
const ModeloAtualizar = () => (
    <>
  
      <Header />
      <div id="container">
        <SubMenu/>

        <div className="campo">
               
          <h2>Update Modelo</h2>
          <InputAtualizar/> 
        </div>
      </div>
    </>
  
  );
  
  export default ModeloAtualizar;