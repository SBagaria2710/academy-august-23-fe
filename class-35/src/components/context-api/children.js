import React, { useContext } from "react";
import { FamilyContext } from "./FamilyContext";

import Grandson from "./grandson";
import Granddaughter from "./granddaughter";

function Children() {
  const contextInfo = useContext(FamilyContext);
  return (
    <div className="children">
      <h2>Children {contextInfo.familyName}</h2>
      <Grandson />
      <Granddaughter />
    </div>
  );
}

export default Children;
