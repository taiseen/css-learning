// checking this project is running at live || local?
const getBaseUrl = () => {

    const { hostname, origin } = window.location;

    const gitUrl = 'https://taiseen.github.io/learning-css-js/'; // GitHub Live URL

    return hostname === '127.0.0.1' || hostname === 'localhost'
        ? origin + '/'
        : gitUrl;

}

export default getBaseUrl;