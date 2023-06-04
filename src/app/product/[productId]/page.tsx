import ProductDetailsCard from "@/app/components/ProductDetailsCard/ProductDetailsCard";
import { products } from '../../products';

export default function Page({ params }: {
    params: { productId: number }
}) {
    return (
      <main className="h-screen">
        <div className="flex justify-center items-center mt-10">
            <div className="w-3/4 xl:w-3/5">
                <ProductDetailsCard {...products[params.productId]} />
            </div>
        </div>
      </main>
    )
  }