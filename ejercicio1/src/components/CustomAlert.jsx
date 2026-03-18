import Alert from 'react-bootstrap/Alert';

const CustomAlert = ({ message, variant = "info" }) => (
  <Alert variant={variant}>{message}</Alert>
);

export default CustomAlert;