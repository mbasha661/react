import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="public\umber.webp" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>UMBERLA</Card.Title>
        <Card.Text>
       
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;