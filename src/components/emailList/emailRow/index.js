import React from "react";
import { useHistory } from "react-router";
import "./EmailRow.css";
//? material import
import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";

const EmailRow = ({ id, title, description, subject, time }) => {
  const history = useHistory();
  return (
    <div className="emailRow" onClick={() => history.push("/mail")}>
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{title}</h3>
      <div className="emailRow_message">
        <h4>
          {subject} {" "}
          <span className="email_description">- {description}</span>
        </h4>
      </div>
      <div className="emailRow_time"> {time} </div>
    </div>
  );
};

export default EmailRow;
