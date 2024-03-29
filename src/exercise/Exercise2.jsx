import React, { useEffect, useState } from "react";

function Exercise2() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 2</h1>
      <Pagination from={1} to={5} />
    </div>
  );
}


function Pagination({ from, to }) {
  return (
    <div>
      <p>Страница: 1</p>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}

export default Exercise2;
