import Breadcrumb from 'react-bootstrap/Breadcrumb';

const CustomBreadcrumb = ({ paths }) => (
  <Breadcrumb>
    {paths.map((p, i) => (
      <Breadcrumb.Item key={i} active={p.active} href={p.url}>{p.label}</Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export default CustomBreadcrumb;