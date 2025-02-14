import React from "react";

const RoundOne = () => {
  return (
    <div>
      {/* 1 */}
      <div className="w-96 h-96 rounded-full absolute top-0 -left-10">
        <div className="w-full h-full relative animate-spin-slow">
          <div className="w-32 h-32 rounded-full bg-designColor absolute top-0 blur-xl"></div>
          <div className="w-24 h-24 rounded-full bg-green-600 absolute -bottom-10 left-16 blur-xl"></div>
          <div className="w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl"></div>
        </div>
      </div>
      {/* 2 */}
      <div className="w-[500px] h-[500px] rounded-full absolute bottom-0 right-32">
        <div className="w-full h-full relative animate-spin-slow">
          <div className="w-52 h-52 rounded-full bg-designColor absolute top-0 blur-2xl"></div>
          <div className="w-24 h-24 rounded-full bg-green-600 absolute -bottom-10 left-16 blur-xl"></div>
          <div className="w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl"></div>
        </div>
      </div>
      {/* 3 */}
      <div className="w-96 h-96 rounded-full absolute top-72 left-72">
        <div className="w-full h-full relative animate-reverse-spin">
          <div className="w-32 h-32 rounded-full bg-gray-400 absolute top-0 blur-xl"></div>
          <div className="w-24 h-24 rounded-full bg-slate-500 absolute -bottom-10 left-16 blur-xl"></div>
          <div className="w-28 h-28 rounded-full bg-blue-600 absolute top-32 -right-10 blur-2xl"></div>
        </div>
      </div>

      {/* 4 */}
      <div className="w-[800px] h-[800px] rounded-full absolute top-0 left-1/3">
        <div className="w-full h-full relative animate-reverse-spin">
          <div className="w-40 h-40 rounded-full bg-designColor absolute top-10 right-0 blur-3xl"></div>
          <div className="w-52 h-52 rounded-full bg-gradient-to-t from-orange-700 to-lime-600 absolute -bottom-10 left-16 blur-3xl"></div>
          <div className="w-28 h-28 rounded-full bg-blue-600 absolute bottom-32 right-20 blur-2xl"></div>
          <div className="w-28 h-28 rounded-full bg-blue-600 absolute top-0 -right-10 blur-2xl"></div>
        </div>
      </div>
      {/* 5 */}
      <div className="w-96 h-96 rounded-full absolute bottom-0 -left-10">
        <div className="w-full h-full relative animate-reverse-spin">
          <div className="w-24 h-24 rounded-full bg-yellow-500 absolute -bottom-10 left-16 blur-xl"></div>
          <div className="w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default RoundOne;
