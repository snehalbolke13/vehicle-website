import React from "react";

type ToastProps = {
  type: "success" | "error" | "info";
  message: string;
};

const Toast = ({ type, message }: ToastProps) => {
  const colorMap = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <div className={`p-4 rounded shadow ${colorMap[type]}`}>{message}</div>
  );
};

export default Toast;
