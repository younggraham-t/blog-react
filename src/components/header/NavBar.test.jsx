import React from 'react';
import { render, screen } from '../../test-utils/test-utils.jsx';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Navbar from './NavBar.jsx';
import { pages } from '../../pages.js';

describe('NavBar Test', () => {
	it("renders", () => {
		render(<Navbar pages={pages} />, {})
		expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
	})

	it("displays the correct pages", () => {
		render(<Navbar pages={pages} />, {})
		expect(screen.getByTestId("nav-bar")).toHaveTextContent("HomeBlogContact")
	})
	it("has the correct links for each page", () => {
		render(<Navbar pages={pages} />, {})
		const homeLink = screen.getByRole('link', {name: "Home"})
		expect(homeLink).toBeInTheDocument();
		expect(homeLink).toHaveAttribute("href", '/')

		const blogLink = screen.getByRole('link', {name: "Blog"})
		expect(blogLink).toBeInTheDocument();
		expect(blogLink).toHaveAttribute("href", '/blog')

		const contactLink = screen.getByRole('link', {name: "Contact"})
		expect(contactLink).toBeInTheDocument();
		expect(contactLink).toHaveAttribute("href", '/contact')
	})

})
