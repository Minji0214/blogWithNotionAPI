import React from "react";
import Link from "next/link";

export default function GNB() {
  return (
    <div className="fixed flex items-center bg-white shadow-md p-4">
      <p className="font-bold text-xl text-green-500 mr-8 filter drop-shadow(0 0 2px #4ca975) drop-shadow(0 0 5px #4ca975) drop-shadow(0 0 15px #4ca975)">
        개발 그리고 삶
      </p>
      <ul className="flex items-center gap-8">
        <li className="text-base filter drop-shadow(0 0 2px rgba(36, 255, 102, 0.7)) drop-shadow(0 0 5px rgba(36, 255, 102, 0.7)) drop-shadow(0 0 15px rgba(36, 255, 102, 0.7))">
          <Link href={"/tech"}>개발</Link>
        </li>
        <li className="text-base filter drop-shadow(0 0 2px rgba(36, 255, 102, 0.7)) drop-shadow(0 0 5px rgba(36, 255, 102, 0.7)) drop-shadow(0 0 15px rgba(36, 255, 102, 0.7))">
          <Link href={"/hobbies"}>취미</Link>
        </li>
        <li className="text-base filter drop-shadow(0 0 2px rgba(36, 255, 102, 0.7)) drop-shadow(0 0 5px rgba(36, 255, 102, 0.7)) drop-shadow(0 0 15px rgba(36, 255, 102, 0.7))">
          <Link href={"/about me"}>나에 대하여</Link>
        </li>
      </ul>
    </div>
  );
}
