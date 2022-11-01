// const callback = (items, observer) => {
//     items.forEach((item) => {
//         if (item.isInstersecting) {
//             loadImages(item.target);
//             observer.unobserve(item.target);
//         }
//     });
// }

// let options = {
//     threshhold: 1.0
// }

// const observer = new IntersectionObserver(callback, options);

// imagesToLoad

// 1em = standard size of your font (13pt)
// 60 * 13 = 780px
// large 680 px

// gather images to load
let imagesToLoad = document.querySelectorAll('img[data-src]');

// set up the load images function which switches the 
// source amd data source attributes
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'))
    image.onLoad = () => {
        image.removeAttribute('data-src');
    }
};

// load all the images (lazy)
// imagesToLoad.forEach((quinn) => {
//     loadImages(quinn);
// });

// the observer is looking at things on your screen

// set up observer so when an img is being observed, load the image
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    imagesToLoad.forEach((img) => {observer.observe(img)});
}
// if there is no intersection observer, skip all the fun stuff *cough* internet explorer *cough*
else {
    imagesToLoad.forEach((img) => loadImages(img));
}