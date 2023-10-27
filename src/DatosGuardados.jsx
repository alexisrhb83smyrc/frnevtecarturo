import React, { useState } from 'react';
import { calcularEdad } from './assets/utilidades';

const DatosGuardados = ({ nuevosDatos, onEditar, onEliminar }) => {
  const [editandoId, setEditandoId] = useState(null);
  const [nuevosDatosEditados, setNuevosDatosEditados] = useState({});
  const [imagenVisible, setImagenVisible] = useState(null);

  const mostrarImagen = (foto) => {
    setImagenVisible(foto);
  };
  if (!nuevosDatos || nuevosDatos.length === 0) {
    return <p>No hay datos guardados aún.</p>;
  }
  const handleEditar = (id) => {
    setEditandoId(id);
    const datoEditar = nuevosDatos.find((dato) => dato.id === id);
    setNuevosDatosEditados(datoEditar);
  };
  const handleGuardarEdicion = () => {
    // Lógica para guardar los datos editados
    onEditar(nuevosDatosEditados.id, nuevosDatosEditados);
    setEditandoId(null);
    setNuevosDatosEditados({});
  };
  const handleEliminar = (id) => {
    // Lógica para eliminar el elemento con el ID proporcionado
    onEliminar(id);
  };

  return (
    <div className="datos-guardados">
      <h2>Datos Guardados:</h2>
      <ul>
        {nuevosDatos.map((datos, index) => (
          <li key={index} className="datos-item">
            <div className="datos-imagen">
              {imagenVisible === datos.foto ? (
                <img src={datos.foto} alt={`Foto de ${datos.nombreCompleto}`} />
              ) : (
                <button onClick={() => mostrarImagen(datos.foto)}>Ver Foto</button>
              )}
            </div>
            <div className="datos-detalle">
            <strong>ID:</strong> {datos.id}<br />
              {editandoId === datos.id ? (
                <div>
                  <input
                    type="text"
                    value={nuevosDatosEditados.nombreCompleto || ''}
                    onChange={(e) =>
                      setNuevosDatosEditados({
                        ...nuevosDatosEditados,
                        nombreCompleto: e.target.value,
                      })
                    }
                  />
                  {/* Otros campos de edición aquí... */}
                  <button onClick={handleGuardarEdicion}>Guardar</button>
                  </div>
              ) : (
                <div>
                  <strong>Nombre:</strong> {datos.nombreCompleto}<br />
                  <strong>Fecha de Nacimiento:</strong> {datos.fechaNacimiento}<br />
                  <strong>Edad:</strong> {calcularEdad(datos.fechaNacimiento)} años<br />
                  {/* Otros campos no editables aquí... */}
                  <button onClick={() => handleEditar(datos.id)}>Editar</button>
                  <button onClick={() => handleEliminar(datos.id)}>Eliminar</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatosGuardados;
