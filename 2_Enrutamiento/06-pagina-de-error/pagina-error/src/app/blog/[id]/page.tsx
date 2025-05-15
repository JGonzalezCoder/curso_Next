const BlogId = ({params}: BlogIdProps) => {
	const {id} = params;
	return (
    <div>
		<h1>Este es un articulo numero {id} de nuestro blog</h1>
    </div>
  );
};

type BlogIdProps = {
	params: {
		id:string
	}
};

export default BlogId;
