import Link from "next/link";
import {useRouter} from "next/router";

export default function Layout({ children }) {
    const router = useRouter()
    return (
        <>
            <div>
                <header>
                    <h1>AWESOME FOOD STORE</h1>
                    <ul>
                        <li className={router.pathname === '/about' ? 'active' : ''}><Link href={'/about'}>ABOUT</Link></li>
                        <li className={router.pathname === '/' ? 'active' : ''}><Link href={'/'}>STORE</Link></li>
                    </ul>
                </header>
                <div>{children}</div>
                <footer>
                    <address className="c-color7">© 2022 ROHA CHOI</address>
                </footer>
            </div>
        </>
    )
}
