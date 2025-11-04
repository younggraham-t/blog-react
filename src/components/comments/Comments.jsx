import { useParams } from "react-router/internal/react-server-client";
import Comment from "./Comment.jsx"
import CommentForm from "./CommentForm.jsx"
import { useEffect, useState } from "react";
import axios from "axios";
import { useComments } from "./CommentsContext.jsx";
function Comments() {
	const params = useParams();
	const {comments, handleSetComments} = useComments()
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {

		const fetchData = async () => {
			try {
				const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`)
				// console.log(res.data)
				handleSetComments(res.data)

				} catch(e) {
					console.error(e)	
				} 
				finally {
					setLoading(false);
				}		
		}
		
		fetchData();
	}, [])
	

	
	// console.log(comments)
	// console.log(loading)

	if (comments.length === 0 ) {
		return (

		<ul className="text-center grid grid-cols-1 gap-4 p-2">
			<h3 className="text-xl">Comments</h3>
			<p className="text-center text-base">Hmm... Looks Empty<br/> Be the First to Comment</p>
		</ul>
		)

	}
	else {
		
		return (
			<ul className="text-center grid grid-cols-1 gap-4 p-2">

				<h3 className="text-2xl">Comments</h3>
				
				<CommentForm />
				{loading ? <p>Loading Comments...</p> : 
					<>
						{comments.map(comment => {
							return (
								<li  key={comment.id}>
									<Comment comment={comment} />
								</li>

							)
						})}
					</>
	}
			</ul>
		)
		
	}
}

export default Comments
