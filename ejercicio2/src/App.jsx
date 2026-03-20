// ... (tus otros imports)
import CustomProfileCard from "./components/CustomProfileCard.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // ... (tus otras variables)

  return (
    <div className="container mt-4">
      <h2>Ejercicio 2: Perfil de Usuario</h2>
      <div className="d-flex flex-wrap">
        {/* Usando el componente con diferentes datos mediante props */}
        <CustomProfileCard 
          nombre="Juan Pérez" 
          edad={28} 
          profesion="Desarrollador Web" 
          ciudad="Buenos Aires" 
          fotoUrl="https://randomuser.me/api/portraits/men/1.jpg"
        />

        <CustomProfileCard 
          nombre="María García" 
          edad={32} 
          profesion="Diseñadora UX/UI" 
          ciudad="Madrid" 
          fotoUrl="https://randomuser.me/api/portraits/women/2.jpg"
        />
      </div>

    </div>
  );
}

export default App;