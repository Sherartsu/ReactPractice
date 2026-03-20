import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// Importación de todos los componentes
import CustomButton from "./components/CustomButton";
import CustomAcordion from "./components/CustomAcordion";
import CustomAlert from "./components/CustomAlert";
import CustomBadge from "./components/CustomBadge";
import CustomCard from "./components/CustomCard";
import CustomSpinner from "./components/CustomSpinner";
import CustomInput from "./components/CustomInput";
import CustomModal from "./components/CustomModal";
import CustomProgressBar from "./components/CustomProgressBar";
import CustomListGroup from "./components/CustomListGroup";
import CustomNavbar from "./components/CustomNavbar";
import CustomBreadcrumb from "./components/CustomBreadcrumb";
import CustomImage from "./components/CustomImage";
import CustomButtonGroup from "./components/CustomButtonGroup";
import CustomDropdown from "./components/CustomDropdown";
import CustomCheckbox from "./components/CustomCheckbox";
import CustomSwitch from "./components/CustomSwitch";
import CustomTable from "./components/CustomTable";
import CustomPlaceholder from "./components/CustomPlaceholder";
import CustomPagination from "./components/CustomPagination";

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const bodyText = "Lorem Ipsum es simplemente el texto de relleno de las imprentas...";

  return (
    <div className="bg-light min-vh-100">
      <CustomNavbar brandName="Mi Librería Bootstrap" />
      
      <Container className="py-5">
        <CustomBreadcrumb paths={[{label: "Home", url: "#"}, {label: "Components", active: true}]} />

        <Row className="g-4">
          {/* Botones y Alertas */}
          <Col md={6}>
            <div className="p-3 border bg-white rounded">
              <h3>Botones y Feedback</h3>
              <CustomButton text="Apretar" action={() => alert("¡Pum!")} variantName="danger" />
              <CustomButton text="Modal" action={() => setShowModal(true)} variantName="primary" className="ms-2" />
              <div className="mt-3">
                <CustomAlert message="¡Operación exitosa!" variant="success" />
                <CustomBadge text="Nuevo" bg="info" />
                <CustomSpinner variant="warning" />
              </div>
            </div>
          </Col>

          {/* Formulario e Interacción */}
          <Col md={6}>
            <div className="p-3 border bg-white rounded">
              <h3>Formularios</h3>
              <CustomInput label="Nombre de Usuario" placeholder="Ej: Juan Perez" />
              <CustomCheckbox label="Acepto términos" id="check1" />
              <CustomSwitch label="Modo Oscuro" id="switch1" />
            </div>
          </Col>

          {/* Contenido Dinámico */}
          <Col md={12}>
            <CustomAcordion titleAcordion="Desplegar información" bodyAcordeon={bodyText} />
          </Col>

          {/* Cards y Tablas */}
          <Col md={4}>
            <CustomCard title="Card de Ejemplo" content="Este es un componente reutilizable." footer="v1.0" />
          </Col>
          
          <Col md={8}>
            <CustomTable 
              headers={["ID", "Nombre", "Estado"]} 
              data={[["1", "React", "Activo"], ["2", "Bootstrap", "Activo"]]} 
            />
          </Col>
        </Row>

        {/* Extras */}
        <div className="mt-5">
          <CustomProgressBar now={75} />
          <CustomPagination activePage={1} total={5} />
        </div>
      </Container>

      <CustomModal show={showModal} handleClose={() => setShowModal(false)} title="Ventana Emergente">
        <p>Este es el contenido del modal que creamos.</p>
      </CustomModal>
    </div>
  );
}

export default App;