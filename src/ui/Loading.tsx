import { ThreeDots } from "react-loader-spinner";

interface LoadingProps {
  width?: string;
  color?: string;
}

function Loading({ width = "40px", color = "#ffffff" }: LoadingProps) {
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
