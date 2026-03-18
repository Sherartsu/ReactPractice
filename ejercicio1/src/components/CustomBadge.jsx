import Badge from 'react-bootstrap/Badge';

const CustomBadge = ({ text, bg = "secondary" }) => (
  <Badge bg={bg}>{text}</Badge>
);

export default CustomBadge;