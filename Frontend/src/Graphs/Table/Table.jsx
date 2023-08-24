import MockData from "../../../MockData.json";
import "./Table.css"

export default function Table() {
  const dados = MockData;

  return (
    <div className="tabela">
    <table className="tabela-style">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Endereço</th>
          <th>CEP</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>{item.postalZip}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
