import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'

const faQ = () => {
    return (
        <Container fluid>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <b>Apa itu RentCam?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Rentcam merupakan sebuah web yang berfokus pada penyewaan online alat dan barang fotografi (kamera, lensa, audio, lighting). 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <b>Bagaimana peminjamannya?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Peminjaman daapat dilakukan dengan memilih barang, memasukan kedalam keranjang (booking barang), bayar barang kemudia dapat diambil sesuai jadwal.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <b>Apa kelebihan menggunakan RentCam?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Peminjam dapat melihat ketersediaan barang yang ingin dipinjam.</li>
                            <li>Peminjam dapat melihat list barang yang ditawarkan dalam RentCam</li>
                            <li>Peminjam dapat bertransaksi secara mandiri tanpa harus ke tempat</li>
                            <li>Lebih aman, cepat, dan menghemat waktu</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <b>Bagaimana pembayarannya?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                    Pembayaran dapat dilakukan secara mandiri menggunakan m-bangking, ovo, gopay atau dapat menuju minimarket terdekat.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <b>Proses pengambilan dan pengembalian?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                    Pengambilan dan pengembalian dilakukan sesuai jadwal yang telah dipilih oleh penyewa sesuai jadwal yang dipilih. Apabila penyewa mengalami keterlambatan akan terdapat dispensasi waktu 30 menit selebihnya akan di berikan cas sesuai dengan ketentuan.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <b>Bagaimana jika barang rusak atau hilang?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                    Jika barang yang disewa mengalami kerussakan atau hilang, maka penyewa akan mengganti kerusakan barang atau mengganti barang tersebut sesuai dengan surat perjanjian yang telah dibuat.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default faQ;