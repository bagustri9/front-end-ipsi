import {useState, createContext, useEffect} from "react"
import Swal from "sweetalert2"
import Cookies from "js-cookie"

export const BarangContext = createContext()

Cookies.get('cart')

export const BarangProvider = props => {
    const [keranjang, setKeranjang] = useState([])
    const [barang, setBarang] = useState([])
    const [fetch, setFetch] = useState(true)

    useEffect(() => {
        const checkCookie = () => {
            if(Cookies.get('cart') !== undefined) {
                setKeranjang(JSON.parse(Cookies.get('cart')))
            }
        }
        if(fetch) {
            checkCookie()
            setFetch(false)
        }

    },[keranjang])

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
            Cookies.set('cart', JSON.stringify(newData))
            console.log("Berhasil Ditambahkan")
            successSwal("Berhasil Ditambahkan!")
        }else {
            let newData = keranjang
            let biaya = newData[loc].harga_rental
            newData[loc].kuantitas += 1
            newData[loc].harga_rental += biaya
            setKeranjang(newData)
            Cookies.set('cart', JSON.stringify(newData))
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
        <BarangContext.Provider value= {{keranjang, setKeranjang, barang, setBarang, fetch, setFetch, crud}}>
            {props.children}
        </BarangContext.Provider>
    )
}