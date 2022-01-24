import styles from './WrapperOfForm.module.css'
const WrapperOfForms = (props) => {
    return (
        <main className={`${styles.mainBlogOfPapperBook} ${props.className}`}>
            {props.children}
        </main>
    )
}

export default WrapperOfForms