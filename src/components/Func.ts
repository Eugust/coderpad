export function getLocalStorageOrDefault(key: string, defaultValue: string) {
    const stored = localStorage.getItem(key);
    if (!stored) {
        return defaultValue;
    }
    return stored;
}

export const commitEvent = (commit: string | undefined, code: string) => {
    if (commit) {
        if (commit.startsWith(`/*`) && commit.endsWith(`*/`)) {
            let newCommit = (commit.replace(`/*`, ``)).replace(`*/`, ``)
            return code.replace(commit, newCommit)
        }
        return code.replace(commit, `/*${commit}*/`)
    }
    return code
}
