import './App.css'
// import IndividualBlogPost from './components/blogPosts/IndividualBlogPost.jsx';
import BlogPostsList from './components/blogPosts/BlogPostsList.jsx';

import { Routes, Route } from 'react-router/internal/react-server-client';
import CommonLayout from './layouts/CommonLayout.jsx';
import IndividualBlogPost from './components/blogPosts/IndividualBlogPost.jsx';
import ContactForm from './components/contact/ContactForm.jsx';


// import posts from "./data/posts.json" with {type: 'json'}
// import comments from "./data/comments.json" with {type: 'json'}

function App() {

	const pages = [
		{name: "Blog", link: "/"}, 
		{name: "Contact", link: "/contact"}
	]

  return (
	  <Routes>
		<Route element={<CommonLayout pages={pages}/>}>
			<Route path="/" element={<BlogPostsList/>}/>
			<Route path="/contact" element={<ContactForm/>}/>
			<Route path="/posts/:post_id" element={<IndividualBlogPost />} />
		</Route>
	  </Routes>
  )
}

export default App
