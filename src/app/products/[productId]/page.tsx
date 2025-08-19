import Link from "next/link";

function Product({ params }: { params: { productId: string } }) {
    const reviews = ["review1", "review2", "review3"]

    return (
        <>
            <h1 className="font-bold uppercase text-blue-500">{params.productId}</h1>
            <p className="text-black"> details on the {params.productId}</p>
            <ul>
                {reviews.map((review) => (
                    <li key={review}>
                        <Link href={`/products/${params.productId}/reviews/${review}`}>{review}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Product;