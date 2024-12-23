import { useMemo } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../store/store";
import ZakrCard from "./ZakrCard";
import { CircularProgress } from "@mui/material";

export default function AllCards() {
  const azkar = useSelector((state: TState) => state.azkar.azkar);
  const active = useSelector((state: TState) => state.azkar.active);

  const azkarTsx = useMemo(() => {
    return azkar && azkar[active]
      ? azkar[active].map((zakr, index) => (
          <ZakrCard key={`${zakr.count}-${index}`} zakr={zakr} />
        ))
      : [];
  }, [azkar, active]);

  return (
    <div
      className={`flex w-screen ${
        azkar ? "items-start" : "items-center"
      } justify-center min-h-screen`}
    >
      {azkar ? (
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {azkarTsx}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
