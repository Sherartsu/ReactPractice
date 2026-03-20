import Placeholder from 'react-bootstrap/Placeholder';

const CustomPlaceholder = ({ xs = 6 }) => (
  <Placeholder as="p" animation="glow">
    <Placeholder xs={xs} />
  </Placeholder>
);

export default CustomPlaceholder;