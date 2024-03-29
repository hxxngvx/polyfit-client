import * as linkAPI from '../config/linkApi.config'
import { callApi } from '../helper/api.helper'

export function getAllIngredients() {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.GET_ALL_INGREDIENTS(), "GET")
            .then(data => {
                resolve(data.Response);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function createNewIngredients(values) {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.CREATE_INGREDIENTS(), "POST", {
            title: values.title,
            image_url: values.image_url,
        })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err);
            });
    })
}

export function updateIngredients(id, values) {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.UPDATE_INGREDIENTS(), "PUT", {
            id: id,
            title: values.title,
            image_url: values.image_url,
        })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function deleteIngredients(id) {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.DELETE_INGREDIENTS(id), "DELETE")
            .then(data => {
                resolve(data)
            })
            .catch(err => reject(err))
    })
}
