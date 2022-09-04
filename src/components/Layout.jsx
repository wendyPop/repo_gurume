export default function Layout({ children }) {
    return (
        <>
            <div>
                <header>헤더</header>
                <div>{children}</div>
                <footer>푸터</footer>
            </div>
        </>
    )
}
