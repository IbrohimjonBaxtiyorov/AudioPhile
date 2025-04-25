import Product from "../product/Product";
import "./Main.css";

export default function Main() {
  const { title, description, isNew, desktop } = {
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    desktop: "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
  };
  return (
    <main className="main">
      <Product
        title={title}
        description={description}
        isNew={isNew}
        img={desktop}
      />
    </main>
  );
}
