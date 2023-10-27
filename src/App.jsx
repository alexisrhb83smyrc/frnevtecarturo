import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import FormularioCaptura from './FormularioCaptura';
import DatosGuardados from './DatosGuardados';

import './App.css';

const App = () => {
  const [datosGuardados, setDatosGuardados] = useState([ {
    id: 1,
    nombreCompleto: 'Mario Alday',
    fechaNacimiento: 25-12-2000,
    direccion: 'Copoya',
    foto: 'https://i.pinimg.com/564x/46/52/86/4652866ebf459fdfab02d14e98d5f500.jpg'
  },
  {
    id: 2,
    nombreCompleto: 'Alexia',
    fechaNacimiento: '25-12-2006',
    direccion: 'Tuxtla',
    foto: 'https://i.pinimg.com/564x/6a/4c/1d/6a4c1d2c949d930e86275faafd98f2b9.jpg'
  }]);
 
  const handleEditar = (id, newData) => {
    // Encuentra el índice del elemento con el ID proporcionado
    const index = datosGuardados.findIndex((dato) => dato.id === id);

    if (index !== -1) {
      // Crea un nuevo arreglo de datos con el elemento editado
      const updatedDatos = [...datosGuardados];
      updatedDatos[index] = { ...updatedDatos[index], ...newData };

      // Actualiza el estado con el nuevo arreglo de datos
      setDatosGuardados(updatedDatos);
    }
  };

  // Función para agregar datos al estado
  const agregarDatos = (nuevosDatos) => {
    setDatosGuardados([...datosGuardados, nuevosDatos]);
  };
  const handleEliminar = (id) => {
    // Lógica para eliminar el elemento con el ID proporcionado
    const updatedDatos = datosGuardados.filter((dato) => dato.id !== id);
    setDatosGuardados(updatedDatos);
  };

  return (
    <div className="App">
      <Routes>
        {/* Ruta para el formulario, pasa la función agregarDatos como prop */}
        <Route path="/" element={<FormularioCaptura agregarDatos={agregarDatos} />} />
        {/* Ruta para mostrar los datos guardados */}
        <Route path="/datos-guardados" element={<DatosGuardados nuevosDatos={datosGuardados} onEditar={handleEditar} onEliminar={handleEliminar} />} />
      </Routes>
    </div>
  );
};

export default App;
