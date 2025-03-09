import React from 'react';

function Avatar({ color }) {
  return (
    <div
      className="avatar"
      style={{
        backgroundColor: 'black',
        width: 150,
        height: 150,
        borderRadius: '50%',
        transition: 'background-color 0.3s ease',
      }}
    />
  );
}

export default Avatar;
