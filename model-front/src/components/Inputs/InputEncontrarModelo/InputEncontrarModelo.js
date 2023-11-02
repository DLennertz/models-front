import React, { useState } from "react";
import ModeloService from "../../../services/ModeloService";

import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import Modal from "react-modal";
import "./ModalInputEncontrarModelo.css";

const InputEncontarCliente = () => {
  var [modelo, setModelo] = useState(0);
  const modeloService = new ModeloService();

  const handleSubmit = (values) => {
    modeloService.getModeloId(values.valor).then((resp) => {
      setModelo(resp);
    });
  };
  const validations = yup.object().shape({
    id: yup.number().min(1).required()
  });

  return (
    <>
      <p>Digite o id do Modelo desejado, abaixo!</p>

      <Formik
        onSubmit={handleSubmit}
        validationSchema={validations}
        initialValues={[]}
      >
        <Form className="Form">
          <div className="caixa">
            <div className="Form_Group" id="campoId">
              <Field name="valor" className="Form_Field" placeholder="ID" />
              <ErrorMessage
                component="span"
                name="valor"
                className="Form_Error"
              />
            </div>

            <button className="Form_Btn" type="submit">
              Procurar
            </button>
          </div>

          <Modal isOpen={Boolean(modelo)} className="Modal_Form">
            <div className="caixaModal">
              <div className="ModalColumn" id="foto">
                <img
                  alt="Foto da modelo"
                  src={
                    modelo === 0 || modelo === false
                      ? null
                      : `${modelo.photos[0].url}`
                  }
                  id="fotoModal"
                />
              </div>

              <div className="ModalColumn" id="medidas">
                <p>
                  <strong>Altura: </strong>
                  {modelo.height}
                </p>
                <p>
                  <strong>Bust: </strong>
                  {modelo.bust}
                </p>
                <p>
                  <strong>Waist: </strong>
                  {modelo.waist}
                </p>
                <p>
                  <strong>Hips: </strong>
                  {modelo.hips}
                </p>
                <p>
                  <strong>Olhos: </strong>
                  {modelo.eyeColor}
                </p>
                <p>
                  <strong>Cabelos: </strong>
                  {modelo.hairColor}
                </p>
                <p>
                  <strong>Data: </strong>
                  {modelo.dataNascimento}
                </p>
                <p>
                  <strong>País: </strong>
                  {modelo.country}
                </p>
              </div>

              <div className="ModalColumn" id="info">
                <p>
                  <strong>ID: </strong>
                  {modelo.id}
                </p>
                <p>
                  <strong>Nome: </strong>
                  {modelo.nomeCompleto}
                </p>
                <p>
                  <strong>Rating: </strong>
                  {modelo.rating}
                </p>
                <p>
                  <strong>Position: </strong>
                  {modelo.position}
                </p>
                <p>
                  <strong>Boys: </strong>
                  {modelo.boys}
                </p>
                <p>
                  <strong>Girls: </strong>
                  {modelo.girls}
                </p>

                <button onClick={() => setModelo(false)} id="buttonModalFechar">
                  Fechar
                </button>
              </div>
            </div>
          </Modal>
        </Form>
      </Formik>
    </>
  );
};

export default InputEncontarCliente;
