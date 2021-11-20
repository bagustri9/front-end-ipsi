import { BsTrash } from 'react-icons/bs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useContext} from "react"
import { BarangContext } from "../barang/BarangContext"
import Cookies from 'js-cookie'

const BarangKeranjang = (props) => {

  const { keranjang, setKeranjang } = useContext(BarangContext)

  return (
    <>
    <Row>
      <div className="dropdown-item" >
        <div className="font-weight-bold">
          <Col>
            <div className="text-truncate" style={{display: 'inline'}}>{props.nama}</div>
            <div className='text-right' style={{display: 'inline', paddingLeft: '90%'}}>
              <BsTrash size={25} style={{margin: '0 auto', cursor: 'pointer'}} value={props.idea} onClick={() => {
                let temp = keranjang.filter((arr) => {
                  if (arr.id !== props.idea) return arr
                })
                setKeranjang(temp)
                Cookies.set('cart', JSON.stringify(temp))
              }}/>
            </div>
            <div className="small text-gray-500" >Kuantitas : {props.kuantitas}</div>
          </Col>
        </div>
      </div>
    </Row>
    </>
  )
}

export default BarangKeranjang