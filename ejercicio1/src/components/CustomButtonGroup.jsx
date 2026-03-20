import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const CustomButtonGroup = ({ options }) => (
  <ButtonGroup>
    {options.map((opt, i) => (
      <Button key={i} variant="secondary" onClick={opt.action}>{opt.label}</Button>
    ))}
  </ButtonGroup>
);

export default CustomButtonGroup;