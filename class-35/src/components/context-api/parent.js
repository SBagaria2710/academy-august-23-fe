import React from 'react';

import Children from './children';

function Parent() {
  return (
    <div className='parent'>  
      <h2>Parent</h2>
      <Children />
    </div>
  );
}

export default Parent;