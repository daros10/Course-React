import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {category} </h3>
      <div className='card-grid'>
        {loading && (
          <p className='animate__animated animate__flash'>Loading...</p>
        )}
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} img={img} />
          ))}
        </ol>
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
