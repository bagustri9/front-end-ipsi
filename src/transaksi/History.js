import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

const History = () => {
  return (
    <Card>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Barang</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{new Date().toLocaleDateString()}</td>
            <td>Sony A7S BO, Lensa Fix 50mm</td>
            <td>Telah dikembalikan</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}

export default History