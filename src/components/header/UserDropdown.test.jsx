import React from 'react';
import { render, screen } from '../../test-utils/test-utils.jsx';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import UserDropdown from './UserDropdown.jsx'


describe('Userdropdown Test', () => {
	
	it('Renders properly when not authenticated', () => {
		render (<UserDropdown />, {});
		expect(screen.getByTestId("user-dropdown")).toBeInTheDocument();
		expect(screen.getByTestId("user-dropdown")).toHaveTextContent("Login");
	})
	it('Renders properly when authenticated', () => {
		render (<UserDropdown />, {login: {username: "bob123", authenticated: true}});
		expect(screen.getByTestId("user-dropdown")).toBeInTheDocument();
		expect(screen.getByTestId("user-dropdown")).toHaveTextContent("bob123");
	})
})
