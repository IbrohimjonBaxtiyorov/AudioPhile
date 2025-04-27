import Product from "../product/Product";
import "./Main.css";
import  desktop from "../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
console.log(desktop);

export default function Main() {
  const productItems = {
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    img:desktop
  };
  return (
    <main className="main">
      <Product
        {...productItems}
      />
    </main>
  );
}
