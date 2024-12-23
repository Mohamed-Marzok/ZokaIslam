import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPuplicAzkar } from "../store/azkarSlice";
import { TDispatch } from "../store/store";
import SideBar from "../components/azkar/SideBar";
import AllCards from "../components/azkar/AllCards";
import HeaderForPhone from "../components/azkar/HeaderForPhone";

export default function Azkar() {
  const dispath: TDispatch = useDispatch();
  useEffect(() => {
    dispath(getPuplicAzkar());
  }, []);
  return (
    <div className=" flex flex-col lg:flex-row relative ">
      <SideBar />
      <HeaderForPhone />
      <AllCards />
    </div>
  );
}
