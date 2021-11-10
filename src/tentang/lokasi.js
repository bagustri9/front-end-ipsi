import Card from "react-bootstrap/Card";
import Judul from "../menubar/judul";

const lokasi = () => {
  return (
    <>
      <Judul title="Lokasi Rental" info="Temukan lokasi rental kami!" />
      <Card>
        <Card.Body>
            <Card.Text>
                <iframe title="Map Rental" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31612.51051486767!2d112.622099!3d-7.940539000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac49cab4a8c60a71!2sSwandudes%20Creative%20Production!5e0!3m2!1sen!2sid!4v1636120322907!5m2!1sen!2sid" width="100%" height="600" style={{border:0}} allowFullscreen="" loading="lazy"></iframe>
            </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default lokasi;
