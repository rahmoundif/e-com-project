import Link from "next/link";

export default function Products() {
    const productIds = ["product1", "product2", "product3"]

    return (
        <>
            <h1 className="font-bold uppercase text-2xl text-center">Products</h1>

            <ul>
                {productIds.map((productId) => (
                    <li key={productId}>
                        <Link href={`/products/${productId}`}>
                            {productId}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

