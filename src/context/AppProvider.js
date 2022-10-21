import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchData from '../service/fetchApi';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const handlechange = ({ target }) => {
    setName(target.value);
  };

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
    handlechange,
  }), [data, name]);

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
