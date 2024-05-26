import React from "react";
import "./WidgetLg.css";
import { transAction } from "../../Data";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lates TransAction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transAction.map((transAction) => (
          <tr key={transAction.id} className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={transAction.img} className="widgetLgImg" />
              <span className="widgetLgName">{transAction.customer}</span>
            </td>
            <td className="widgetLgDate">{transAction.date}</td>
            <td className="widgetLgAmout">{transAction.amout}</td>
            <td className="widgetLgStatus">
              <Button type={transAction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
