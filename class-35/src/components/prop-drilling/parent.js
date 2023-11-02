import React from 'react';

import Children from './children';

function Parent({ familyInfo }) {
  console.log("In Parent Component:", familyInfo);
  const { onlyForParents } = familyInfo;
  onlyForParents()
  return (
    <div className='parent'>  
      <h2>Parent</h2>
      <Children familyInfo={familyInfo} />
    </div>
  );
}

export default Parent;