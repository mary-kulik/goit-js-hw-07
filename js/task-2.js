const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-img"></li>`)
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);


gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap'; 
gallery.style.gap = '48px 24px'; 
gallery.style.justifyContent = 'center';
gallery.style.listStyle = 'none';
gallery.style.padding = '0';
gallery.style.margin = '0';

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.style.flex = '0 1 calc(33.33% - 24px)';
  item.style.display = 'flex';
  item.style.justifyContent = 'center';
})

const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
  img.style.width = '360px'; 
  img.style.height = '300px'; 
  img.style.objectFit = 'cover';
});