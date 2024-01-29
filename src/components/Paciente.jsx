const Paciente = ({ paciente, setUpdatePaciente }) => {
    return (
        <div className="mx-5 my-10 bg-white shadow-md rounded-lg py-10 px-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: <span className="font-normal normal-case">{paciente.nombreMascota}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{paciente.nombrePropietario}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: <span className="font-normal normal-case">{paciente.emailPropietario}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: <span className="font-normal normal-case">{paciente.altaMascota}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{paciente.sintomasMascota}</span></p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setUpdatePaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
