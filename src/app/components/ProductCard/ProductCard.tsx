import Link from 'next/link';
import { useSpring} from '@react-spring/web';
import {animated} from "@react-spring/web";
import { productData } from '../../products';

const ProductCard = ({
                         id,
                         name,
                         image,
                         price,
                         shopName,
                         distance,
                     }: productData) => {
    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 500 }
        }),
        []
    )

    return (
        <Link href={`/product/${id}`}>
            <animated.div
                style={props}
                className="w-64 border border-whiteCard rounded-lg shadow-md g-blur bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 dark:border-darkCard overflow-hidden transition duration-300 hover:shadow-xl hover:scale-105"
            >
                <animated.img
                    style={props}
                    className="p-8 rounded-t-lg transition duration-500 hover:scale-125 hover:rotate-12"
                    src={image || "/ImagePlaceholder.png"}
                    alt={name}
                />
                <div className="px-5 pb-5">
                    <animated.h5
                        style={props}
                        className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                    >
                        {name}
                    </animated.h5>
                    <animated.p
                        style={props}
                        className="text-sm font-semibold tracking-tight text-whiteTextSecondary dark:text-darkTextSecondary"
                    >
                        {shopName}
                    </animated.p>
                    <div className="flex items-center justify-between mt-2">
                        <animated.span
                            style={props}
                            className="text-3xl font-bold text-gray-900 dark:text-white"
                        >
                            {price}€
                        </animated.span>
                        <animated.span
                            style={props}
                            className="text-1xl font-bold text-gray-900 dark:text-white"
                        >
                            {distance}km
                        </animated.span>
                    </div>
                </div>
            </animated.div>
        </Link>
    );
};

export default ProductCard;
