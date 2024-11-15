import { useState ,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DeviceList from './components/DeviceList'
import AddDevice from './components/AddDevice'
import EditDevice from './components/EditDevice'


interface DatosUsuario {
  nombre: string;
  apellido: string;
  ciudad: string;
  picture:string;
}

function App() {
  const [datos, setDatos] = useState<DatosUsuario>({nombre: '', apellido: '', ciudad: '', picture:''})
  useEffect(() => {
    const obtenerDatosUsuario = async () => {
      try {
        const respuesta = await fetch('https://randomuser.me/api/');
        const datosAPI = await respuesta.json();
        const { first, last } = datosAPI.results[0].name; 
        const ciudad = datosAPI.results[0].location.city; 
        const picture = datosAPI.results[0].picture.large;   
        setDatos({ nombre: first, apellido: last, ciudad , picture: picture});
       
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error)
      }
    };

    obtenerDatosUsuario();
   
  }, [])
 
  return (
    <Router>
    <div>
      <Header nombre={datos.nombre} apellido={datos.apellido} ciudad={datos.ciudad} picture={datos.picture} />
      <Routes>
      <Route path="/" element={<DeviceList />} />
      <Route path="/add-device" element={<AddDevice />} />
      <Route path="/edit-device/:id" element={<EditDevice />} />
      </Routes>
      </div>
      
      </Router>
  )
}

export default App
