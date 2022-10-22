import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data,
    handleNumb,
    handleclick,
    numb,
    filtes,
    name,
    handlechange,
    selectionChange,
    selectionMaior } = useContext(AppContext);
  // ajuda do andre horman e julio severo
  const handlefilter = (planets) => {
    let planetaFilt = planets;
    filtes.forEach(({ column, maior, numbe }) => {
      if (maior === 'maior que') {
        planetaFilt = planetaFilt.filter((planeta) => (
          Number(planeta[column]) > Number(numbe)));
      } else if (maior === 'menor que') {
        planetaFilt = planetaFilt.filter((planeta) => (
          Number(planeta[column]) < Number(numbe)));
      } else {
        planetaFilt = planetaFilt.filter((planeta) => (
          Number(planeta[column]) === Number(numbe)));
      }
    });
    return planetaFilt;
  };

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>

      <input // Ajuda de valéria, raphael pacheco e o roberth.
        type="text"
        data-testid="name-filter"
        onChange={ handlechange } // não posso esquecer do meu handlechange para mudança de estado
      />
      <select
        data-testid="column-filter"
        onChange={ selectionChange } // mesmo modelo de código do projeto tryunfo
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ selectionMaior }// mesmo modelo de código do projeto tryunfo
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ numb }
        onChange={ handleNumb }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleclick }
      >
        Filtrar
      </button>
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
        {handlefilter(data)?.filter((el) => el.name.includes(name)).map((p) => (
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
