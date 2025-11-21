import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../components/theme/ThemeContext'
import { LoginProvider } from '../components/login/LoginContext'
import { MemoryRouter } from 'react-router'
import { CommentsProvider } from '../components/comments/CommentsContext'


const customRender = (
	ui,
	options,
) => {

	const AllTheProviders = ({ children }) => {
		return (
			<ThemeProvider initialTheme={options.theme ?? undefined}>
				<LoginProvider initialValue={options.login ?? undefined}>
					<MemoryRouter initialEntries={options.initialEntries ?? ["/"]}>
						<CommentsProvider>
							{children}
						</CommentsProvider>
					</MemoryRouter>
				</LoginProvider>
			</ThemeProvider>
		)
	}
	render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
