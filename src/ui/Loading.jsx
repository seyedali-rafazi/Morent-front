import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loading({ width }) {
  return (
    <div className="flex justify-center items-center h-full">
      <ThreeDots
        visible={true}
        height={width}
        width={width}
        color="#ffffff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
