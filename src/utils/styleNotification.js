import { useDeviceLayout } from "../components/utilities/useCustomLayout"

export const SuccessOptions = ({
	modal
}) => {
	const isMobile = useDeviceLayout({
		isMobile: true
	})

	const style = {
		position: isMobile ? 'top-center' : modal ? 'top-center' : 'bottom-left',
		style: {
			borderRadius: '1.2rem',
			padding: '1rem',
			background: '#21ba45',
			minHeight: '3rem',
			maxHeight: '3rem',
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			fontSize: '1rem',
			color: '#fff',
			marginTop: isMobile ? '.4rem' : modal ? '3.2rem' : '5.625rem',
			zIndex: 1306,
		},
		closeStyle: {
			color: 'white',
			fontSize: '14px',
		},
	}
	return style
}

export const ErrorOptions = ({
	modal
}) => {
	const isMobile = useDeviceLayout({
		isMobile: true
	})

	const style = {
		position: isMobile ? 'top-center' : modal ? 'top-center' : 'bottom-left',
		style: {
			borderRadius: '1.2rem',
			padding: '1rem',
			background: '#c10015',
			minHeight: '3rem',
			maxHeight: '3rem',
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			fontSize: '1rem',
			color: '#fff',
			marginTop: isMobile ? '.4rem' : modal ? '3.2rem' : '5.625rem',
			zIndex: 1306,
		},
		closeStyle: {
			color: 'white',
			fontSize: '14px',
		},
	}
	return style
}
