import ProgressBar from 'react-bootstrap/ProgressBar';

const CustomProgressBar = ({ now, label }) => (
  <ProgressBar now={now} label={`${now}%`} />
);

export default CustomProgressBar;