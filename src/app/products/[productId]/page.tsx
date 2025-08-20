import Link from "next/link";

export default async function Product({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    const reviews = ["review1", "review2", "review3"];

    return (
        <>
            <h1 className="text-5xl font-bold mb-4">{productId}</h1>
            <p className="text-lg"> details on the {productId}</p>
            <ul>
                {reviews.map((review) => (
                    <li key={review}>
                        <Link href={`/products/${productId}/reviews/${review}`} className="">{review}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

