import React from 'react';
import { render, screen } from '../../test-utils/test-utils.jsx';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';


import CommentForm from './CommentForm.jsx';


describe("CommentForm Test", () => {
	it("renders properly when authenticated", () => {
		render(<CommentForm />, { login: {username: "bob123", authenticated: true} })
		expect(screen.getByRole("heading", {name: "Leave a Comment:"})).toBeInTheDocument();
		const textboxes = screen.getAllByRole("textbox");
		expect(textboxes).toHaveLength(1);
		for (const textbox of textboxes) {
			expect(textbox).toBeInTheDocument();
		}
		expect(screen.getByRole("button", {name: "Post"})).toBeInTheDocument();
	})

	it("renders properly when not authenticated", () => {
		render(<CommentForm />, {});
		expect(screen.getByTestId("login-to-comment")).toBeInTheDocument();
		const loginLink = screen.getByRole('link', {name:"Login"});
		expect(loginLink).toBeInTheDocument();
		expect(loginLink).toHaveAttribute("href", "/login");
	})
})
