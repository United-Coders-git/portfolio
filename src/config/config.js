export function getApiIp() {
    return import.meta.env.VITE_API_HOST;
}

export function getApiProtocol() {
    return import.meta.env.VITE_API_PROTOCOL;
}

export function getApiBaseUri() {
    return import.meta.env.VITE_API_BASE_URI;
}

export function getApiEmail() {
    return import.meta.env.VITE_API_EMAIL;
}

export function buildBaseUrl() {
    const protocol = getApiProtocol();
    const ip = getApiIp();
    const base = getApiBaseUri();

    if (protocol && ip && base) {
        return `${protocol}://${ip}${base}`;
    }

    return undefined;
}

export function getEmail() {
    const email = getApiEmail();

    if (email) {
        return email;
    }

    return undefined;
}