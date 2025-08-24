import Hero from "./components/Hero/Hero";
import ProductHighlights from "./components/ProductHighlight/ProductHighlight";

export default function Home() {
  return (
    <main style={{ textAlign: "center"}}>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
    </main>
  );
}

