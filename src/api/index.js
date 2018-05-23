const BASE ="http://localhost:3000"

let getApartments = function(){
    return fetch(BASE+'/apartments').then( (rawResponse) => {
        let parsedResponse = rawResponse.json()
        return parsedResponse
    })
}
export {getApartments}

let createApartment = function(form){
    console.log(form);
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
    console.log(user);
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
