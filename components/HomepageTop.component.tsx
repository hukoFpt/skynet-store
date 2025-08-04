import { CategoryMenu } from "./CategoryMenu.component";
import Image from "next/image";

const HomepageTop = () => {
  return (
    <div className="flex pt-4 gap-4">
      <div className="relative w-[268px] border border-neutral-200 rounded-lg overflow-hidden">
        <CategoryMenu icon="laptop" title="Laptop" />
        <CategoryMenu icon="desktop" title="PC - Máy Tính Để Bàn" />
        <CategoryMenu icon="graphic-card" title="VGA - Card Đồ Họa" />
        <CategoryMenu icon="cpu" title="CPU - Bộ Xử Lý" />
        <CategoryMenu icon="motherboard" title="Mainboard - Bo Mạch Chủ" />
        <CategoryMenu icon="ram" title="RAM - Bộ Nhớ Trong" />
        <CategoryMenu icon="drive" title="Drive - Bộ Nhớ Ngoài" />
        <CategoryMenu icon="psu" title="PSU - Nguồn Máy Tính" />
        <CategoryMenu icon="fan" title="Fan - Quạt Tản Nhiệt" />
        <CategoryMenu icon="case" title="Case - Vỏ Máy Tính" />
        <CategoryMenu icon="lcd" title="LCD - Màn Hình" />
        <CategoryMenu icon="kmh" title="Phím, Chuột, Tai Nghe" />
        <CategoryMenu icon="dac" title="Bàn, Ghế" />
        <CategoryMenu icon="accessory" title="Phụ Kiện Khác" />
        <CategoryMenu icon="old" title="Linh Kiện Cũ" />
      </div>
      <div className="flex-1">
        <Image className="rounded-lg drop-shadow-lg" src="/Banner/NetConstructor.png" alt="Thi công phòng máy" width={920} height={496} />
      </div>
    </div>
  );
};

export default HomepageTop;
