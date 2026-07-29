/*==========================================
    WAIT UNTIL PAGE LOADS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        SCROLL REVEAL
    ==========================================*/

    const revealElements = document.querySelectorAll(
        ".company-introduction, .vision-section, .mission-section, .contact-section, .closing-banner"
    );

    revealElements.forEach(section => {
        section.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold:0.18

    });

    revealElements.forEach(section => {

        observer.observe(section);

    });




    /*==========================================
        ACTIVE NAVIGATION
    ==========================================*/

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navigation-link").forEach(link=>{

        const file=link.getAttribute("href");

        if(file===currentPage || (currentPage==="" && file==="index.html")){

            link.classList.add("active-link");

        }

    });




    /*==========================================
        BUTTON RIPPLE
    ==========================================*/

    document.querySelectorAll(".navigation-link").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=this.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";

            ripple.style.top=(e.clientY-rect.top)+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });




    /*==========================================
        BACK TO TOP BUTTON
    ==========================================*/

    const topButton=document.createElement("button");

    topButton.innerHTML="▲";

    topButton.className="back-to-top";

    document.body.appendChild(topButton);

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });




    /*==========================================
        SCROLL PROGRESS BAR
    ==========================================*/

    const progress=document.createElement("div");

    progress.className="scroll-progress";

    document.body.appendChild(progress);




    /*==========================================
        WINDOW SCROLL
    ==========================================*/

    window.addEventListener("scroll",()=>{

        /* progress */

        const scrollTop=document.documentElement.scrollTop;

        const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const percentage=(scrollTop/scrollHeight)*100;

        progress.style.width=percentage+"%";



        /* top button */

        if(scrollTop>300){

            topButton.classList.add("show-top");

        }

        else{

            topButton.classList.remove("show-top");

        }

    });




    /*==========================================
        HERO PARALLAX
    ==========================================*/

    const hero=document.querySelector(".hero-room");

    window.addEventListener("mousemove",(e)=>{

        if(!hero) return;

        const x=(e.clientX/window.innerWidth-.5)*10;

        const y=(e.clientY/window.innerHeight-.5)*10;

        hero.style.transform=
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });




    /*==========================================
        SMOOTH CARD HOVER
    ==========================================*/

    document.querySelectorAll(".section-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.backgroundPosition=x+"px "+y+"px";

        });

    });

});
