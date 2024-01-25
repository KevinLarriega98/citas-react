const Paciente = ({paciente}) => {
    return (
        <div className="mx-5 my-10 bg-white shadow-md rounded-lg py-10 px-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: <span className="font-normal normal-case">{paciente.nombreMascota}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{paciente.nombrePropietario}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: <span className="font-normal normal-case">{paciente.emailPropietario}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: <span className="font-normal normal-case">{paciente.altaMascota}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{paciente.sintomasMascota}</span></p>
        </div>
    )
}

export default Paciente
