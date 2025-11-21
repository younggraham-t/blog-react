import React from 'react';
import { render, screen } from '../../test-utils/test-utils.jsx';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Header from './Header.jsx';
import { pages } from '../../pages.js';

describe("Header test", () => {
	it("renders", () => {
		render(<Header pages={pages} />, {});
		expect(screen.getByRole("banner")).toBeInTheDocument();
	})
})


