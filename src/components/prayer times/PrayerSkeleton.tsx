import { Skeleton } from "@mui/material";

export default function PrayerSkeleton() {
  const arr = Array.from({ length: 6 });
  return (
    <div className=" grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5 items-center justify-center ">
      {arr.map((_, i) => (
        <div key={i}>
          <Skeleton animation="wave" height={200} />
          <Skeleton animation="wave" width={70} height={30} />
          <Skeleton animation="wave" width={100} height={35} />
        </div>
      ))}
    </div>
  );
}
