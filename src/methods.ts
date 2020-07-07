import { CREATED, OK } from "./codes";

export const del = async <T>(url: string): Promise<[number, T?]> => {

    const response = await fetch(url, {
        method: "DELETE",
    });

    if (response.status === OK) {

        const payload = await response.json() as T;
        return [response.status, payload];
    }

    return [response.status];
}

export const put = async <T>(url: string, payload: T): Promise<[number, T?]> => {

    const response = await fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    /*
    * NOTE: 
    * 204 NO_CONTENT is a perfectly valid response to PUT, but does not contain a body. 
    * 204 NO_CONTENT is handled the same way as all status codes other than 200 OK and 201 CREATED
    */
    if (response.status === OK || response.status === CREATED) {

        const payload = await response.json();
        return [response.status, payload as T];
    }

    return [response.status];
}

export const post = async <T>(url: string, payload: T): Promise<[number, T?]> => {

    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (response.status === CREATED) {
        const payload = await response.json();
        return [response.status, payload as T];
    }

    return [response.status]
}

export const get = async <T>(url: string): Promise<[number, T]> => {

    const response = await fetch(url);
    if (response.status === OK) {

        const payload = await response.json();
        return [response.status, payload as T];
    }

    return [response.status, {} as T];
}
