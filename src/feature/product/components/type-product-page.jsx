import { ProductCard } from './product-card';

export const TypeProductPage = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-4 gap-3 px-[189px] ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
