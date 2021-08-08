// DUMMY BACKEND AUTH SYSTEM

const BASE_URL = "http://localhost:8000" ;
/**
 * Login User returns 
 * @param  {String}   username   
 * @param  {String}   password 
 * @param  {Function} callback Function Signature (userData,errors)
 */
export const loginUser = async (username, password,callback) => {
    fetch(`${BASE_URL}/users?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
            if (data[0] && data[0].password === password) {
                callback(data[0],null);
            } else {
                callback(null,{code:"wrong username or password"}) ;
            }
        });
};


/**
 * Creates new User returns 
 * @param  {String}   username   
 * @param  {String}   password 
 * @param  {Function} callback Function Signature (userData)
 */
export const signupUser = (username, password,callback) => {

    // TODO : validate username and password
    // TODO : check existing user

    fetch(`${BASE_URL}/users`,{
        method: "POST",
        body  : JSON.stringify({
            username ,
            password 
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        callback(data);
    });
}
