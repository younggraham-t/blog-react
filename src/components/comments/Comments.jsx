import Comment from "./Comment.jsx"
function Comments({comments}) {
	if (comments.length === 0) {
		return <p className="text-center text-base">Hmm... Looks Empty<br/> Be the First to Comment</p>
	}
	
	// console.log(comments)
	return (
		<ul className="text-center grid grid-cols-1 gap-4 p-2">
			<h3 className="text-lg">Comments</h3>
			{comments.map(comment => (
				<li  key={comment.id}>
					<Comment comment={comment} />
				</li>
			))}
		</ul>
	)
}

export default Comments
