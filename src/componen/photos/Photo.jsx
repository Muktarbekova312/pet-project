import React from 'react';

function Photo({ link, title }) {
  return (
    <figure className="photo">
      <img src={link} alt="" />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default Photo;
