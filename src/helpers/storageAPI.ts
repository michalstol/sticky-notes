const storageAPI = {
    set: function <T>(key: string, item: T): void {
        localStorage.setItem(key, JSON.stringify(item));
    },
    get: function <T>(key: string): T {
        const data = JSON.parse(localStorage.getItem(key) || '{}');

        return data;
    },
};

export default Object.freeze(storageAPI);
