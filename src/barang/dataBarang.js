import { useState, useEffect} from "react";
import api from "../api.js";
import Card from 'react-bootstrap/Card'
import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

function CardData(props) {
    const [datas, setDatas] = useState([]);
    const fetchData = async () => {
      let request = await api.get("api/barang");
      setDatas(request.data);
    };
    useEffect(() => {
        fetchData();
      }, []);
    
    console.log(datas);
  return(
    <Container>
        <Row xs={1} md={4} className="g-4">
            {datas.map((barang, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={barang.gambar} />
                        <Card.Body>
                            <Card.Title>{barang.nama_barang}</Card.Title>
                            <Card.Text>
                                {barang.deskripsi}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Tersedia : {barang.kuantitas} unit</ListGroupItem>
                            <ListGroupItem>Harga sewa : {barang.harga_rental}</ListGroupItem>
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