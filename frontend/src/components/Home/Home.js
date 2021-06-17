//import { listProducts } from "../../../../student-store-api/models/store";
import AddProduct from "../AddProduct/AddProduct"
import StoreActivity from "../StoreActivity/StoreActivity"
import "./Home.css"

export default function Home() {

  return (
    <div className="Home">
      <AddProduct />
      <StoreActivity  />
    </div>
  )
}
