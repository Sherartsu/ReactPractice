import Dropdown from 'react-bootstrap/Dropdown';

const CustomDropdown = ({ title, items }) => (
  <Dropdown>
    <Dropdown.Toggle variant="success">{title}</Dropdown.Toggle>
    <Dropdown.Menu>
      {items.map((item, i) => (
        <Dropdown.Item key={i} onClick={item.action}>{item.label}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default CustomDropdown;