let categories = [];
// category = document.querySelector('#addCatInput').value;
function addCat(category) {
    // const addCatInput = document.querySelector('#addCatInput');
    category = document.querySelector('#addCatInput').value;
    // filt = String(filt);
    const catButtonWrap = document.querySelector('.cat-wrap');
    let catButton = `<button onclick="filterVids('${category}')" id="${category}" style="display:block;">${category}</button>`;
    

    catButtonWrap.insertAdjacentHTML('afterbegin',catButton);
    categories.push(category);
    // return category;
}
function filterVids(filt){     
    let filter = document.querySelectorAll(`.${filt}`);
    filter.forEach(element => {
        if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }          
        
    });
    
}
