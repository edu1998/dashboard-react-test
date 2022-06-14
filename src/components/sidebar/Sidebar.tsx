import React, { FC } from 'react';
import  './sidebar.css';
import ActionButton from "../actionButton/ActionButton";
import {TbLayoutGrid, TbClipboardText} from "react-icons/tb";
import {IoCubeOutline} from "react-icons/io5";
import {IoIosLogOut} from "react-icons/io";
import {FiMessageCircle} from "react-icons/fi";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => (
  <div className="sidebar">
      <div className="sidebar_logo">
          <div className="sidebar_logo_image" />
      </div>
      <div className="sidebar_actions">
          <div className="sidebar_actions_list">
              <ActionButton active Icon={TbLayoutGrid} />
              <ActionButton Icon={TbClipboardText}/>
              <ActionButton Icon={IoCubeOutline}/>
              <ActionButton Icon={FiMessageCircle}/>
          </div>
      </div>
      <div className="sidebar_user_actions">
          <div className="profile_img">A</div>
          <span className="profile_label">My Profile </span>
          <br/><br/>
          <ActionButton Icon={IoIosLogOut} />
      </div>
  </div>
);

export default Sidebar;
