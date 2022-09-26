import {getToken} from "./storage.js";

export default {
    get(route) {
        return fetch(route, {
            headers: {
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(res => res.json());
    },
    post(route, data) {
        return fetch(route, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            },

        }).then(res => res.json());
    },
    destroy(route) {
        return fetch(route, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            },
        })  ;
    },
    put(route, data) {
        return fetch(route, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(res => res.json());
    }
}