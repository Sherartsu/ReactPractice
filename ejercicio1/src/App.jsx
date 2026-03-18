import CustomAcordion from "./components/CustomAcordion";
import CustomButton from "./components/CustomButton";
import CustomAlert from "./components/CustomAlert";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let bodyTextAcordeon = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
  return (
    <>
      <CustomButton
        text={"Apretar"}
        action={() => alert("Presionado")}
        variantName={"danger"}
      />
      <CustomButton
        text={"No apretar"}
        action={() => alert("No dar click")}
        variantName={"warning"}
      />
      <CustomAcordion titleAcordion={"Mi primer acordeon"} bodyAcordeon={bodyTextAcordeon} />
      <CustomAlert message={"Alerta"} variant={"warning"} />
    </>
  );
}

export default App;
