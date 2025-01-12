export const getBaseUrl = () => {
    const hostname = window.location.hostname;
    const port = '8072';
    return `http://${hostname}:${port}`;
};

export const config = {
    BOARD_API_URL: `${getBaseUrl()}/board/api`
};