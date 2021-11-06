import { useState, useEffect } from "react";
import api from "../api.js";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

function CardData(props) {
  const [datas, setDatas] = useState([]);
  const fetchData = async (id) => {
    console.log(id)
    if (id === undefined) {
      let request = await api.get("api/barang");
      setDatas(request.data);
    } else {
      let result = await api.get(`api/barang/${id}/filter`);
      setDatas(result.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filter = (event) => {
    let value = event.target.value;
    fetchData(value)
  };

  return (
    <Container>
      <Form.Select onChange={filter} defaultValue="Pilih Filter">
        <option disabled> Pilih Filter </option>
        <option value="0">One</option>
        <option value="1">Two</option>
        <option value="2">Three</option>
      </Form.Select>
      <Row xs={1} md={4} className="g-4">
        {datas.map((barang, idx) => (
          <Col key={idx}>
            <Card>
              <Carousel>
              {barang.gambar.map((gambar, idx) => (
                <Carousel.Item>
                  <img key={idx}
                    className="d-block w-100 h-50"
                    src={gambar.url}
                  />
                </Carousel.Item>
              ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{barang.nama_barang}</Card.Title>
                <Card.Text>{barang.deskripsi}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Tersedia : {barang.kuantitas}
                  unit
                </ListGroupItem>
                <ListGroupItem>
                  Harga sewa : {barang.harga_rental}
                </ListGroupItem>
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
  );
}

export default CardData;
