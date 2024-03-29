import * as linkAPI from '../config/linkApi.config'
import { callApi } from '../helper/api.helper'

export function getAllLevel() {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.GET_ALL_LEVEL(), "GET")
            .then(data => {
                resolve(data.Response);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function getLevelById(id) {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.GET_LEVEL_BY_ID(id), "GET")
            .then(data => {
                resolve(data.Object);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function createNewLevel(values) {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.CREATE_LEVEL(), "POST", {
            title: values.title,
            description: values.description,
            image: values.image,
        })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err);
            });
    })
}

export function updateLevel(id, values) {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.UPDATE_LEVEL(), "PUT", {
            id: id,
            title: values.title,
            description: values.description,
            image: values.image
        })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function deleteLevel(id) {
    return new Promise((resolve, reject) => {
        callApi(linkAPI.DELETE_LEVEL(id), "DELETE")
            .then(data => {
                resolve(data)
            })
            .catch(err => reject(err))
    })
}
