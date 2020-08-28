import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas al hook useFetchGifs', () => {
  test('Debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Rick and Morty')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Debe retornar un arreglo de imagenes y el loading en false ', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Rick and Morty')
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toEqual(13);
    expect(loading).toBe(false);
  });
});
