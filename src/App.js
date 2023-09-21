import "./App.css";
import Mensaje from "./message";

const Description = () => {
  return <p>Esta es la pagina de react en la que estoy practicando</p>;
};

function App() {
  return (
    <div className="App">
      <Mensaje message="Estamos haciendoo una nueva pagina de React" />
      <Description />
    </div>
  );
}

/*IMPORTANTE: NO CREAR COMPONENTES DENTRO DE OTROS COMPONENTES*/
export default App;
