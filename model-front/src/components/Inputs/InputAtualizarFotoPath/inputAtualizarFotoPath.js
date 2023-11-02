import React, { useState, useEffect } from "react";

import "../InputCadastrarModelo/inputCadastrarModelo.css";
import EyeColorService from "../../../services/EyeColorService";
import HairColorService from "../../../services/HairColorService";
import CountryService from "../../../services/CountryService";
import ModeloService from "../../../services/ModeloService";

import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

const InputAtualizar = () => {
  const modeloService = new ModeloService();

  var formDataModelo = new FormData();
  const [eyeColor, setEyeColor] = new useState([]);
  const [hairColor, setHairColor] = new useState([]);
  const [country, setCountry] = new useState([]);
  const [data, setData] = new useState([]);

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

  const setInfo = () => {
    modeloService
      .getModeloId(document.getElementById("idField").value)
      .then((data) => setData(data));
  };

  const handleSubmit = (values) => {
    const data = {
      id: values.id,
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
      girls: values.girls,
      foto: values.foto
    };

    const jsonData = JSON.stringify(data);
    const modelo = new Blob([jsonData], {
      type: "application/json"
    });

    formDataModelo.append("modelVO", modelo);
    console.log(formDataModelo);

    modeloService
      .updateModeloSemFoto(formDataModelo)
      .then(
        (resp) => alert("Atualização bem sucedido"),
        window.location.reload(true)
      )
      .catch((error) => console.log("Deu errado", error));
  };
  const validations = yup.object().shape({});

  return (
    <>
      <Formik
        initialValues={{
          id: "",
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
          girls: "",
          foto: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Form">
          <p>Informações</p>
          <div className="Form_div" id="id" onChange={setInfo}>
            <div className="Form_Group">
              <Field
                name="id"
                id="idField"
                className="Form_Field"
                placeholder="ID"
              />
              <ErrorMessage component="span" name="id" className="Form_Error" />
            </div>
          </div>
          <div className="Form_div" id="infoPessoal">
            <div className="Form_Group">
              <p>Name</p>
              <Field
                name="nome"
                className="Form_Field"
                placeholder={
                  data.length === 0 ? "Name" : `${data.nomeCompleto}`
                }
              />
              <ErrorMessage
                component="span"
                name="nome"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <p>Country</p>
              <Field
                component="select"
                name="country"
                className="Form_Field"
                placeholder="País"
              >
                {data.length === 0 ? (
                  <option value="">--Escolha um país--</option>
                ) : (
                  <option value={data.country}>{data.country}</option>
                )}
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
              <p>Birthday</p>
              <Field
                name="niver"
                input
                type="date"
                className="Form_Field"
                placeholder={
                  data.length === 0 ? null : `${data.dataNascimento}`
                }
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
              <p>Height</p>
              <Field
                name="height"
                className="Form_Field"
                placeholder={data.length === 0 ? "Height" : `${data.height}`}
              />
              <ErrorMessage
                component="span"
                name="height"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <p>Bust</p>
              <Field
                name="bust"
                className="Form_Field"
                placeholder={data.length === 0 ? "Bust" : `${data.bust}`}
              />
              <ErrorMessage
                component="span"
                name="bust"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <p>Waist</p>
              <Field
                name="waist"
                className="Form_Field"
                placeholder={data.length === 0 ? "Waist" : `${data.waist}`}
              />
              <ErrorMessage
                component="span"
                name="waist"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <p>Hips</p>
              <Field
                name="hips"
                className="Form_Field"
                placeholder={data.length === 0 ? "Hips" : `${data.hips}`}
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
              <p>Eyes</p>
              <Field
                component="select"
                name="eyeColor"
                className="Form_Field"
                placeholder="Olhos"
              >
                {data.length === 0 ? (
                  <option value="">--Escolha uma cor de olhos--</option>
                ) : (
                  <option value={data.eyeColor}>{data.eyeColor}</option>
                )}
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
              <p>Hair</p>
              <Field
                component="select"
                name="hairColor"
                className="Form_Field"
                placeholder="Cabelos"
              >
                {data.length === 0 ? (
                  <option value="">--Escolha uma cor de cabelo--</option>
                ) : (
                  <option value={data.hairColor}>{data.hairColor}</option>
                )}
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
              <p>Rating</p>
              <Field
                component="select"
                name="rating"
                className="Form_Field"
                placeholder="Rating"
              >
                {data.length === 0 ? (
                  <option value="">Rating</option>
                ) : (
                  <option value={data.rating}>{data.rating}</option>
                )}
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
              <p>Boys</p>
              <Field
                name="boys"
                className="Form_Field"
                placeholder={data.length === 0 ? "Boys" : `${data.boys}`}
              />
              <ErrorMessage
                component="span"
                name="boys"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <p>Girls</p>
              <Field
                name="girls"
                className="Form_Field"
                placeholder={data.length === 0 ? "Girls" : `${data.girls}`}
              />
              <ErrorMessage
                component="span"
                name="girls"
                className="Form_Error"
              />
            </div>
            <div className="Form_Group">
              <p>Path</p>
              <Field
                name="foto"
                className="Form_Field"
                placeholder={data.length === 0 ? "Path photo" : `${data.foto}`}
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
                Atualizar
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputAtualizar;
