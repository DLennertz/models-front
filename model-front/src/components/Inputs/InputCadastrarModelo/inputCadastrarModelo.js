import React, { useState, useEffect } from "react";

import "./inputCadastrarModelo.css";
import "./imgDrag";
import EyeColorService from "../../../services/EyeColorService";
import HairColorService from "../../../services/HairColorService";
import CountryService from "../../../services/CountryService";
import ModeloService from "../../../services/ModeloService";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

const InputCadastrarCliente = () => {
  const eyeColorService = new EyeColorService();
  const hairColorService = new HairColorService();
  const countryService = new CountryService();
  const modeloService = new ModeloService();

  var formDataModelo = new FormData();
  const [eyeColor, setEyeColor] = new useState([]);
  const [hairColor, setHairColor] = new useState([]);
  const [country, setCountry] = new useState([]);

  useEffect(() => {
    eyeColorService.getEyeColor().then((eyeColor) => setEyeColor(eyeColor));
    hairColorService
      .getHairColor()
      .then((hairColor) => setHairColor(hairColor));
    countryService.getCountry().then((country) => setCountry(country));
  }, []);

  const handleSubmit = (values) => {
    const element = document.getElementById("image");
    console.log(element);
    const data = {
      nomeCompleto: values.nome,
      dataNascimento: values.niver,
      country: values.country,
      height: values.height,
      eyeColor: values.eyeColor,
      hairColor: values.hairColor,
      bust: values.bust,
      waist: values.waist,
      hips: values.hips,
      rating: values.rating,
      boys: values.boys,
      girls: values.girls
    };

    const jsonData = JSON.stringify(data);
    const modelo = new Blob([jsonData], {
      type: "application/json"
    });

    formDataModelo.append("modelVO", modelo);
    formDataModelo.append("file", element.files[0], "file");

    modeloService
      .createModelo(formDataModelo)
      .then(
        (resp) => alert("Cadastro bem sucedido"),
        window.location.reload(true)
      )
      .catch((error) => console.log("Deu errado", error));
  };
  const validations = yup.object().shape({});

  return (
    <>
      <Formik
        initialValues={{
          foto: "",
          nome: "",
          niver: "",
          country: "",
          height: "",
          eyeColor: "",
          hairColor: "",
          bust: "",
          waist: "",
          hips: "",
          rating: "",
          boys: "",
          girls: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Form">
          <p>Oi</p>
          <div className="Form_div" id="infoPessoal">
            <div className="Form_Group">
              <Field
                name="nome"
                className="Form_Field"
                placeholder="Nome Completo"
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
                name="country"
                className="Form_Field"
                placeholder="País"
              >
                <option value="">Country</option>
                {country.map((item) => (
                  <option value={item.nameCountry}>{item.nameCountry}</option>
                ))}
              </Field>
              <ErrorMessage
                component="span"
                name="country"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field name="niver" input type="date" className="Form_Field" />
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
              />
              <ErrorMessage
                component="span"
                name="height"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field name="bust" className="Form_Field" placeholder="Bust" />
              <ErrorMessage
                component="span"
                name="bust"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field name="waist" className="Form_Field" placeholder="Waist" />
              <ErrorMessage
                component="span"
                name="waist"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field name="hips" className="Form_Field" placeholder="Hips" />
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
                name="eyeColor"
                className="Form_Field"
                placeholder="Olhos"
              >
                <option value="">Eyes</option>
                {eyeColor.map((item) => (
                  <option value={item.eyeColor}>{item.eyeColor}</option>
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
                name="hairColor"
                className="Form_Field"
                placeholder="Cabelos"
              >
                <option value="">Hair</option>
                {hairColor.map((item) => (
                  <option value={item.hairColor}>{item.hairColor}</option>
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
              >
                <option value="">Rating</option>
                <option value="10">10</option>
                <option value="9.5">9.5</option>
                <option value="9">9</option>
                <option value="8.5">8.5</option>
                <option value="8">8</option>
                <option value="7.5">7.5</option>
                <option value="7">7</option>
                <option value="6.5">6.5</option>
                <option value="6">6</option>
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
              <Field name="boys" className="Form_Field" placeholder="Boys" />
              <ErrorMessage
                component="span"
                name="boys"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <Field name="girls" className="Form_Field" placeholder="Girls" />
              <ErrorMessage
                component="span"
                name="girls"
                className="Form_Error"
              />
            </div>
          </div>
          <div className="Form_div" id="campoFoto">
            <div className="Form_Group">
              <Field
                name="foto"
                input
                type="file"
                className="Form_Field"
                id="image"
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
              <button className="Form_Btn" type="submit">
                Cadastrar
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputCadastrarCliente;
