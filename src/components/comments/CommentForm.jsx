import {useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router/internal/react-server-client';
import { useComments } from './CommentsContext.jsx';

export default function CommentForm() {
	const params = useParams();
	const emptyContent = {
		author: "",
		message: "",
	}
	const [content, setContent] = useState(emptyContent)
	const {handleAddComment} = useComments()
	const [missingDataError, setMissingDataError] = useState(false)
	
	const handleSubmit = async (event) => {
				event.preventDefault();
				
				if(content.author === "") {
					setMissingDataError(true);
					return;
				}
				
				const submitData = {
					name: content.author,
					body: content.message
				}
				const res = await axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, submitData)
				
				// console.log(res.data)
				handleAddComment(res.data);
				setContent(emptyContent)
	}
	
	
	return (
		<div className="flex flex-col gap-1 p-2">
			<h4 className="text-lg ">Leave a Comment:</h4>
		<form className="flex flex-col gap-2 ">
			<input 
			className=" rounded-md p-1 w-full bg-text text-background opacity-75" 
			type="text" 
			name="author" 
			value={content.author} 
			placeholder='Name' 
			onChange={e => setContent({...content, author: e.target.value})}></input>

			<textarea 
			className=" rounded-md p-1 w-full h-3/4 bg-text text-background opacity-75" 
			value={content.message} 
			placeholder='Comment'
			onChange= {e => setContent({...content, message: e.target.value})}></textarea>
			{missingDataError && <p className='text-red-600'>Please enter a comment </p>}
			<button className="p-0.5 w-1/6 rounded-sm text-lg bg-accent text-gray-950 hover:bg-amber-700 active:bg-amber-500" type="submit" onClick={handleSubmit}>Post</button>
			
			
		</form>
		</div>
	)
}
