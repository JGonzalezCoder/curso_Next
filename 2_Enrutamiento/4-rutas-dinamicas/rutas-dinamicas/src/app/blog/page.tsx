import Link from "next/link";

const Blog = () => {
	return (
    <div>
    	<h1>Esta es nuestro Blog</h1>
    	<section>
    		<h2>Lista de articulos del blog:</h2>
    		<div>
    			<article>
    				<h3>IA</h3>
    				<p>Texto largo sobre la IA</p>
    				<Link href="/blog/1">Leer articulo</Link>
    			</article>
    			<article>
    				<h3>IA</h3>
    				<p>Texto largo sobre la IA</p>
    				<Link href="/blog/2">Leer articulo</Link>
    			</article>
    			<article>
    				<h3>IA</h3>
    				<p>Texto largo sobre la IA</p>
    				<Link href="/blog/3">Leer articulo</Link>
    			</article>
    			<article>
    				<h3>IA</h3>
    				<p>Texto largo sobre la IA</p>
    				<Link href="/blog/4">Leer articulo</Link>
    			</article>
    		</div>
    	</section>
    </div>
  );
}

export default Blog;
