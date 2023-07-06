function PriceDisplay({
  originalPrice,
  salePrice,
}: {
  originalPrice: number;
  salePrice: number;
}) {
  return (
    <div className="flex gap-5 items-center">
      <p className="font-serif text-dark_cyan text-4xl">${salePrice}</p>
      <p className="line-through">${originalPrice}</p>
    </div>
  );
}
export default PriceDisplay;
