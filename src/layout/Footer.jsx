function Footer() {
    return (
        <footer className="page-footer green lighten-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More my app</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }