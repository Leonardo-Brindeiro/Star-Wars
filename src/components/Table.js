import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data, name, handlechange } = useContext(AppContext);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>

      <input // Ajuda de valéria, raphael pacheco e o roberth.
        type="text"
        data-testid="name-filter"
        onChange={ handlechange } // não posso esquecer do meu handlechange para mudança de estado
      />

      <table>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
        {data?.filter((el) => el.name.includes(name)).map((p) => (
          <tr key={ p.name }>
            <td>{p.name}</td>
            <td>{p.rotation_period}</td>
            <td>{p.orbital_period}</td>
            <td>{p.diameter}</td>
            <td>{p.climate}</td>
            <td>{p.gravity}</td>
            <td>{p.terrain}</td>
            <td>{p.surface_water}</td>
            <td>{p.population}</td>
            <td>{p.films}</td>
            <td>{p.created}</td>
            <td>{p.edited}</td>
            <td>{p.url}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
