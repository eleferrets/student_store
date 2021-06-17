//import { listProducts } from "../../../../student-store-api/models/store";
import AddProduct from "../AddProduct/AddProduct";
import StoreActivity from "../StoreActivity/StoreActivity";
import Intro from "../Intro/Intro";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <Intro />
      {/* <AddProduct /> */}
      <StoreActivity />
    </div>
  );
}
