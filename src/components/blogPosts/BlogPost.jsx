import { useParams } from "react-router/internal/react-server-client";
import { useEffect, useState } from "react";

export default function BlogPost({post}) {
	const [hiddenText, setHiddenText] = useState(true)
	const params = useParams();
	
	useEffect(() => {
		if(params.post_id) {
			setHiddenText(false)
		}
		
	}, [])

	return (
		
		<article className="w-full flex flex-col gap-4 border borger-blue-50 rounded-lg p-2">
			<div className="flex flex-row gap-2" >
				<h3 className="text-2xl text-amber-600" >{post.title}</h3>
			</div>
			<div>
				<div className="flex flex-col gap-4">
					<p className="text-base">{hiddenText ? post.content.slice(0, 200).trimEnd() + "..." : post.content}</p>
					<div>
						<p className="text-sm">Author: {post.author}</p>
						<p className="text-sm">Date: {post.date}</p>
					</div>
				</div>
			</div>
		</article>
	)
}
