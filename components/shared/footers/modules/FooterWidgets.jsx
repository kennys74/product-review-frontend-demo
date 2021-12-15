import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer">
            <h4 className="widget-title">Quick Links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="#">
                        <a>Privacy Policy</a>
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <a>Terms & Conditions</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="#">
                        <a>Our Story</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Customers</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="#">
                        <a>Checkout</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>My account</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
