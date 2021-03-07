import React from "react";
import { useHistory } from "react-router";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  ExitToAppSharp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@material-ui/icons";

const Mail = () => {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail-toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

<div className="mail_body">
    <div className="mail_bodyHeader">
        <h2>subject</h2>
        <LabelImportant className="mail_important"/>
        <p>Title</p>
        <p>10pm</p>
    </div>
    <div className="mail_message">
        <p>this is the message! </p>
    </div>
</div>
    </div>
  );
};
export default Mail;
