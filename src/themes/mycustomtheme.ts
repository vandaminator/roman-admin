
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #73ecc7 
		"--color-primary-50": "234 252 247", // #eafcf7
		"--color-primary-100": "227 251 244", // #e3fbf4
		"--color-primary-200": "220 250 241", // #dcfaf1
		"--color-primary-300": "199 247 233", // #c7f7e9
		"--color-primary-400": "157 242 216", // #9df2d8
		"--color-primary-500": "115 236 199", // #73ecc7
		"--color-primary-600": "104 212 179", // #68d4b3
		"--color-primary-700": "86 177 149", // #56b195
		"--color-primary-800": "69 142 119", // #458e77
		"--color-primary-900": "56 116 98", // #387462
		// secondary | #5fb1f4 
		"--color-secondary-50": "231 243 253", // #e7f3fd
		"--color-secondary-100": "223 239 253", // #dfeffd
		"--color-secondary-200": "215 236 252", // #d7ecfc
		"--color-secondary-300": "191 224 251", // #bfe0fb
		"--color-secondary-400": "143 200 247", // #8fc8f7
		"--color-secondary-500": "95 177 244", // #5fb1f4
		"--color-secondary-600": "86 159 220", // #569fdc
		"--color-secondary-700": "71 133 183", // #4785b7
		"--color-secondary-800": "57 106 146", // #396a92
		"--color-secondary-900": "47 87 120", // #2f5778
		// tertiary | #25228f 
		"--color-tertiary-50": "222 222 238", // #dedeee
		"--color-tertiary-100": "211 211 233", // #d3d3e9
		"--color-tertiary-200": "201 200 227", // #c9c8e3
		"--color-tertiary-300": "168 167 210", // #a8a7d2
		"--color-tertiary-400": "102 100 177", // #6664b1
		"--color-tertiary-500": "37 34 143", // #25228f
		"--color-tertiary-600": "33 31 129", // #211f81
		"--color-tertiary-700": "28 26 107", // #1c1a6b
		"--color-tertiary-800": "22 20 86", // #161456
		"--color-tertiary-900": "18 17 70", // #121146
		// success | #4af49c 
		"--color-success-50": "228 253 240", // #e4fdf0
		"--color-success-100": "219 253 235", // #dbfdeb
		"--color-success-200": "210 252 230", // #d2fce6
		"--color-success-300": "183 251 215", // #b7fbd7
		"--color-success-400": "128 247 186", // #80f7ba
		"--color-success-500": "74 244 156", // #4af49c
		"--color-success-600": "67 220 140", // #43dc8c
		"--color-success-700": "56 183 117", // #38b775
		"--color-success-800": "44 146 94", // #2c925e
		"--color-success-900": "36 120 76", // #24784c
		// warning | #e3e905 
		"--color-warning-50": "251 252 218", // #fbfcda
		"--color-warning-100": "249 251 205", // #f9fbcd
		"--color-warning-200": "248 250 193", // #f8fac1
		"--color-warning-300": "244 246 155", // #f4f69b
		"--color-warning-400": "235 240 80", // #ebf050
		"--color-warning-500": "227 233 5", // #e3e905
		"--color-warning-600": "204 210 5", // #ccd205
		"--color-warning-700": "170 175 4", // #aaaf04
		"--color-warning-800": "136 140 3", // #888c03
		"--color-warning-900": "111 114 2", // #6f7202
		// error | #407d8e 
		"--color-error-50": "226 236 238", // #e2ecee
		"--color-error-100": "217 229 232", // #d9e5e8
		"--color-error-200": "207 223 227", // #cfdfe3
		"--color-error-300": "179 203 210", // #b3cbd2
		"--color-error-400": "121 164 176", // #79a4b0
		"--color-error-500": "64 125 142", // #407d8e
		"--color-error-600": "58 113 128", // #3a7180
		"--color-error-700": "48 94 107", // #305e6b
		"--color-error-800": "38 75 85", // #264b55
		"--color-error-900": "31 61 70", // #1f3d46
		// surface | #5de0d9 
		"--color-surface-50": "231 250 249", // #e7faf9
		"--color-surface-100": "223 249 247", // #dff9f7
		"--color-surface-200": "215 247 246", // #d7f7f6
		"--color-surface-300": "190 243 240", // #bef3f0
		"--color-surface-400": "142 233 228", // #8ee9e4
		"--color-surface-500": "93 224 217", // #5de0d9
		"--color-surface-600": "84 202 195", // #54cac3
		"--color-surface-700": "70 168 163", // #46a8a3
		"--color-surface-800": "56 134 130", // #388682
		"--color-surface-900": "46 110 106", // #2e6e6a
		
	}
}