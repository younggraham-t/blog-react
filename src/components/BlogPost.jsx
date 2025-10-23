import {useState} from 'react'
import Comments from "./comments/Comments.jsx"
import CommentForm from "./forms/CommentForm.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



function BlogPost({post, comments, nextCommentId}) {
	const [commentsState, setComments] = useState(comments)
	const [nextCommentIdState, setNextCommentId] = useState(nextCommentId)
	const [isHidden, setIsHidden] = useState(true)
	function formSubmit(content) {
		console.log(content)
		const id = nextCommentIdState 
		setNextCommentId(nextCommentId+1)
		const postId = post.id
		setComments([
			...commentsState, 
			{id: id, content: content, postId: postId}
		])
		
	}

	const handleClick = () => {
		setIsHidden(!isHidden)
	}

	
	return (
		<section className="w-3/4 m-auto rounded-lg p-1 flex flex-col gap-4 bg-blue-950 text-blue-50">
			<div className="flex flex-row gap-2" >
				<h3 className="ml-4 text-2xl text-amber-600" >{post.title}</h3>
				<span onClick={handleClick} className={!isHidden ? "hidden": ""}><FontAwesomeIcon icon={faChevronDown} /></span>
				<span onClick={handleClick} className={isHidden ? "hidden": ""}><FontAwesomeIcon icon={faChevronRight} /></span>
				
			</div>
			<div className={isHidden ? "hidden" : ""}>
				<div className="ml-4 flex flex-col gap-4">
					<p className="text-base">{post.content}</p>
					<div>
						<p className="text-sm">Author: {post.author}</p>
						<p className="text-sm">Date: {post.date}</p>
					</div>
				</div>
			
				<CommentForm formSubmitCallback={formSubmit}/>
				<Comments comments={commentsState}/>
				
			</div>
		</section>
	) 
}

export default BlogPost
