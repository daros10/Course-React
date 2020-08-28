import React from 'react';
import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en <GifGridItem />', () => {
  const img = {
    title: 'Dbz',
    url: 'https://dbz.gif',
  };
  const wrapper = shallow(<GifGridItem img={img} />);

  test('Debe mostrar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener el titulo en la etiqueta <p></p>', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(img.title);
  });

  test('Debe obtener una img igual a la url', () => {
    const image = wrapper.find('img');
    expect(image.prop('src')).toBe(img.url);
    expect(image.prop('alt')).toBe(img.title);
  });

  test('El div debe tener animated fadeIn', () => {
    const div = wrapper.find('div');

    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
  });
});
