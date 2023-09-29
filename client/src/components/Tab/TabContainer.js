import React, { useState } from 'react';

import './Tab.css';

const TabContainer = (props) => {
  const [categoryId, setCategoryId] = useState(1)
  // const queryParameters = new URLSearchParams(window.location.search);
  // const categoryId = queryParameters.get("entryStatus");
  const categoryClick = (id) => {
    setCategoryId(id);
    props.categoryClick(id);
  }
  return (
    <ul className="w-100 tab">
      {props.categories.map((category) => (
        <li
          className={`text-default ${category.id == categoryId && 'active'}`}
          key={category.id}
          onClick={() => categoryClick(category.id)}
        >
          <p className='m-0'>
            {category.name}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default TabContainer;