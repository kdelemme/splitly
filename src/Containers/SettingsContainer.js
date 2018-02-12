import React from "react";
import Settings from "../Settings";

export const SettingsContainer = () => {
  const currencies = [
    { name: "USD", symbol: "$" },
    { name: "EUR", symbol: "€" },
    { name: "AUD", symbol: "A$" },
    { name: "GBP", symbol: "£" }
  ];
  return (
    <div className="row pt-5">
      <div className="col-12 col-md-4">
        <Settings currencies={currencies} />
      </div>
    </div>
  );
};
