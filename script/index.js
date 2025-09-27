

// 1. Ageee API ta load korthe hbe function diye

// loadCategories function start
function loadCategories(){
    //1. Fetch korthe hbe
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2. Promise takee json() e convert korthe  hbe
    .then((res)=>res.json())
    //3. Then Again promise takee data tee convert kore niye asboo
    .then(data=> displayCategories(data.categories));
}
loadCategories();

function displayCategories(categories){
    //1. Get the container
    const categoryContainer = document.getElementById("category-container");
    //2. Loop operation of [array of object]
    for( let cat of categories )
    {
        //3. Create an element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
         <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        `
        //4. Append the element into the mother section.
        categoryContainer.appendChild(categoryDiv);
    }
}
// loadCategories function end
