import React from "react";
import "./WidgetSm.css";
import { newUser } from "../../Data";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetsmTitle">New join members</span>
      <ul className="widgetSmList">
        {newUser.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.img} className="widgetSmImg" />
            <div className="widgetSmDetail">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
