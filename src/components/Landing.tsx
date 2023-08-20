import React from "react";
import Image from "next/image";
export default function Landing() {
  const gridArray = Array(56).fill(0);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-7 gap-4 max-w-md">
        {gridArray.map((_, index) => {
          return (
            <div
              className="grid__item flex items-center justify-center h-16 w-16 bg-transparent opacity-0 transition-opacity duration-400"
              key={index}
            >
              <Image
                src={"/static/party.svg"}
                width={60}
                height={60}
                alt={""}
                className="text-green-500 filter drop-shadow(0 0 2px #4ca975) drop-shadow(0 0 5px #4ca975) drop-shadow(0 0 15px #4ca975)"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
