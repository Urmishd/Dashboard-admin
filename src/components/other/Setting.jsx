import React from "react";

const Setting = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: "30px",
        bottom: "30px",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        backgroundColor: "#ff9b44",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <i className="fas fa-cog fa-spin text-white fs-4"></i>
    </div>
  );
};

export default Setting;
