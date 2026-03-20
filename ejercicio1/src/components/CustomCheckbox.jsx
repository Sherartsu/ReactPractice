import Form from 'react-bootstrap/Form';

const CustomCheckbox = ({ label, id, checked, onChange }) => (
  <Form.Check type="checkbox" id={id} label={label} checked={checked} onChange={onChange} />
);

export default CustomCheckbox;