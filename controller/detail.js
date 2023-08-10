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
        renderProductApi(pro.relatedProducts);
        // console.log(pro.relatedProducts);
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

function renderProductApi(arrProduct) {

    let html = '';
    arrProduct.map((item, index) => {

        if (index < 6) {

            html += `
                <div class="card card__wrap">
                    <a href="./detail.html?product=${item.id}" class="product__card" onclick ="product('${item.id}'")>
                        <div class="card__item card__item-${item.id}">
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
                                     <p class="card__price">${item.price}$</p>
                                 </div>
                             </div>
                         </div>
                    </a>
                </div>
            `;
        }
      
    })
    document.querySelector('.product__group').innerHTML = html;
}