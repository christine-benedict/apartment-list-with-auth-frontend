const BASE ="https://apartment-list-backend.herokuapp.com"

let getApartments = function(){
    return fetch(BASE+'/apartments').then( (rawResponse) => {
        let parsedResponse = rawResponse.json()
        return parsedResponse
    })
}
export {getApartments}

let createApartment = function(form){
    return fetch(BASE+'/apartments', {
        body: JSON.stringify(form),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
        .then((rawResponse) => {
            let parsedResponse = rawResponse.json()
            return parsedResponse
        })
}

export {createApartment}

let createUser = function(user){
    let newUser = {user: user}
    return fetch(BASE+'/users', {
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
        .then((rawResponse) => {
            let parsedResponse = rawResponse.json()
            return parsedResponse
        })
}

export {createUser}
