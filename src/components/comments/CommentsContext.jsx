import { useState, createContext, useContext } from "react";

const CommentsContext = createContext();

export function CommentsProvider({children}) {
	const [comments, setComments] = useState([]);
	
	const handleAddComment = (newComment) => {
		setComments(prev => [...prev, newComment])
		// console.log(comments)
	}
	 
	const handleSetComments = (comments) => {
		setComments(comments)
	}
	
	return (
		<CommentsContext.Provider value={{comments, handleAddComment, handleSetComments}} >
			{children}
		</CommentsContext.Provider>
	)
}


export const useComments = () =>  useContext(CommentsContext);



