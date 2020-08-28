import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../../GifExpertApp';

describe('Pruebas al componente GifExpertApp', () => {
  test('Deberia renderizar el componente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Deberia mostrar una lista de categorias', () => {
    const defaultCategories = ['Rick and Morty', 'Dragon Ball'];
    const wrapper = shallow(
      <GifExpertApp defaultCategories={defaultCategories} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
  });
});
