// // 1. Ageee API ta load korthe hbe function diye

// // loadCategories function start
// function loadCategories(){
//     //1. Fetch korthe hbe
//     fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     //2. Promise takee json() e convert korthe  hbe
//     .then((res)=>res.json())
//     //3. Then Again promise takee data tee convert kore niye asboo
//     .then(data=> displayCategories(data.categories));
// }
// loadCategories();

// function displayCategories(categories){
//     //1. Get the container
//     const categoryContainer = document.getElementById("category-container");
//     //2. Loop operation of [array of object]
//     for( let cat of categories )
//     {
//         //3. Create an element
//         const categoryDiv = document.createElement("div");
//         categoryDiv.innerHTML = `
//          <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
//         `
//         //4. Append the element into the mother section.
//         categoryContainer.appendChild(categoryDiv);
//     }
// }
// // loadCategories function end

function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then(data=>displayCategories(data.categories));
}
function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then(data => displayVideos(data.videos));
}





function displayCategories(categories) {
    const categoryContainer = document.getElementById("category-container");

    for( let cat of categories )
    {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv);
        
    }
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach((video)  => {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `

        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


        `
        videoContainer.append(videoCard);
    })
}




loadCategories();
loadVideos();
