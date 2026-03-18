import Card from 'react-bootstrap/Card';

const CustomCard = ({ title, content, footer }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
    </Card.Body>
    {footer && <Card.Footer>{footer}</Card.Footer>}
  </Card>
);

export default CustomCard;