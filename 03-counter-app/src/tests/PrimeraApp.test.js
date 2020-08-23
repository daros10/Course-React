import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  // test('Debe de mostrar el mensjae "Hola mundo" ', () => {
  //   const saludo = 'Hola mundo';
  //   const wrapper = render(<PrimeraApp saludo={saludo} />);

  //   expect(wrapper.getByText(saludo)).toBeInTheDocument();
  // });

  test('Debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola mundo';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el subtitulo enviado por props ', () => {
    const saludo = 'Hola mundo';
    const subtitulo = 'Soy un subtitulo';
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
