import { Skeleton } from "antd";

export default function Loader() {
  return (
    <div className="w-[100%] min-h-[60vh] p-[30px]">
      <Skeleton active />
    </div>
  );
}
