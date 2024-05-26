import React from "react";
import "./Features.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Features() {
  return (
    <div className="features">
      <div className="featureitem">
        <span className="featuretittle">revanue</span>
        <div className="featurecontainer">
          <span className="featuremoney">100 rial</span>
          <span className="featurerate">
            -11.4 <ArrowDownwardIcon className="featureicon negative" />
          </span>
        </div>
        <span className="faeturesub">compared to last month</span>
      </div>
      <div className="featureitem">
        <span className="featuretittle">Sales</span>
        <div className="featurecontainer">
          <span className="featuremoney">100 rial</span>
          <span className="featurerate">
            -1.4 <ArrowDownwardIcon className="featureicon negative" />
          </span>
        </div>
        <span className="faeturesub">compared to last month</span>
      </div>
      <div className="featureitem">
        <span className="featuretittle">Cost</span>
        <div className="featurecontainer">
          <span className="featuremoney">100 rial</span>
          <span className="featurerate">
            +3.2 <ArrowUpwardIcon className="featureicon " />
          </span>
        </div>
        <span className="faeturesub">compared to last month</span>
      </div>
    </div>
  );
}
