import {useEffect, useState} from 'react'
import Comments from "../comments/Comments.jsx"
import CommentForm from "../comments/CommentForm.jsx"
import BlogPost from './BlogPost.jsx';
import { useParams } from 'react-router/internal/react-server-client';

export default function IndividualBlogPost() {
	
	const params = useParams();
	const [post, setPost] = useState({
		id: params.post_id,
		title: "",
		content: "",
		author: "",
		date: "",
	});
	
	const [comments, setComments] = useState([])
	const [nextCommentId, setNextCommentId] = useState(0)
	const [isLoadingComments, setLoadingComments] = useState(true);
	const [isLoadingPost, setLoadingPost] = useState(true);
	
	useEffect( () => {

		
		const fetchData = async () => {
			
			let res = await fetch ("/data/posts.json")
			let json = await res.json();
			const filteredPost = json.filter(post => {
				return post.id === params.post_id;
			})
			setPost(filteredPost[0])
			// console.log(filteredPost[0]);
			setLoadingPost(false);
			

			res = await fetch("/data/comments.json")
			json = await res.json();
			let nextCommentId = 0
			const commentsFiltered = json.filter((comment) => {
				if (comment.id >= nextCommentId) {
					nextCommentId = comment.id + 1
				}
				return comment.postId === post.id;
			})

			setNextCommentId(nextCommentId)
			setComments(commentsFiltered)
			setLoadingComments(false)

		}
		fetchData();
			
	}, [params.post_id])
	
	function formSubmit(content) {
		console.log(content)
		const id = nextCommentId
		setNextCommentId(nextCommentId+1)
		const postId = post.id
		setComments([
			...comments, 
			{id: id, author: content.author, content: content.message, postId: postId}
		])
		
	}

	return (
		<section className="w-5/6 m-auto rounded-lg p-1 flex flex-col gap-4 ">
			<div className="ml-4 flex flex-col gap-2">
			{isLoadingPost ? <p> Loading Post ... </p> : <BlogPost post={post} />}
			<CommentForm formSubmitCallback={formSubmit}/>
			{isLoadingComments ? <p> Loading Comments ... </p> : <Comments comments={comments}/>}
		</div>
		</section>
	) 
}

