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

       <div class="card bg-base-100 ">
        <figure class="relative">
          <img class = "w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
          <span
            class="absolute bottom-2 right-2 text-white bg-black rounded p-1 text-sm"
            >3hrs and 65 min ago</span
          >
        </figure>
        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2"
              >
                <img
                  src="${video.authors[0].profile_picture}"
                />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">${video.title}</h2>
            <p class="text-sm font-semibold text-gray-400 flex gap-1">${video.authors[0].profile_name}<img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
            </p>
            <p class="text-sm font-semibold text-gray-400" >${video.others.views} views</p>
            
          </div>
        </div>
      </div>


        `
        videoContainer.append(videoCard);
    })
}




loadCategories();
loadVideos();
