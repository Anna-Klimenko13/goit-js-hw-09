import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as p}from"./assets/vendor-CgTBfC_f.js";const t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202820__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/riga-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Ship"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake"}],e=document.querySelector(".gallery"),n=t.map(({preview:a,original:i,description:o})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${o}"
        />
      </a>
    </li>`).join("");e.innerHTML=n;new p(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
