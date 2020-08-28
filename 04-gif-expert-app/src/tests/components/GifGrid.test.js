import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';

import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en componente GifGrid', () => {
  const category = 'Rick and Morty';

  test('Deberia mostar el componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se hace la llamada con el useFetchGifs', () => {
    // creo un mock del useFetchGifs

    const gifs = [
      {
        id: 'abc',
        title: 'dbz',
        url: 'https://localhost/dbz.gif',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
