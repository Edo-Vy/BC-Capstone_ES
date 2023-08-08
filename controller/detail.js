window.onload = function(){
 getProductByID();
}

function getProductByID(){
    const urlSearchParams = new URLSearchParams(window.location.search);
    const myParams = urlSearchParams.get('product');
    console.log('myParams',myParams);

    let pro = {};
    
}