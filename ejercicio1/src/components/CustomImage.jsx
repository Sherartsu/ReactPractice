import Image from 'react-bootstrap/Image';

const CustomImage = ({ src, rounded = true, thumbnail = false }) => (
  <Image src={src} rounded={rounded} thumbnail={thumbnail} fluid />
);

export default CustomImage;