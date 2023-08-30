import { Link } from 'react-router-dom'
import "./Links.css"

export default function Links() {
  return (
      <nav>
        <ul className='links'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Tabelas'>Membros</Link></li>
        </ul>
      </nav>
  );
}