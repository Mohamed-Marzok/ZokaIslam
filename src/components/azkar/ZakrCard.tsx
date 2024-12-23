import { useState } from "react";
import { IZakr } from "../../interfaces";

interface IProps {
  zakr: IZakr;
}

export default function ZakrCard({ zakr }: IProps) {
  const [count, SetCount] = useState<string>(zakr.count);

  const handleCounter = () => {
    if (+count > 1) {
      SetCount((prev) => String(+prev - 1));
    } else {
      SetCount("done");
    }
  };

  return (
    <div className="shadow-lg rounded-xl p-6 bg-background dark:bg-background-dark relative w-full max-w-xs">
      <p className="font-bold text-lg text-primary dark:text-accent h-36 overflow-auto">
        {zakr.content}
      </p>
      <p className="font-semibold text-sm text-neutral dark:text-neutral-dark mt-2">
        {zakr.description}
      </p>

      <button
        className={`w-full py-3 mt-6 rounded-lg text-white font-semibold transition-all duration-300 
          ${
            count === "done"
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-primary hover:bg-primary-dark active:bg-primary-dark cursor-pointer"
          }`}
        disabled={count === "done"}
        onClick={handleCounter}
      >
        {count === "done" ? "تم" : count}
      </button>
    </div>
  );
}
