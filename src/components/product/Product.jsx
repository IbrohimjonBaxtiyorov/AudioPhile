import Button from "../button/Button";
import "./Product.css";

export default function Product({
  title,
  description,
  isNew,
  img: { tablet, desktop, mobile },
}) {
  return (
    <div className="container">
      <div className="product">
        <picture>
          <source media="(max-width:375px)" srcSet={mobile} />
          <source media="(max-width:768px)" srcSet={tablet} />
          <img src={desktop} alt={title} width={540} height={560} />
        </picture>
        <div>
          {isNew && <span>NEW PRODUCT</span>}
          <h3>{title}</h3>
          <p>{description}</p>
          <Button text="See product" />
        </div>
      </div>
    </div>
  );
}
