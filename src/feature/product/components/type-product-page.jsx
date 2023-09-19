import { ProductCard } from './product-card';

export const TypeProductPage = () => {
  return (
    <div className="px-44">
      <h1 className="pt-5 text-3xl font-medium">718 Cayman Version</h1>
      <div className="mt-5 grid grid-cols-4 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <h1 className="pt-5 text-3xl font-medium">911 Carrera Version</h1>
      <div className="mt-5 grid grid-cols-4 gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
