import React from 'react';
import { render, screen } from '../../test-utils/test-utils.jsx';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import ContactForm from './ContactForm.jsx';

describe("ContactForm Test", () => {
	it("renders", () => {
		render(<ContactForm />, {});
		expect(screen.getByRole("heading", {name: "Contact Me"})).toBeInTheDocument();
		const textboxes = screen.getAllByRole("textbox");
		expect(textboxes).toHaveLength(3);
		for (const textbox of textboxes) {
			expect(textbox).toBeInTheDocument();
		}
		expect(screen.getByRole("button", {name: "Send"})).toBeInTheDocument();
	})

})
