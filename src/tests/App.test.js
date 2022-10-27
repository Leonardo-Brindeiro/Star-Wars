import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData';
import renderWithContext from './renderWithContext';
import { act } from 'react-dom/test-utils';
// testes realizados com ajuda do richard que estava na sala de estudos  
describe('Testando a chamada da Api', () => {

test('Verifica inputs e botoes', async () => {
    global.fetch = jest.fn (() => 
        Promise.resolve({
            json: () => Promise.resolve( testData ),
        })
    )
            
    await act(async () => {
        renderWithContext(<App />);
      })
// ele vai pegar todo o meu estado global 

    const name = screen.getByTestId('name-filter') //
     expect(name).toBeInTheDocument();

     const escolha = screen.getByTestId('column-filter')
     expect(escolha).toBeInTheDocument();

     const compare = screen.getByTestId('comparison-filter')
     expect(compare).toBeInTheDocument();

     const valores = screen.getByTestId('value-filter')
     expect(valores).toBeInTheDocument();

     const filtros = screen.getByRole('button', {
        name: /filtrar/i
      })

      expect(filtros).toBeInTheDocument();

      const inputName = await screen.findByRole('textbox')
      userEvent.type(inputName,"t")

     const planetName = await screen.findByRole('cell', {
        name: /tatooine/i
      })
      expect(planetName).toBeInTheDocument();
      userEvent.clear(inputName)

      userEvent.selectOptions(escolha,["population"])
      expect(escolha).toHaveValue("population")

      userEvent.selectOptions(escolha,["orbital_period"])
      expect(escolha).toHaveValue("orbital_period")

      userEvent.selectOptions(escolha,["diameter"])
      expect(escolha).toHaveValue("diameter")

      userEvent.selectOptions(escolha,["rotation_period"])
      expect(escolha).toHaveValue("rotation_period")
      
      userEvent.selectOptions(compare,["maior que"])
      expect(compare).toHaveValue("maior que")

      userEvent.selectOptions(compare,["menor que"])
      expect(compare).toHaveValue("menor que")

      userEvent.selectOptions(compare,["igual a"])
      expect(compare).toHaveValue("igual a")

              
      userEvent.type(valores,"0")
      userEvent.click(filtros)
    
      waitFor(()=>expect(screen.getAllByRole("row")).toHaveLength(8))

      //Sempre que eu for dar um click para verificar a requisição de uma api 
      //a resposta precisa comecar com waitfor, porque é assincrona. tem haver com o tempo 
      //Tohavelengh serve para ver a quantidade de algo   
      // getallBy role para todas as linhas  
      //row linhas  
      
      userEvent.selectOptions("maior que")
      
      userEvent.selectOptions("menor que")
     
  })


})

  




