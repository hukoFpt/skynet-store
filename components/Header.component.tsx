import React from "react";
import Image from "next/image";

import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="hidden lg:flex justify-between bg-slate-100 pt-4 pb-2 lg:px-48 border-b border-slate-300">
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
      <div className="flex justify-between items-center lg:px-48 pt-6">
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
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-red-600 rounded-full bg-white">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="outline-none w-96 font-roboto text-sm bg-transparent px-3 py-2"
            />
            <button className="ml-2 text-white bg-red-600 rounded-r-full px-3 py-2 font-roboto text-sm">
              <IoSearch size={20} />
            </button>
          </div>
          <FaFacebook size={40} className="text-blue-600 cursor-pointer" />
          <FaTiktok size={40} className="text-white rounded-full bg-black p-2 cursor-pointer" />
        </div>
        <div>
          <div className="flex relative items-center space-x-2 cursor-pointer">
            <IoMdCart size={40} className="text-indigo-900 m-2" />
            <span className="font-roboto text-sm font-light">Giỏ hàng</span>
            <span className="h-7 w-7 absolute bg-red-600 border-3 text-white text-xs text-center rounded-full px-2 py-0.5 ml-1 font-medium top-0 left-4">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
