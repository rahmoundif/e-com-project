function CatchAllRoute({ params }: { params: { slug?: string[] } }) {
    return (
        <>
            <h1 className="text-5xl bold mb-4">Products</h1>

            <p className="text-lg">Segments captured in the URL:</p>
            {params.slug ? (
                <ul>
                    {params.slug.map((segment, index) => (
                        <li key={index} className="text-blue-500">
                            {segment}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No additional segments provided</p>
            )}
        </>
    )
}

export default CatchAllRoute;