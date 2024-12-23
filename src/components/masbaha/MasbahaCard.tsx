import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function MasbahaCard() {
  const [count, setCount] = useState<number>(
    Number(localStorage.getItem("count"))
  );
  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);
  return (
    <div className="shadow-xl w-96 h-96 flex flex-col items-center justify-center gap-3 mt-16 rounded-2xl">
      <p className="font-bold text-9xl texts text-neutral dark:text-neutral-dark">
        {count}
      </p>
      <div className="flex gap-8">
        <Button
          variant="contained"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </Button>
        <Button variant="outlined" color="error" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
}
