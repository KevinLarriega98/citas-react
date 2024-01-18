import { useState } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes }) => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [emailPropietario, setEmailPropietario] = useState('');
  const [altaMascota, setAltaMascota] = useState('');
  const [sintomasMascota, setSintomasMascota] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombreMascota, nombrePropietario, emailPropietario, altaMascota, sintomasMascota].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombreMascota,
      nombrePropietario,
      emailPropietario,
      altaMascota,
      sintomasMascota
    }

    setPacientes([...pacientes, objetoPaciente]);

    setNombreMascota('');
    setNombrePropietario('');
    setEmailPropietario('');
    setAltaMascota('');
    setSintomasMascota('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade pacientes y <span className="text-indigo-600 font-bold">adminístralos</span></p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5">
        {error && <Error />}
        <div className="mb-5">
          <label htmlFor="nombreMascota" className="block text-gray-700 uppercase font-bold">Nombre de la mascota</label>
          <input
            id="nombreMascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
          <input
            id="nombrePropietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="emailPropietario" className="block text-gray-700 uppercase font-bold">E-mail del propietario</label>
          <input
            id="emailPropietario"
            type="email"
            placeholder="E-mail del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={emailPropietario}
            onChange={(e) => setEmailPropietario(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="altaMascota" className="block text-gray-700 uppercase font-bold">Alta de la mascota</label>
          <input
            id="altaMascota"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={altaMascota}
            onChange={(e) => setAltaMascota(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomasMascota" className="block text-gray-700 uppercase font-bold">Síntomas de la mascota</label>
          <textarea
            id="sintomasMascota"
            placeholder="Describe los síntomas de tu mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomasMascota}
            onChange={(e) => setSintomasMascota(e.target.value)} />
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar paciente" />
      </form>
    </div>
  )
}

export default Formulario
