import Image from "next/image";
import dashboard from "public/projects/erp/dashboard.png";

export default function ErpGraphic() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-black/5 bg-[#eef3f7]">
      <Image
        src={dashboard}
        alt="ERP dashboard placeholder"
        width={1600}
        height={1000}
        sizes="(max-width: 768px) 100vw, 700px"
      />
    </div>
  );
}
