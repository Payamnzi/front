import React from "react";
import "./Home.css";
import Features from "./../../features/Features";
import Chart from "../../chart/Chart";
import { aXisData } from "../../../Data";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="month sale" data={aXisData} dataKey="sale" />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
