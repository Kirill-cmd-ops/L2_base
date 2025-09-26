function domainName(url) {
    url = url.replace(/^(https?:\/\/|ftp:\/\/)/, '');

    url = url.replace(/^www\./, '');

    return url.split('.')[0];
}