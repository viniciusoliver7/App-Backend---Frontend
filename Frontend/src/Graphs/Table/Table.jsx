import { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";

export default function Table() {
  const [dados, setDados] = useState([]);

  async function fetchData() {
    await axios
      .get("http://54.91.65.106/members?limit=null&orderby=asc")
      .then((response) => {
        setDados(response.data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="box-table">
        <h2 className="title">Membros</h2>
        <div className="tabela">
          <table className="tabela-style">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Empresa</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item) => (
                <tr key={item.Name}>
                  <td>{item.Name}</td>
                  <td>{item.Role}</td>
                  <td>{item.Companies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
