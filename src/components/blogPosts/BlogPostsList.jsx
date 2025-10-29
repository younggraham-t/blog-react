import { useEffect, useState } from "react";
import BlogPost from './BlogPost.jsx'
import { Link } from "react-router";


export default function BlogPostsList() {
	const [posts, setPosts] = useState([])
	const [isLoading, setLoading] = useState(true)
	useEffect( () => {
		
		const fetchData = async () => {
			const res = await fetch("/data/posts.json")
			const json = await res.json();
			setPosts(json)
			setLoading(false)

		}
		fetchData();

		

			
	}, [])

	if (isLoading) {
		return <p> Loading Data ... </p>
	}
	
	// console.log(posts)
	return (
		<div className="w-5/6 m-auto rounded-lg p-2 flex flex-col gap-y-4 text-blue-50">
		{posts.map(post => (
			<Link to={"/posts/" + post.id} key={post.id} className="p-2">
				<BlogPost post={post}/>
			</Link>
		))}
		</div>
	)
}
