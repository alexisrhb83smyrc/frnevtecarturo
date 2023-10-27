import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './FormularioCaptura.css';

const FormularioCaptura = ({ agregarDatos }) => {
  const [formData, setFormData] = useState({
    id: '',
    nombreCompleto: '',
    fechaNacimiento: '',
    edad: '',
    direccion: '',
    foto: null
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Obtenemos el primer archivo seleccionado
    setFormData({ ...formData, foto: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer lo que necesites con los datos, por ejemplo, enviarlos a un servidor.
    console.log('Datos capturados:', formData);
    // Llama a la función para agregar los datos capturados
    agregarDatos(formData);
    // Redirige al usuario a la ruta de datos guardados (opcional)
    navigate('/datos-guardados');
  };
  

  return (
    <div className="formulario-captura">
      <h1>Formulario de Captura</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} required /><br />

        <label>Nombre Completo:</label>
        <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleInputChange} required /><br />

        <label>Fecha de Nacimiento:</label>
        <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleInputChange} required /><br />

        <label>Dirección:</label>
        <input type="text" name="direccion" value={formData.direccion} onChange={handleInputChange}/><br />

        <label>Foto (URL o ruta de archivo local):</label>
        <input type="text" name="foto" value={formData.foto} onChange={handleInputChange} required /><br />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default FormularioCaptura;

