import React, { useState, useEffect } from "react";
import ApiData from "./apiData/ApiData";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container overflow-hidden">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="row g-3 m-2">
          {/* - */}
          <ApiData
            limit={[
              { id: 475742805 },
              { id: 521792436 },
              { id: 511682423 },
              { id: 513358450 },
              { id: 519930549 },
              { id: 502769004 },
            ]}
          />
          {/* - */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
