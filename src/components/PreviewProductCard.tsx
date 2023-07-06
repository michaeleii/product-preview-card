import AddToCartButton from "./AddToCartButton";
import PriceDisplay from "./PriceDisplay";
import ProductImage from "./ProductImage";

interface Product {
  tag: string;
  name: string;
  description: string;
  image: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  price: {
    original: number;
    sale: number;
  };
}

function PreviewProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white text-dark_grayish_blue rounded-lg flex flex-col xl:flex-row max-w-md xl:max-w-2xl">
      <ProductImage
        desktopImg={product.image.desktop}
        mobileImg={product.image.mobile}
        alt={product.image.alt}
      />

      <div className="pb-10 px-6 pt-5 flex gap-8 flex-col text-sm xl:px-8 xl:pt-8">
        <p className="uppercase tracking-[0.3em]">{product.tag}</p>
        <h1 className="text-4xl font-serif text-dark_blue">{product.name}</h1>
        <p className="text-lg">{product.description}</p>
        <PriceDisplay
          originalPrice={product.price.original}
          salePrice={product.price.sale}
        />
        <AddToCartButton />
      </div>
    </div>
  );
}
export default PreviewProductCard;
