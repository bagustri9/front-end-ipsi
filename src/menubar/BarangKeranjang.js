const BarangKeranjang = (props) => {
  return (
    <>
    <div className="dropdown-item d-flex align-items-center" key={props.key}>
      <div className="font-weight-bold">
        <div className="text-truncate">{props.nama}</div>
        <div className="small text-gray-500">Kuantitas : {props.kuantitas}</div>
      </div>
    </div>
    </>
  )
}

export default BarangKeranjang