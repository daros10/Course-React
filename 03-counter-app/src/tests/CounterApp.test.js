import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  // Lo inicializo aqui tb para no perder el intelisense del wraper
  // finalizada la prueba como buena practica solo deberia estar
  // definida en el beforeach
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    //BeforeEach se ejecuta antes de tealizar cada llamada a las pruebas.
    // invocandolo aqui se reinicia en cada llamada de las pruebas
    // el componente.
    // Es como si en cada prueba emperaza por primera vez.
    wrapper = shallow(<CounterApp />);
  });

  test('Debe mostrar CounterApp con sus valores por defecto ', () => {
    const valorDefecto = 10;
    const valorh2 = wrapper.find('h2').text().trim();
    const valorh2number = parseInt(valorh2);

    expect(wrapper).toMatchSnapshot();
    expect(valorh2number).toBe(valorDefecto);
  });

  test('Debe mostrar el valor por defecto 100', () => {
    const valorDefecto = 100;
    const wrapper = shallow(<CounterApp value={valorDefecto} />);
    const tagH2 = wrapper.find('h2').text().trim();
    const tagH2Number = parseInt(tagH2);

    expect(tagH2Number).toBe(100);
  });

  // SUMLAR EVENTOS EN LAS TEST
  test('Debe de incrementar con el boton+1', () => {
    wrapper.find('button').at(0).simulate('click'); // accedo al boton en posicion 0 // ya que no tienen ID
    const tagH2Counter = wrapper.find('h2').text().trim();

    expect(tagH2Counter).toBe('11');
  });

  test('Debe de decrementar con el boton-1', () => {
    wrapper.find('button').at(2).simulate('click'); // accedo al boton en posicion 2 // ya que no tienen ID
    const tagH2Counter = wrapper.find('h2').text().trim();

    expect(tagH2Counter).toBe('9');
  });

  test('Debe resetear a 10', () => {
    wrapper.find('button').at(0).simulate('click'); // simulo que hago un add
    wrapper.find('button').at(1).simulate('click'); // reseteo al valor por defecto que es 10
    const tagH2Counter = wrapper.find('h2').text().trim();

    expect(tagH2Counter).toBe('10');
  });
});
