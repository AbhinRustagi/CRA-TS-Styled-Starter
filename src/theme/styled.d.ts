// import { ITheme } from './theme'

import { CSSProp, DefaultTheme } from 'styled-components/macro'

// declare module 'styled-components' {
// 	// eslint-disable-next-line @typescript-eslint/no-empty-interface
// 	interface DefaultTheme extends ITheme {}
// }

declare module 'react' {
	interface Attributes {
		css?: CSSProp<DefaultTheme>
	}
}

declare module 'react-skeleton'
