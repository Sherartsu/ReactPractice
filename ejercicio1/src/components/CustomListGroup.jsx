import ListGroup from 'react-bootstrap/ListGroup';

const CustomListGroup = ({ items }) => (
  <ListGroup>
    {items.map((item, index) => (
      <ListGroup.Item key={index}>{item}</ListGroup.Item>
    ))}
  </ListGroup>
);

export default CustomListGroup;