import Image from "next/image";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="h-screen ">
      <Header />

      <div className="flex h-[46%] ">
        {/* right section  */}
        <div className="w-[60%] justify-center items-start m-24 pt-12 ">
          <h1 className="text-[40px] font-bold w-[496px] text-[#000000]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <br />
          <p className="text-3xl font-medium leading-[48px] w-[798px] h-[144px]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <br />
          <button className="text-3xl font-medium text-[#FFFFFF] bg-[#A29875] border-2 w-[247px] h-[49px] rounded-lg p-12px ">
            Explore Now
          </button>
        </div>
        <div className="w-[40%] flex items-center justify-center p-[120px] ml-[-210px] mt-48 ">
          {/* left section  */}
          <Image src={"/images/img.png"} alt="image" width={422} height={574} />
        </div>
      </div>
    </div>
  );
}
