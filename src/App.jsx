import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes de kevin')) ?? []);
  const [actualizarPaciente, setActualizarPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes de kevin', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          actualizarPaciente={actualizarPaciente}
          setActualizarPaciente={setActualizarPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setActualizarPaciente={setActualizarPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
