import api from "./api";

export default class ModeloService {
  getTotal() {
    return api
      .get("/model/count", {
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }

  getAniversariante() {
    return api
      .get("/model/aniversariante", {
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }

  getStats() {
    return api
      .get("/model/stats", {
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }
  getModelo(pageNumber, pageSize, orderBy) {
    return api
      .get("/model", {
        auth: { username: "usuario", password: "123456" },
        params: {
          pageNumber: pageNumber,
          pageSize: pageSize,
          orderBy: orderBy
        }
      })
      .then((res) => res.data);
  }

  getModeloId(id) {
    return api
      .get("/model/" + id, {
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }

  deleteModeloId(id) {
    return api
      .delete("/model/" + id, {
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }

  createModelo(newModel) {
    return api
      .post("/model/save", newModel, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }

  createModeloSemFoto(newModel) {
    return api
      .post("/model/saveSemFoto", newModel, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }

  updateModelo(newModel) {
    return api
      .put("/model/update", newModel, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }

  updateModeloSemFoto(newModel) {
    return api
      .put("/model/updateSemFoto", newModel, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        },
        auth: { username: "usuario", password: "123456" }
      })
      .then((res) => res.data);
  }
}
