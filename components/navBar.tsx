import React from "react";
import Link from "next/link";

function Navbar()
{

    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a className="nav-link">
                            Homepage
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/chart">
                        <a className="nav-link">
                            My Charts
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/songs">
                        <a className="nav-link">
                            Songs List
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className="nav-link">
                            Blog
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="contact">
                        <a className="nav-link">
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>)
}

export default Navbar;