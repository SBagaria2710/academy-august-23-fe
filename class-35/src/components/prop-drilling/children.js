import React from "react";

import Grandson from "./grandson";
import Granddaughter from "./granddaughter";

function Children({ familyInfo }) {
  return (
    <div className="children">
      <h2>Children</h2>
      <Grandson familyInfo={familyInfo} />
      <Granddaughter familyInfo={familyInfo} />
    </div>
  );
}

export default Children;
