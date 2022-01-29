export function getSessionStorageOrDefault(key: string, defaultValue: string) {
    const stored = localStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    return stored;
}