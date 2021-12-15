import React, { useEffect, useState } from 'react';
const NotificationBanner = () => {
    const [covidCookie, setCovidCookie] = useState(false);
    const storageKey = '__covidAccepted__';

    useEffect(() => {
        const cookie = JSON.parse(localStorage.getItem(storageKey));
        if (cookie) setCovidCookie(true);
    }, [covidCookie]);

    const setPreferenceAccepted = () => {
        localStorage.setItem(storageKey, true);
        setCovidCookie(true);
    };

    const isSetPreference = () => {
        return JSON.parse(localStorage.getItem(storageKey) || false);
    };

    const isStorageAllowed = () => {
        const test = '__localStorageTest__';

        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);

            return true;
        } catch (e) {
            console.warn('Storage not allowed, please allow cookies');
            return false;
        }
    };

    const handleClick = (e) => {
        e.preventDefault();

        if (!isStorageAllowed()) return false;
        if (isSetPreference()) setCovidCookie(true);

        setPreferenceAccepted();
    };
    return (
        <>
            {!covidCookie ? (
                <div id="noticeBanner">
                    <div className="left"></div>
                    <div className="center">Stay informed! Visit the <a href="https://www.sacoronavirus.co.za" target="_blank">SA department of Health's website</a> for COVID 19 updates.</div>
                    <div className="right">
                        <a href="#" className="close" onClick={handleClick}>
                            <svg viewBox="0 0 24 24">
                                <path d="M 2 2 L 22 22 M 2 22 L22 2" />
                            </svg>
                        </a>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default NotificationBanner;
