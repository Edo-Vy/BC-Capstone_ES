/**
 *  Phương Thức POST
 */

function postProductApi() {

    let promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: 'POST',
        ResponseType: JSON,

        // Data: {
        //     "email": "string",
        //     "password": "string",
        //     "name": "string",
        //     "gender": true,
        //     "phone": "string"
        // }
    })

    // Xử lý thành công 
    promise.then(function (result) {
        console.log(result.Data);
    })

    // Xử lý thất bại

    promise.catch(function (erro) {
        console.log(erro.response.Data);
    })
}

document.querySelector('.btnSubmit').onclick = function () {

    let info = new Infomation();
    info.email = document.querySelector('#email').value;
    info.name = document.querySelector('#name').value;
    info.phone = document.querySelector('#phone').value;
    info.password = document.querySelector('#password').value;
    info.passwordConfirm = document.querySelector('#passwordConfirm').value;
    info.gender = document.querySelector('#gender').value;

    console.log('info', info);

    // Gọi api

    postProductApi();
 
}