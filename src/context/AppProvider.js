import { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchData from '../service/fetchApi';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [maior, setMaior] = useState('maior que');
  const [numb, setNumb] = useState('0');
  const [filtes, setFiltes] = useState([]);
  const [mapeando, setMapeando] = useState(['population', // ajuda do thyerri
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [column, setColumn] = useState(mapeando[0]); // ele vai mapear apartir do primeiro elemento do array

  const handlechange = ({ target }) => {
    setName(target.value);
  };
  const selectionChange = ({ target }) => {
    setColumn(target.value);
  };
  const selectionMaior = ({ target }) => {
    setMaior(target.value);
  };
  const handleNumb = ({ target }) => {
    setNumb(target.value);
  };// o use  callback é muito útil para evitar renderizações desnessesárias, pois é bom usar até mesmo na função de click
  const handleclick = useCallback(() => {
    setFiltes([...filtes, { column, maior, numbe: numb }]);
    setMapeando(mapeando.filter((el) => el !== column)); // ajuda do thierry usando o map, pra poder tirar
  }, [column, filtes, maior, numb, mapeando]); //  os valores da caixa conforme o readme, tudo isso no  mesmo botão de filtrar

  useEffect(() => {
    const requestAPI = async () => {
      const response = await fetchData();
      setData(response); //  essa função vai guardar o meu results que esta armazenado no meu  fetch api
    };
    requestAPI();
  }, []);
  // use memo é pra nunca dar problemas de lint
  const contexto = useMemo(() => ({
    data,
    name,
    column,
    maior,
    numb,
    filtes,
    mapeando,
    handleclick,
    handlechange,
    selectionChange,
    selectionMaior,
    handleNumb,
    setMapeando,
  }), [data, name, column, maior, numb, filtes, mapeando, handleclick]);

  return (
    <AppContext.Provider value={ contexto }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
