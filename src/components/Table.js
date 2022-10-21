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
        {data?.filter((el) => el.name.includes(name)).map((ronaldo) => (
          <tr key={ ronaldo.name }>
            <td>{ronaldo.name}</td>
            <td>{ronaldo.rotation_period}</td>
            <td>{ronaldo.orbital_period}</td>
            <td>{ronaldo.diameter}</td>
            <td>{ronaldo.climate}</td>
            <td>{ronaldo.gravity}</td>
            <td>{ronaldo.terrain}</td>
            <td>{ronaldo.surface_water}</td>
            <td>{ronaldo.population}</td>
            <td>{ronaldo.films}</td>
            <td>{ronaldo.created}</td>
            <td>{ronaldo.edited}</td>
            <td>{ronaldo.url}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
