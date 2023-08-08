window.onload = function () {
    getProductByID();
}

function getProductByID() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const myParams = urlSearchParams.get('product');
    console.log('myParams', myParams);

    let pro = {};

    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParams}`,
        method: 'GET',
        ResponseType: JSON,
    })
    // Xử lý thành công

    promise.then(function (result) {

        pro ={...result.data.content};
        renderProByID(pro);
    })
    // Xử lý thất bại
    promise.catch(function (err) {

        console.log('erro', err)
    })

}

function renderProByID(pro) {

    let html = '';
    html = ` <div class="detail__thumbnail col-5">
                 <img src="${pro.image}" alt="" />
            </div>
            <div class="detail__content col-7">
                <div class="detail__title">
                <h3>${pro.name}</h3>
                <p> ${pro.description}</p>
                </div>
                <div class="detail__available">
                <p>Available size</p>
                <div class="detail__size">
                    <button class="btn btn__size">38</button>
                    <button class="btn btn__size">39</button>
                    <button class="btn btn__size">40</button>
                    <button class="btn btn__size">41</button>
                    <button class="btn btn__size">42</button>
                </div>
                <p class="detail__price">${pro.price}$</p>
                </div>
                <div class="detail__count row">
                <button class="btn btn__count col">+</button>
                <p class="col">1</p>
                <button class="btn btn__count col">-</button>
                </div>
                <div class="detail__cart">
                <button class="btn btn__cart">Add to cart</button>
                </div>
            </div>
         `;

  document.querySelector('.detail__main').innerHTML = html;
}