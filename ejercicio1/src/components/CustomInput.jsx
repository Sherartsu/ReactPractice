import Form from 'react-bootstrap/Form';

const CustomInput = ({ label, type = "text", placeholder, onChange }) => (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={placeholder} onChange={onChange} />
  </Form.Group>
);

export default CustomInput;