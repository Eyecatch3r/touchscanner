import ProductDetailsCard from "@/app/components/ProductDetailsCard/ProductDetailsCard";
export default function Page({ params }: {
    params: { productId: number }
}) {
    const products = [
        {
          id: 0,
          name: 'AP Royale Oak Gold',
          image: '/RoyaleOak.png',
          price: 1239,
          shopName: 'Watches & jewerlery',
          distance: 0.4,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 1,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 2343,
          shopName: 'Watches & jewerlery',
          distance: 0.4,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 2,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 999,
          shopName: 'Watches & jewerlery',
          distance: 0.9,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 3,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 109,
          shopName: 'Watches & jewerlery',
          distance: 5,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 4,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 1239,
          shopName: 'Watches & jewerlery',
          distance: 0.23,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 5,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 2343,
          shopName: 'Watches & jewerlery',
          distance: 0.4,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 6,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 999,
          shopName: 'Watches & jewerlery',
          distance: 0.9,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 7,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 109,
          shopName: 'Watches & jewerlery',
          distance: 5,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 8,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 109,
          shopName: 'Watches & jewerlery',
          distance: 5,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
        {
          id: 9,
          name: 'AP Royale Oak',
          image: '/RoyaleOak.png',
          price: 109,
          shopName: 'Watches & jewerlery',
          distance: 5,
          description: 'This is the description for Product 1',
          keywords: ['keyword1', 'keyword2', 'keyword3'],
        },
      ];

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