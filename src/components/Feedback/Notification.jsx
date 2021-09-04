import React from "react";
import { Notifications } from "./Notification.styled";

export const Notification = ({ message }) => {
  return <Notifications>{message}</Notifications>;
};
