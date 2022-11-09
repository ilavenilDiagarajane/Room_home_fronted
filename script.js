var value = 1;

// var array=[
//   {
//     image:"images/desktop-image-hero-1.jpg",
//     title:"Discover innovative ways to decorate",
//     description:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
//   },
//   {
//     image:"images/desktop-image-hero-2.jpg",
//     title:"We are available all across the globe",
//     description:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator.  Any questions? Don't hesitate to contact us today."
//   },
//   {
//     image:"images/desktop-image-hero-3.jpg",
//     title:"Manufactured with the best materials",
//     description:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
//   }
// ]

function backward() {

  
  if (value != 1) {
    value--;
  }

  if (value >= 1) {
    document.getElementById(
      "preview-image"
    ).src = `images/desktop-image-hero-${value}.jpg`;
  }
  if (value === 1) {
    document.getElementById("title").innerHTML =
      "Discover innovative ways to decorate";
    document.getElementById(
      "para"
    ).innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. 
      Create a room in your own style with our collection and make your property a reflection of you and what you love.`;
  }
  if (value === 2) {
    document.getElementById("title").innerHTML =
      "We are available all across the globe ";
    document.getElementById(
      "para"
    ).innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
     Locally, we’re in most major cities throughout the country. 
    Find the branch nearest you using our store locator. 
    Any questions? Don't hesitate to contact us today. `;
  }
  if (value === 3) {
    document.getElementById("title").innerHTML =
      "Manufactured with the best materials ";
    document.getElementById(
      "para"
    ).innerHTML = ` Our modern furniture store provide a high level of quality.
     Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. 
     With three decades of experience in this industry, we understand what customers want for their home and office. `;
  }
}
function forword() {
  value++;
  if (value <= 3) {
    document.getElementById(
      "preview-image"
    ).src = `images/desktop-image-hero-${value}.jpg`;
  }
  if (value === 1) {
    document.getElementById("title").innerHTML =
      "Discover innovative ways to decorate";
    document.getElementById(
      "para"
    ).innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. 
      Create a room in your own style with our collection and make your property a reflection of you and what you love.`;
  }
  if (value === 2) {
    document.getElementById("title").innerHTML =
      "We are available all across the globe ";
    document.getElementById(
      "para"
    ).innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
     Locally, we’re in most major cities throughout the country. 
    Find the branch nearest you using our store locator. 
    Any questions? Don't hesitate to contact us today. `;
  }
  if (value === 3) {
    document.getElementById("title").innerHTML =
      "Manufactured with the best materials ";
    document.getElementById(
      "para"
    ).innerHTML = ` Our modern furniture store provide a high level of quality.
     Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. 
     With three decades of experience in this industry, we understand what customers want for their home and office. `;
  }
}
function displaymenu(){
  var x = document.getElementById("menu");
        if (x.className === "nav") {
          x.className = "responsive";
        } else {
          x.className = "nav";
        }
}
