import NavBar from "./NavBar"

export default function Header() {

    const menu = [
        {
            id: 1,
            link: '/',
            text: 'Home Page'
        },
        {
            id: 2,
            link: '/products',
            text: 'Products'
        },
        {
            id: 3,
            link: '/about_us',
            text: 'About Us'
        }
    ]


    return (
        <>
            <header>
                <NavBar menu={menu} />
            </header>
        </>
    )
}