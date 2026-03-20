import Form from 'react-bootstrap/Form';

const CustomSwitch = ({ label, id }) => (
  <Form.Check type="switch" id={id} label={label} />
);

export default CustomSwitch;