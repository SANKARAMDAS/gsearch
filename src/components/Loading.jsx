import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="Puff" color="#00ff8c" height={550} width={80} />
  </div>
);
