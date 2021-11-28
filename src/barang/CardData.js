import { useState, useEffect } from "react"
import api from "../api.js"
import Card from "react-bootstrap/Card"
import { Col, Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Carousel from "react-bootstrap/Carousel"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Spinner from "react-bootstrap/Spinner"
import Judul from "../menubar/judul"
import {useContext} from "react"
import { BarangContext } from "../barang/BarangContext"

const CardData = (props) =>  {
  const [datas, setDatas] = useState([])
  const [isLoading, setLoading] = useState()
  const {keranjang, setKeranjang, barang, setBarang, crud} = useContext(BarangContext)
  const {tambahKeranjang} = crud

  const fetchData = async (id, value) => {
    setLoading(true)
    if (id === 1) {
      let result = await api.get(`api/barang/${value}/filter`)
      setDatas(result.data)
    } else if (id === 2 && value.length !== 0) {
      let result = await api.get(`api/barang/search_query=${value}`)
      setDatas(result.data)
    } else {
      let request = await api.get("api/barang")
      setDatas(request.data)
      setBarang(request.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filter = (event) => {
    let value = event.target.value
    fetchData(1, value)
  }

  const find = (event) => {
    let value = event.target.value
    fetchData(2, value)
  }

  const tambah = (e) => {
    e.preventDefault()
    let id = parseInt(e.target.value)
    let lokasi = barang.map((arr) => {return arr.id}).indexOf(id)
    let tambahan = barang[lokasi]
    tambahKeranjang(tambahan)
  }

  return (
    <>
      <Judul
        title="Data Barang Rental"
        info="Pilih barang sesuai dengan kebutuhanmu!"
      />
      <Container>
        <Row>
          <Col
            md={{
              span: 3,
              offset: 6,
            }}
          >
            <FloatingLabel controlId="floatingInputGrid" label="Cari Barang">
              <Form.Control
                type="text"
                onKeyUp={find}
                style={{
                  marginBottom: "20px",
                }}
              />
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel
              controlId="floatingSelect"
              label="Filter/Sorting Barang"
            >
              <Form.Select
                onChange={filter}
                defaultValue="Pilih Filter"
                style={{
                  marginBottom: "20px",
                }}
              >
                <option value="0">Harga Terendah</option>
                <option value="1">Harga Termahal</option>
                <option value="2">Kamera</option>
                <option value="3">Lensa</option>
                <option value="4">Audio</option>
                <option value="5">Lighting</option>
                <option value="6">Tripod</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
          {isLoading ? (
            <Spinner className="mx-auto" animation="border" />
          ) : (
            datas.map((barang, idx) => (
              <Col md={3} sm={12} key={idx}>
                <Card className="cardBarang" key={idx}>
                  <Carousel>
                    {barang.gambar.map((gambar, idx) => (
                      <Carousel.Item>
                        <img
                          key={idx}
                          className="d-block w-100 h-50"
                          src={gambar.url}
                          style={{height: 300, objectFit: 'cover'}}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <Card.Body>
                    <Card.Title>{barang.nama_barang}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush" key={idx}>
                    <ListGroupItem >
                      Tersedia : {barang.kuantitas} unit
                    </ListGroupItem>
                    <ListGroupItem>
                      Harga Sewa : {barang.harga_rental} / 24 jam
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">
                      <Button value={barang.id} variant="primary" onClick={tambah}>+</Button>
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  )
}

export default CardData
