import {useEffect, useState} from 'react'
import BlogPost from './BlogPost.jsx';
import { useParams } from 'react-router/internal/react-server-client';
import axios from 'axios';
import CommentsSection from '../comments/CommentsSection.jsx';

export default function IndividualBlogPost() {
	
	const params = useParams();
	const [post, setPost] = useState();
	const [author, setAuthor] = useState();
	
	const [isLoadingPost, setLoadingPost] = useState(true);
	
	useEffect( () => {

		
		const fetchData = async () => {
			try {
				const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)
				
				setPost(postRes.data)
				
				const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`)
				setAuthor(authorRes.data)


			} catch (e) {
				console.error(e.message)
			} finally {
				setLoadingPost(false)
					
			}


		}
		fetchData();
			
	}, [params.post_id])
	

	return (
		<section className="w-5/6 m-auto rounded-lg p-1 flex flex-col gap-4 ">
			<div className="ml-4 flex flex-col gap-2">
			{isLoadingPost ? <p> Loading Post ... </p> : <BlogPost post={post} author={author} />}
			<CommentsSection />
		</div>
		</section>
	) 
}

