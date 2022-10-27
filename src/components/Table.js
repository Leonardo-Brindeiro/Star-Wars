import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data,
    handleNumb,
    handleclick,
    handleForInput,
    handleAllFilter,
    numb,
    filtes,
    mapeando, // a continuação da questão 6
    name,
    handlechange,
    selectionChange,
    selectionMaior } = useContext(AppContext);
  // ajuda do andre horman e julio silveira
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
        {mapeando.map((p, i) => (
          <option value={ p } key={ i }>{p}</option> // um modelo de option de maneira dinâmica ajuda do thierry
        ))}
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

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleAllFilter } // meu botão de  remover filtros
      >
        Remover Filtros
      </button>
      <ul>
        {filtes.map((p) => (
          <li
            key={ p.column }
            data-testid="filter"
          >
            {`${p.column}   ${p.maior}   ${p.numbe}`}
            <button
              type="button"
              onClick={ () => handleForInput(p) }
            >
              X
            </button>
          </li>
        ))}

      </ul>

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
