import React from "react";
import Settings from "../Settings";

export const SettingsContainer = () => {
  const currencies = ["USD", "EUR", "AUD", "GBP"];
  return (
    <div className="row pt-5">
      <div className="col-12 col-md-4">
        <Settings currencies={currencies} />
      </div>
    </div>
  );
};
