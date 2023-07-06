import PreviewProductCard from "./components/PreviewProductCard";

const perfume = {
  tag: "Perfume",
  name: "Gabrielle Essence Eau De Parfum",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  image: {
    desktop: "/image-product-desktop.jpg",
    mobile: "/image-product-mobile.jpg",
    alt: "Picture of Gabrielle Essence Eau De Parfum perfume",
  },
  price: {
    original: 169.99,
    sale: 149.99,
  },
};

function App() {
  return (
    <div className="bg-cream w-full min-h-screen flex flex-col p-5 justify-center items-center">
      <div>
        <PreviewProductCard product={perfume} />
      </div>
    </div>
  );
}
export default App;
