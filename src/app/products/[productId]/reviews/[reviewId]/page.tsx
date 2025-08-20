export default async function ReviewDetails({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
    const { productId, reviewId } = await params;

    return (
        <>
            <h1 className="text-5xl font-bold mb-4">{productId}</h1>
            <h2 className="text-3xl mb-2">Review :  {reviewId}</h2>
            <p className="text-lg">Details about review {reviewId} for {productId}</p>
        </>
    );
}

