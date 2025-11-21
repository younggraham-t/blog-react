import React from 'react';
import { render, screen } from '../../test-utils/test-utils.jsx';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Footer from './Footer.jsx';

describe('Footer Test', () => {
	it('renders', () => {
		render(<Footer />, {});
		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	})

})
