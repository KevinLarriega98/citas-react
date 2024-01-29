import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setUpdatePaciente }) => {
  useEffect(() => {
    if(pacientes.length > 0) {
      console.log("nuevo paciente")
    }
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">Aministra tus <span className="text-indigo-600 font-bold">pacientes y citas</span></p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setUpdatePaciente={setUpdatePaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">Los pacientes que agregues <span className="text-indigo-600 font-bold">aparecerán aquí</span></p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes
