export default async function OptionalCatchAllRoute({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;
    return (
        <>
            <h1 className="text-5xl bold mb-4">Products</h1>

            <p className="text-lg">Segments captured in the URL:</p>
            {slug && slug.length ? (
                <ul>
                    {slug.map((segment, index) => (
                        <li key={index} className="text-blue-500">
                            {segment}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No additional segments provided</p>
            )}
        </>
    );
}