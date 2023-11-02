import React, { useContext } from 'react';
import { FamilyContext } from './FamilyContext';

function Granddaughter() {
  const contextInfo = useContext(FamilyContext);
  return (
    <div className='gdaughter'>Granddaughter {contextInfo.familyName}</div>
  );
}

export default Granddaughter;