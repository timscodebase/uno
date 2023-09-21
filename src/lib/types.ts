export interface UnoCardType {
	color: string
	value: string
	flipped: boolean
	isWild: boolean
	top: number
}

export type UnoColorType = 'Red' | 'Yellow' | 'Green' | 'Blue'

export type UnoValueType =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| 'Skip'
	| 'Reverse'
	| 'Draw Two'

export type WildCardType = 'Wild' | 'Wild Draw Four'
