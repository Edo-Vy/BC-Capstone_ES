/**
 *  Phương thức GET
 */

function getProductApi() {

    let promise = axios({

        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: JSON,
    })

    // Xử lý thành công
    promise.then(function (result) {

        renderProductApi(result.data.content);
    })
    // Xử lý thất bại
    promise.catch(function (erro) {
        console.log(erro);
    })
}

// Gọi hàm khi page vừa load

window.onload = function () {
    getProductApi();
}

/**
 * Hàm này sẽ nhận vào arrProduct
 * @param {*} arrProduct 
 */
function renderProductApi(arrProduct) {

    let html = '';
    arrProduct.map((item, index) => {

        if (index < 6) {

            html += `
                    <div class="card card__wrap">
                    <div class="card__item-${item.id}">
                        <div class="card__img">
                        <img
                            src="${item.image}"
                            class="card-img-top"
                            alt="..."
                        />
                        </div>

                        <div class="card-body">
                        <h5 class="card-title">${item.alias}</h5>
                        <p class="card-text">${item.shortDescription}</p>
                        <div class="card__des">
                            <button class="btn__Buy">Buy Now</button>
                            <p class="card__price">${item.price}</p>
                        </div>
                        </div>
                    </div>
                    </div>
            `;
        }
      
    })
    document.querySelector('.product__group').innerHTML = html;
}