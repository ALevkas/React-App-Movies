function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://github.com/ALevkas/movies'
                    className='brand-logo'
                >
                    Movies finder
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='#'>My other app</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
