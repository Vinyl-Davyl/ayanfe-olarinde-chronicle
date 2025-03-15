import Image from "next/image";
import SeeAllWorks from "../see-all-works";

const RentRow = () => {
  return (
    <div className="grid grid-cols-2 p-10 gap-10 mt-32 pb-40">
      <div>
        <div className="w-full">
          <Image
            src={"/AO30.jpg"}
            alt="Art female"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="py-10 space-y-[2vw]">
        <h1
          className="text-[4.5vw] leading-none"
          style={{
            fontFamily: "SaolDisplay",
          }}
        >
          Rent Ayanfe Olarinde&apos;s art and transform your interiors
        </h1>
        <p className="text-[1.3vw] uppercase leading-tight text-white/50">
          Ayanfe Olarinde offers an exclusive collection of artworks available for rent, perfect for hotels and
          renovation professionals looking to add a touch of elegance and distinction to any space.
        </p>
        <SeeAllWorks value="rent now" />
      </div>
    </div>
  );
};

export default RentRow;
