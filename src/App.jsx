import './App.css'
// import IndividualBlogPost from './components/blogPosts/IndividualBlogPost.jsx';
import BlogPostsList from './components/blogPosts/BlogPostsList.jsx';

import { Routes, Route } from 'react-router/internal/react-server-client';
import CommonLayout from './layouts/CommonLayout.jsx';
import IndividualBlogPost from './components/blogPosts/IndividualBlogPost.jsx';
import ContactForm from './components/contact/ContactForm.jsx';
import { ThemeProvider } from './components/theme/ThemeContext.jsx';
import { useEffect } from 'react';
import HomePage from './components/homePage/HomePage.jsx';


// import posts from "./data/posts.json" with {type: 'json'}
// import comments from "./data/comments.json" with {type: 'json'}

function App() {


	const pages = [
		{name: "Home", link:"/"},
		{name: "Blog", link: "/blog"}, 
		{name: "Contact", link: "/contact"}
	]

	useEffect(() => {
		document.title = "My Blog App"
	})

  return (
	  <ThemeProvider>
		<div className="bg-background text-text">
		  <Routes>
			<Route element={<CommonLayout pages={pages}/>}>
				<Route path="/" element={<HomePage />} />
				<Route path="/blog" element={<BlogPostsList/>}/>
				<Route path="/contact" element={<ContactForm/>}/>
				<Route path="/posts/:post_id" element={<IndividualBlogPost />} />
			</Route>
		  </Routes>
	  </div>
	  </ThemeProvider>
  )
}

export default App
