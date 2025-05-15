import Link from "next/link";

const NotFound = () => {
	return (
		<div>
			<h1>Epa!</h1>
			<p>Esta pagina no existe, error 404</p>
			<Link href="/">Ve al inicio</Link>
		</div>
	)
}

export default NotFound;
