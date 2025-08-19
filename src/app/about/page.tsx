import Link from "next/link";

function About() {
    return ( 
    <>
    <h1 className="font-bold uppercase text-2xl text-center">Learn more about Us</h1>
    <Link href="about/team">Team</Link>
    </> );
}

export default About;