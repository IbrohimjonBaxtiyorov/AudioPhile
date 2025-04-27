import Product from "../product/Product";
import "./Main.css";
import desktop from "../../assets/images/top-desktop-air.png";
import tablet from "../../assets/images/top-tablet-air.png";
import mobile from "../../assets/images/top-mobile-air.png";
console.log(mobile);
export default function Main() {
  const productItems = {
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    img: { desktop, tablet, mobile },
  };
  return (
    <main className="main">
      <Product {...productItems} />
    </main>
  );
}
