import Card from 'react-bootstrap/Card'
import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

let dummy = [
    {
        location: "./img/Sony A7 Mark IId.jpg",
        name: "Sony A7 Mark IId",
        info: `Fullframe sensor, Lensa Kit, Memori 16gb, Baterai, Tas, Strap`,
        kuantitas: 3,
        hargaSewa: 120000
    },
    {
        location: "./img/Sony A7 Mark IIa.jpg",
        name: "Sony A7 Mark IId",
        info: `Fullframe sensor, Lensa Kit, Memori 16gb, Baterai, Tas, Strap`,
        kuantitas: 1,
        hargaSewa: 90000
    },
    {
        location: "./img/Sony A7 Mark IIb.jpg",
        name: "Sony A7 Mark IId",
        info: `Fullframe sensor, Lensa Kit, Memori 16gb, Baterai, Tas, Strap`,
        kuantitas: 3,
        hargaSewa: 100000
    },
    {
        location: "./img/Sony A7 Mark IIc.jpg",
        name: "Sony A7 Mark IId",
        info: `Fullframe sensor, Lensa Kit, Memori 16gb, Baterai, Tas, Strap`,
        kuantitas: 1,
        hargaSewa: 150000
    },
    {
        location: "./img/Sony A7 Mark IId.jpg",
        name: "Sony A7 Mark IId",
        info: `Fullframe sensor, Lensa Kit, Memori 16gb, Baterai, Tas, Strap`,
        kuantitas: 2,
        hargaSewa: 60000
    },
]

function CardData(props) {
  return(
    <Container>
        <Row xs={1} md={4} className="g-4">
            {dummy.map((barang, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={barang.location} />
                        <Card.Body>
                            <Card.Title>{barang.name}</Card.Title>
                            <Card.Text>
                                {barang.info}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Kuantitas : {barang.kuantitas}</ListGroupItem>
                            <ListGroupItem>Harga sewa : {barang.hargaSewa}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">
                                <Button variant="secondary">Booking</Button>
                            </Card.Link>
                            <Card.Link href="#">
                            <Button variant="primary">+</Button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default CardData;