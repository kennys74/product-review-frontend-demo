export const stickyHeader = () => {
    let number =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    const header = document.getElementById('headerSticky');
    if (header !== null) {
        if (number >= 300) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        }
    }
};

export const generateTempArray = (maxItems) => {
    let result = [];

    for (let i = 0; i < maxItems; i++) {
        result.push(i);
    }
    return result;
};

export const capitalizeWords = (string) => {
    if (string) {
        return string.replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        });
    }
};

export const replaceString = (str, value, replacement) => {
    if (str) {
        const arr = str.split(value);
        let s = '';
        arr.forEach((item, i) => {
            s += `${item} `;
        });
        return s;
    }
};

export const prettifySlug = (slug) => {
    if (slug) {
        let value = replaceString(slug, '-', ' ');
        value = capitalizeWords(value);
        return value;
    }
};

export const loadScript = (url, callback) => {
    let script = document.createElement('script');
    script.type = 'text/javascript';

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (
                script.readyState === 'loaded' ||
                script.readyState === 'complete'
            ) {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};
