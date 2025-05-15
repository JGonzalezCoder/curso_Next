import Link from "next/link";

const Menu = () => {
	return (
		<nav>
			<ul>
				<li><Link href="/">Inicio</Link></li>
				<li><Link href="/nosotros">Nostros</Link></li>
				<li><Link href="/portafolio">Portafolio</Link></li>
				<li><Link href="/blog">Blog</Link></li>
				<li><Link href="/contacto">Contacto</Link></li>
			</ul>
		</nav>
	)
}

export default Menu;
