import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Content from '../content/Content'
import styles from '../layout/Layout.module.css'

const Layout = (props) => {
	const location = useLocation()
	const path = location.pathname
	const shortbreak = path === '/ShortBreak'
	const longbreak = path === '/LongBreak'
	return (
		<div
			className={`${styles.main} 
			${shortbreak && styles.shortbreak} 
			${longbreak && styles.LongBreak}`}
		>
			<Content />
			<main className={styles.mainBox}>{props.children}</main>
		</div>
	)
}

export default Layout
