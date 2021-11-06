import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Logo from '../assets/img/tes.png'

var isi = 0

const NavProfile = () => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">RentCam</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Button onClick={() => isi++}
                    variant="primary" style={{marginRight:"20px"}}>
                        Rental <Badge bg="secondary">{isi}</Badge>
                    </Button>
                    <Image src={Logo} style={{width:45, height:45, objectFit:"cover"}} roundedCircle />
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavProfile