import Link from "next/link";

function Home() {
  return ( 
    <>
    <h1 className="font-bold uppercase text-2xl text-center">Welcome to the homePage</h1>
    <ul className="flex text-black gap-x-3">
    <Link href="about">About</Link>
    <Link href="contact">Contact</Link>
    <Link href="products">Products</Link>
    </ul>
    </>
    );
}

export default Home;