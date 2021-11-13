import {useState, createContext} from "react"
import Swal from "sweetalert2"

export const BarangContext = createContext()

export const BarangProvider = props => {
    const [keranjang, setKeranjang] = useState([])
    const [barang, setBarang] = useState([])

    const tambahKeranjang = (tambahan) => {

        console.log(tambahan.id)
        let loc = keranjang.map((arr) => {return arr.id}).indexOf(tambahan.id)

        if(loc === -1) {
            let temp = {
                id: tambahan.id,
                nama_barang: tambahan.nama_barang,
                harga_rental: tambahan.harga_rental,
                kuantitas: 1
            }
            let newData = [...keranjang, temp]
            setKeranjang(newData)
            console.log("Berhasil Ditambahkan")
            successSwal("Berhasil Ditambahkan!")
        }else {
            let newData = keranjang
            newData[loc].kuantitas += 1
            setKeranjang(newData)
            console.log("Update Berhasil")
            successSwal("Berhasil Diperbarui")
        }
    }
    const successSwal = (text) => {
        Swal.fire({
            icon: 'success',
            title: text,
            showConfirmButton: false,
            timer: 1000
          })
    }

    const crud = {
        tambahKeranjang
    }

    return(
        <BarangContext.Provider value= {{keranjang, setKeranjang, barang, setBarang, crud}}>
            {props.children}
        </BarangContext.Provider>
    )
}