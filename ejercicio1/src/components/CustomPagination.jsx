import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ activePage, total }) => {
  let items = [];
  for (let number = 1; number <= total; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage}>{number}</Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;