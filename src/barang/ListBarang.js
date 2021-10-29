import { useState, useEffect } from "react";
import api from "../api.js";
import FormBarang from './FormBarang.js'

function ListBarang() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await api.get("/barang");
      setDatas(request.data);
    }
    getData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Barang</th>
            <th scope="col">Tipe Barang</th>
          </tr>
          {datas.map((items, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{items.nama_barang}</td>
              <td>{items.tipe_barang}</td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
      <FormBarang />
    </div>
  );
}

export default ListBarang;
