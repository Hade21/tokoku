import React from "react";

const Loading = () => {
  return (
    <div className="animate-pulse">
      <div className="h-40 w-full rounded-md bg-slate-300">
        <div className="h-full w-full rounded-md bg-slate-300"></div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="h-6 w-1/2 rounded-md bg-slate-300"></div>
        <div className="h-6 w-1/3 rounded-md bg-slate-300"></div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="h-6 w-1/2 rounded-md bg-slate-300"></div>
        <div className="h-6 w-1/3 rounded-md bg-slate-300"></div>
      </div>
    </div>
  );
};

export default Loading;
