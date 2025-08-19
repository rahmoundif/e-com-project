function ReviewDetails({params} : {params: {productId: string, reviewId: string}}) {
    
    return ( 
    <>
<h1 className="text-5xl font-bold mb-4">{params.productId}</h1>
<h2 className="text-3xl mb-2">Review :  {params.reviewId}</h2>
<p className="text-lg">Details about review {params.reviewId} for {params.productId}</p>
    </> 
    );
}

export default ReviewDetails;