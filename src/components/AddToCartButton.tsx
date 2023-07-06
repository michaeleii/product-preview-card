import ShoppingCartIcon from "./ShoppingCartIcon";

function AddToCartButton() {
  return (
    <button className="text-white justify-center items-center gap-2 bg-dark_cyan px-2 py-3 w-full rounded-lg flex hover:bg-green-950 transition-colors xl:max-w-sm">
      <ShoppingCartIcon />
      <span className="font-bold">Add to Cart</span>
    </button>
  );
}
export default AddToCartButton;
