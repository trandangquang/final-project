import { ProductCard } from '@/feature/product';
import { SlidePage } from './slide';

export const HomePage = () => {
  return (
    <div>
      <SlidePage />
      <div className="gap-3 mt-5 grid grid-cols-4 w-full h-full px-44 py-10">
        <ProductCard />
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
