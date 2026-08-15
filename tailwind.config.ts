import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				'primary-dark': 'var(--color-primary-dark)',
				'primary-darker': 'var(--color-primary-darker)',
				secondary: 'var(--color-secondary)',
				tertiary: 'var(--color-tertiary)',
				background: 'var(--color-background)',
			},
		},
	},
	plugins: [],
}
