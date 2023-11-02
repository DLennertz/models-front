import React from "react";
import ModeloService from "../../../services/ModeloService";

import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

const InputEncontarCliente = () => {
  const modeloService = new ModeloService();

  const handleSubmit = (values) => {
    modeloService.deleteModeloId(values.valor).then((resp) => {
      alert(`Apagou id:${values.valor}`);
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
              Deletar
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputEncontarCliente;
