import {useState, createContext} from "react"

export const KeranjangContext = createContext()

export const KeranjangProvider = props => {
    const [keranjang, setKeranjang] = useState([])

    const tambahKeranjang = (e) => {
        e.preventDefault()
        let idBarang = e.target.value

        let insert = keranjang.map((arr) => {return arr.id}).indexOf(idBarang)

        if(insert === -1) {
            let newData = [...keranjang, {id: idBarang, kuantitas: 1}]
            setKeranjang(newData)
            console.log("Berhasil Ditambahkan")
        }else {
            let newData = keranjang
            newData[insert].kuantitas += 1
            setKeranjang(newData)
            console.log("Update Berhasil")
        }
    }
    const crud = {
        tambahKeranjang
    }

    return(
        <KeranjangContext.Provider value= {{keranjang, setKeranjang, crud}}>
            {props.children}
        </KeranjangContext.Provider>
    )
}