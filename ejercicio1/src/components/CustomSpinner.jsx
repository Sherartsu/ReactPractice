import Spinner from 'react-bootstrap/Spinner';

const CustomSpinner = ({ animation = "border", variant = "primary" }) => (
  <Spinner animation={animation} variant={variant} />
);

export default CustomSpinner;