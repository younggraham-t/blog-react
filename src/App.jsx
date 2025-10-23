import './App.css'
import './components/BlogPost.jsx'
import BlogPost from './components/BlogPost.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';


import posts from "./data/posts.json" with {type: 'json'}
import comments from "./data/comments.json" with {type: 'json'}

const pages = [{name: "Home", link: "/"}, {name: "About", link: "/"}]

function App() {
	const blogPosts = []
	for (const post of posts) {
		const curComments = []
		let maxId = 0
		for (const comment of comments) {
			if (comment.postId === post.id) {
				curComments.push(comment)
			}
			if (comment.id > maxId) {
				maxId = comment.id
			}
		}
		blogPosts.push(<BlogPost key={post.id} post={post} comments={curComments} nextCommentId={maxId+1}/>)
	}

  return (
    <div className="flex flex-col h-screen justify-between gap-4">
		<Header navLinks={pages} />
		<main className="grid gap-4 mb-auto">
			{blogPosts} 
		</main>
		<Footer/>
    </div>
  )
}

export default App
