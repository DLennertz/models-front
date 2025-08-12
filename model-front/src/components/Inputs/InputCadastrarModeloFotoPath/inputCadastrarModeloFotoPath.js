import React, { useState, useEffect } from "react";

import "../InputCadastrarModelo/inputCadastrarModelo.css";
import EyeColorService from "../../../services/EyeColorService";
import HairColorService from "../../../services/HairColorService";
import CountryService from "../../../services/CountryService";
import ModeloService from "../../../services/ModeloService";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";

const InputCadastrarModeloSemFoto = () => {
  const modeloService = new ModeloService();
  var formDataModelo = new FormData();
  const [eyeColor, setEyeColor] = new useState([]);
  const [hairColor, setHairColor] = new useState([]);
  const [country, setCountry] = new useState([]);

  useEffect(() => {
    const eyeColorService = new EyeColorService();
    const hairColorService = new HairColorService();
    const countryService = new CountryService();

    eyeColorService.getEyeColor().then((eyeColor) => setEyeColor(eyeColor));
    hairColorService
      .getHairColor()
      .then((hairColor) => setHairColor(hairColor));
    countryService.getCountry().then((country) => setCountry(country));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (values) => {
    const data = {
      nomeCompleto: values.nome,
      dataNascimento: values.niver,
      idCountry: values.idCountry,
      height: values.height,
      idEyeColor: values.idEyeColor,
      idHairColor: values.idHairColor,
      bust: values.bust,
      waist: values.waist,
      hips: values.hips,
      rating: values.rating,
      boys: values.boys,
      girls: values.girls,
      photos: [{ url: values.foto }],
    };
    console.log(data);
    const jsonData = JSON.stringify(data);
    const newModel = new Blob([jsonData], {
      type: "application/json",
    });

    formDataModelo.append("newModel", newModel);

    modeloService
      .createModeloSemFoto(formDataModelo)
      .then(() => {
        new Swal("", "Cadastro feito com sucesso", "success");
        window.location.reload(true);
      })
      .catch((error) => console.log("Não foi salvo", error));
  };
  const validations = yup.object().shape({});

  return (
    <>
      <Formik
        initialValues={{
          nome: "",
          niver: "",
          idCountry: "",
          height: "",
          idEyeColor: "",
          idHairColor: "",
          bust: "",
          waist: "",
          hips: "",
          rating: "",
          boys: "",
          girls: "",
          foto: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Form">
          <p>Informações</p>
          <div className="Form_div" id="infoPessoal">
            <div className="Form_Group">
              <Field
                name="nome"
                className="Form_Field"
                placeholder="Nome Completo"
                id="idField"
              />
              <ErrorMessage
                component="span"
                name="nome"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                component="select"
                name="idCountry"
                className="Form_Field"
                placeholder="País"
                id="country_selector"
              >
                <option value="">--Escolha um país--</option>
                {country.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Field>
              <ErrorMessage
                component="span"
                name="country"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                name="niver"
                input
                type="date"
                className="Form_Field"
                id="birthField"
              />
              <ErrorMessage
                component="span"
                name="niver"
                className="Form_Error"
              />
            </div>
          </div>
          <div className="Form_div" id="medidas">
            <div className="Form_Group">
              <Field
                name="height"
                className="Form_Field"
                placeholder="Altura"
                id="heightField"
              />
              <ErrorMessage
                component="span"
                name="height"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                name="bust"
                className="Form_Field"
                placeholder="Bust"
                id="bustField"
              />
              <ErrorMessage
                component="span"
                name="bust"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                name="waist"
                className="Form_Field"
                placeholder="Waist"
                id="waistField"
              />
              <ErrorMessage
                component="span"
                name="waist"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                name="hips"
                className="Form_Field"
                placeholder="Hips"
                id="hipsField"
              />
              <ErrorMessage
                component="span"
                name="hips"
                className="Form_Error"
              />
            </div>
          </div>
          <div className="Form_div" id="aparencia">
            <div className="Form_Group">
              <Field
                component="select"
                name="idEyeColor"
                className="Form_Field"
                placeholder="Olhos"
                id="eye_selector"
              >
                <option value="">--Escolha uma cor de olhos--</option>
                {eyeColor.map((item) => (
                  <option value={item.idEyeColor}>{item.eyeColor}</option>
                ))}
              </Field>
              <ErrorMessage
                component="span"
                name="eyeColor"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                component="select"
                name="idHairColor"
                className="Form_Field"
                placeholder="Cabelos"
                id="hair_selector"
              >
                <option value="">--Escolha uma cor de cabelo--</option>
                {hairColor.map((item) => (
                  <option value={item.idHairColor}>{item.hairColor}</option>
                ))}
              </Field>
              <ErrorMessage
                component="span"
                name="hairColor"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                component="select"
                name="rating"
                className="Form_Field"
                placeholder="Rating"
                id="rating_selector"
              >
                <option value="">--Rating--</option>
                <option value="10.0">10</option>
                <option value="9.5">9.5</option>
                <option value="9.0">9</option>
                <option value="8.5">8.5</option>
                <option value="8.0">8</option>
                <option value="7.5">7.5</option>
                <option value="7.0">7</option>
                <option value="6.5">6.5</option>
                <option value="6.0">6</option>
              </Field>
              <ErrorMessage
                component="span"
                name="rating"
                className="Form_Error"
              />
            </div>
          </div>
          <div className="Form_div" id="filhos">
            <div className="Form_Group">
              <Field
                name="boys"
                className="Form_Field"
                placeholder="Boys"
                id="boyField"
              />
              <ErrorMessage
                component="span"
                name="boys"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                name="girls"
                className="Form_Field"
                placeholder="Girls"
                id="girlField"
              />
              <ErrorMessage
                component="span"
                name="girls"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field
                name="foto"
                className="Form_Field"
                placeholder="Foto path"
                id="pathField"
              />
              <ErrorMessage
                component="span"
                name="foto"
                className="Form_Error"
              />
            </div>
          </div>
          <div className="Form_div" id="campoButao">
            <div>
              <button className="Form_Btn" type="submit" id="submitButton">
                Cadastrar
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputCadastrarModeloSemFoto;
