import { useParams } from "react-router/internal/react-server-client";
import { useEffect, useState } from "react";

export default function BlogPost({post, author}) {
	const [hiddenText, setHiddenText] = useState(true)
	const params = useParams();
	
	useEffect(() => {
		
		//if there is no post_id then it should be on the post list page
		if(params.post_id) {
			setHiddenText(false)
		}
			
	}, )
	return (
		
		<article className="w-full flex flex-col gap-4 border borger-blue-50 rounded-lg p-2">
					<div className="flex flex-row gap-2" >
						<h3 className="text-2xl text-amber-600" >{post.title}</h3>
					</div>
					<div>
						<div className="flex flex-col gap-4">
							<p className="text-base">{hiddenText ? post.body.slice(0, 200).trimEnd() + "..." : post.body}</p>
							<div>
		{author && <p className="text-sm opacity-75">Author: {author.name}</p>}
							</div>
						</div>
					</div>
		</article>
	)
}
