import React, { useState, useEffect, useCallback } from "react";
import ModeloService from "../../services/ModeloService";
import MaterialTable from "material-table";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./tableModelo.css";

const columns = [
  { title: "ID", field: "id", width: 80 },
  { title: "Nome", field: "nomeCompleto" },
  { title: "Posição", field: "position" },
  { title: "País", field: "country" },
  { title: "Nascimento", field: "dataNascimento" },
];

const TableModelo = () => {
  const [data, setModelos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchModelos = useCallback(async () => {
    try {
      const modeloService = new ModeloService();
      const result = await modeloService.getAll();
      setModelos(result);
    } catch (error) {
      console.error("Erro ao carregar modelos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchModelos();
  }, [fetchModelos]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="table-container">
      <MaterialTable
        title="Modelos Cadastrados"
        columns={columns}
        data={data}
        detailPanel={(rowData) => (
          <Box className="detail-panel">
            <div className="detail-item">
              <strong>Height:</strong> {rowData.height}
            </div>
            <div className="detail-item">
              <strong>Bust:</strong> {rowData.bust}
            </div>
            <div className="detail-item">
              <strong>Waist:</strong> {rowData.waist}
            </div>
            <div className="detail-item">
              <strong>Hips:</strong> {rowData.hips}
            </div>
            <div className="detail-item">
              <strong>Eyes:</strong> {rowData.eyeColor}
            </div>
            <div className="detail-item">
              <strong>Hair:</strong> {rowData.hairColor}
            </div>
            <div className="detail-item">
              <strong>Boys:</strong> {rowData.boys}
            </div>
            <div className="detail-item">
              <strong>Girls:</strong> {rowData.girls}
            </div>
          </Box>
        )}
        options={{
          search: true,
          pageSize: 20,
          headerStyle: {
            backgroundColor: "#f5f5f5",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
};

export default TableModelo;
