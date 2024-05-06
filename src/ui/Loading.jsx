import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading({ width, color = "#ffffff" }) {
  return (
    <div className="flex justify-center items-center h-full">
      <ThreeDots
        visible={true}
        height={width}
        width={width}
        color={color}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
