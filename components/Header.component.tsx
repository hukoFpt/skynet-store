import React from "react";
import Image from "next/image";

import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between bg-slate-200 pt-4 pb-2 px-48 border-b border-slate-300">
        <div className="flex items-center mb-1">
          <BsTelephone size={16} />
          <span className="ml-1 text-sm font-roboto">
            Gọi mua hàng:{" "}
            <span className="font-bold">0932 001 855 - Mr. Nhật</span>
          </span>
        </div>
        <div className="flex items-center mb-1">
          <LuMapPin size={18} />
          <span className="ml-1 text-sm font-roboto">
            Địa chỉ:{" "}
            <span className="font-bold">
              71 Nguyễn Cư Trinh, Phường 1, TP. Sa Đéc, Đồng Tháp
            </span>
          </span>
        </div>
      </div>
      <div className="flex">
        <Image src="/logo-red.png" alt="logo" width={50} height={50} />
        <div className="relative flex flex-col items-center ml-1 pt-1">
          <div className="font-roboto font-bold text-2xl tracking-widest text-red-600">
            SKYNET STORE
          </div>
          <div className="absolute font-roboto font-medium italic text-xs top-7 text-indigo-900">
            PC Gaming Giá Rẻ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
