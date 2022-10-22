import { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchData from '../service/fetchApi';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [maior, setMaior] = useState('maior que');
  const [numb, setNumb] = useState('0');
  const [filtes, setFiltes] = useState([]);

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
  };
  const handleclick = useCallback(() => {
    console.log({ column, maior, numb });
    setFiltes([...filtes, { column, maior, numbe: numb }]);
  }, [column, filtes, maior, numb]);

  useEffect(() => {
    const requestAPI = async () => {
      const response = await fetchData();
      setData(response); //  essa função vai guardar o meu results que esta armazenado no meu  fetch api
    };
    requestAPI();
  }, []);

  const contexto = useMemo(() => ({
    data,
    name,
    column,
    maior,
    numb,
    filtes,
    handleclick,
    handlechange,
    selectionChange,
    selectionMaior,
    handleNumb,
  }), [data, name, column, maior, numb, filtes, handleclick]);

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
