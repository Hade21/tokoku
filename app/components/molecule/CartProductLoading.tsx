import React from "react";

const CartProductLoading: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2 bg-slate-200 p-6">
      <section className="rounded-md bg-white px-4 py-6">
        <div className="flex animate-pulse justify-between gap-4">
          <div className="img-sect min-h-[15vw] min-w-[25%] rounded-md bg-slate-300"></div>
          <div className="desc-sect flex flex-1 flex-col justify-center space-y-2">
            <span className="h-full w-1/2 rounded-md bg-slate-300"></span>
            <span className="h-full w-full rounded-md bg-slate-300"></span>
            <span className="h-full w-5/6 rounded-md bg-slate-300"></span>
            <span className="h-full w-11/12 rounded-md bg-slate-300"></span>
          </div>
          <div className="min-w-[10%]"></div>
          <div className="action-sect flex min-w-[10%] items-center">
            <span className="h-10 w-full rounded-md bg-slate-300"></span>
          </div>
        </div>
      </section>
      <section className="rounded-md bg-white px-4 py-6">
        <div className="flex animate-pulse justify-between gap-4">
          <div className="img-sect min-h-[15vw] min-w-[25%] rounded-md bg-slate-300"></div>
          <div className="desc-sect flex flex-1 flex-col justify-center space-y-2">
            <span className="h-full w-1/2 rounded-md bg-slate-300"></span>
            <span className="h-full w-full rounded-md bg-slate-300"></span>
            <span className="h-full w-5/6 rounded-md bg-slate-300"></span>
            <span className="h-full w-11/12 rounded-md bg-slate-300"></span>
          </div>
          <div className="min-w-[10%]"></div>
          <div className="action-sect flex min-w-[10%] items-center">
            <span className="h-10 w-full rounded-md bg-slate-300"></span>
          </div>
        </div>
      </section>
      <section className="rounded-md bg-white px-4 py-6">
        <div className="flex animate-pulse justify-between gap-4">
          <div className="img-sect min-h-[15vw] min-w-[25%] rounded-md bg-slate-300"></div>
          <div className="desc-sect flex flex-1 flex-col justify-center space-y-2">
            <span className="h-full w-1/2 rounded-md bg-slate-300"></span>
            <span className="h-full w-full rounded-md bg-slate-300"></span>
            <span className="h-full w-5/6 rounded-md bg-slate-300"></span>
            <span className="h-full w-11/12 rounded-md bg-slate-300"></span>
          </div>
          <div className="min-w-[10%]"></div>
          <div className="action-sect flex min-w-[10%] items-center">
            <span className="h-10 w-full rounded-md bg-slate-300"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartProductLoading;
