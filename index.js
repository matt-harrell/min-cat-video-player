let categories = [];
function addCat(category) {
    // const addCatInput = document.querySelector('#addCatInput');
    category = document.querySelector('#addCatInput').value;
    const catButtonWrap = document.querySelector('.cat-wrap');
    let catButton = `<button>${category}</button>`;
    

    catButtonWrap.insertAdjacentHTML('afterbegin',catButton);
    categories.push(category);
}

