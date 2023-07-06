import ShoppingCartIcon from "./ShoppingCartIcon";

function PreviewProductCard() {
  return (
    <div className="bg-white text-dark_grayish_blue rounded-lg flex flex-col xl:flex-row max-w-md xl:max-w-2xl">
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet="/image-product-desktop.jpg"
        ></source>
        <img
          src="/image-product-mobile.jpg"
          className="max-w-md rounded-t-lg xl:rounded-t-none xl:rounded-l-lg lg:rounded-tl-lg h-full object-cover xl:w-[300px]"
        />
      </picture>

      <div className="pb-10 px-6 pt-5 flex gap-8 flex-col text-sm xl:px-8 xl:pt-8">
        <p className="uppercase tracking-widest">Perfume</p>
        <h1 className="text-4xl font-serif text-dark_blue">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-lg">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex gap-5 items-center">
          <p className="font-serif text-dark_cyan text-4xl">$149.99</p>
          <p className="line-through">$169.99</p>
        </div>
        <button className="text-white justify-center items-center gap-2 bg-dark_cyan px-2 py-3 w-full rounded-lg flex hover:bg-green-950 transition-colors xl:max-w-sm">
          <ShoppingCartIcon />
          <span className="text-bold">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
export default PreviewProductCard;
