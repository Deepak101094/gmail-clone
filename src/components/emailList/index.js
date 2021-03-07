import React from "react";
import "./EmailList.css";
import Sections from "./sections";
import EmailRow from "./emailRow";
//? material import
import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Sections Icon={Inbox} title="primary" color="red" selected />
        <Sections Icon={People} title="Social" color="#1A73E8" />
        <Sections Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList_list">
        <EmailRow
          title="Twitch"
          subject="this is test mood"
          description="hey this is description"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
