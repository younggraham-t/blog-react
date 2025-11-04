import Comments from "./Comments.jsx";
import { CommentsProvider } from "./CommentsContext.jsx";

export default function CommentsSection() {
	return (
		<CommentsProvider>
			<Comments />
		</CommentsProvider>
	)
	
}
