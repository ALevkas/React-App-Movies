function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <a
                    href='https://allevchenko.ru/React-App-Movies/'
                    className='brand-logo'
                >
                    Movies finder
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/ALevkas/'>
                            My others app in github page.
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
