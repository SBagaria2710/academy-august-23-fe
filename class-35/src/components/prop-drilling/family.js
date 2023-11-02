import React from "react";

import Parent from "./parent";

function Family({ familyInfo }) {
  return (
    <div className="family">
      <Parent familyInfo={familyInfo} />
    </div>
  );
}

export default Family;
