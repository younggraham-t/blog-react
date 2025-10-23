import Comment from "./Comment.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
function Comments({comments}) {
	
	// console.log(comments)
	return (
		<ul className="grid grid-cols-1 gap-4 ml-4 ">
			{comments.map(comment => (
				<li className="text-base align-text-bottom flex flex-row gap-1" key={comment.id}>
					<FontAwesomeIcon icon={faChevronRight} />
					<Comment comment={comment} />
				</li>
			))}
		</ul>
	)
}

export default Comments
