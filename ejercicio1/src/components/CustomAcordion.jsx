import Accordion from 'react-bootstrap/Accordion';

const CustomAcordion = ({titleAcordion, bodyAcordeon}) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{titleAcordion}</Accordion.Header>
        <Accordion.Body>{bodyAcordeon}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomAcordion;