// toggle icon navbar//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x-circle');
   navbar.classList.toggle('active');
};

// scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections .forEach(sec=> {
          let top = window.scrollY;
          let offset = sec.offsetTop- 150;
          let height  = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if(top >= offset && top <offset + height){
             navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
             });
          };
    });
// sticky navbar//
let header = document.querySelector('header');

header.classList.toggle('sticky',window .scrollY > 100);

         // remove toogle icon when clicked on navbar //
         
         menuIcon.classList.remove('bx-x-circle');
         navbar.classList.remove('active');  
};


            // scroll relevel//

    ScrollReveal({
      // reset: true,//
      distance : '80px',
      duration:2000 ,
      delay: 200  
    });        

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form' , {origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1,  .about-img', {origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
                   

         //  Multiple Text  (Typed js)//

         const typed = new Typed ('.multiple-text',{
            strings : ['Freelancer','Frontend Developer','Web Developer', 'App Developer', 'Graphic Designer'],
            typeSpeed : 100,
            backSpeed : 100,
            backDelay : 1000,
            loop : true
         });

         let readMore = document.querySelector("#readMore");

         readMore.onclick = () => {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("readMore");
          
            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more"; 
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less"; 
              moreText.style.display = "inline";
            }
         };

         //  Sending form data to mail//
         // function sendEmail (){
         //    Email.send({
         //       Host : "smtp.gmail.com",
         //       Username : "ayushtripathi8858@gmail",
         //       Password : "FD10C0449B07E91BC47876E4ABB40F9F28B5",
         //       To : 'ayushtripathi8858@gmail.com',
         //       From : document.getElementById("email").value,
         //       Subject : document.getElementById("emailSubject").value,
         //       Body : "Name :" + document.getElementById("name").value 
         //       + "Email :" +document.getElementById("email").value 
         //       + "Phone Number :" + document.getElementById("phoneNumber").value
         //       +"Message :" + document.getElementById("message").value
         //   }).then(
         //     message => alert("Message sent Succesfully")
         //   );
         // }


