const previewsContainer = document.querySelector(".previews-container");
const previews = document.querySelectorAll(".story-preview");

const detailContainer = document.querySelector(".detail-container");
const detailTitle = detailContainer.querySelector("h1");
const vimeoEmbed = document.querySelector("iframe");

const data = [
    [
        "Catchy title!",
        "Some cool description",
        "https://player.vimeo.com/video/773403299?h=17278abddc&badge=0&autopause=0&player_id=0&app_id=58479/embed",
    ],
    [
        "Catchy title!",
        "Some cool description",
        "https://player.vimeo.com/video/773403798?h=a643d43a7e&badge=0&autopause=0&player_id=0&app_id=58479/embed",
    ],
    [
        "Catchy title!",
        "Some cool description",
        "https://player.vimeo.com/video/773405792?h=820afeb133&badge=0&autopause=0&player_id=0&app_id=58479/embed",
    ],
];

previews.forEach((preview, index) => {
    // set title and description
    preview.querySelector("h2").innerHTML = data[index][0];
    preview.querySelector("p").innerHTML = data[index][1];

    // add click event listener
    preview.addEventListener("click", function () {
        // hide all previews
        previewsContainer.classList.add("invisible");
        // show story detail
        detailTitle.innerHTML = data[index][0];
        vimeoEmbed.setAttribute("title", data[index][0]);
        vimeoEmbed.setAttribute("src", data[index][2]);
        detailContainer.classList.remove("invisible");
    });
});