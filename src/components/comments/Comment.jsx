import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Comment({comment}) {
	// console.log(comment)
	return (
		<div className="flex flex-row gap-2">
			<FontAwesomeIcon icon={faChevronRight} />
			<div className="w-full text-left flex flex-col gap-2">
				<p className="text-sm opacity-75">{comment.author}</p>
				<p className="ml-6 text-base">{comment.content}</p>
			</div>
		</div>
	) 
}
