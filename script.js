const counters = document.querySelectorAll(".counters span")
const container = document.querySelector(".counters")

// ----->Start: script for open and close menu bar

  var sidemen = document.getElementById("sidemenu");
  function openmenu() {
    sidemen.style.right = "0";
  }
  function closemenu() {
    sidemen.style.right = "-200px";
  }
// ----->end: script for open and close menu bar


// ---->Start: active Counter of number
let activated = false;

window.addEventListener("scroll", ()=> {
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200
        && activated === false
    ){
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if(count<target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                }else{
                    counter.innerText = target;
                }
            }

            updateCount();
            activated = true;
        });

        
    }else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 500
        || pageYOffset === 0
        && activated === true
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
        })
        activated = false
    }
}) 
// ---->End: active Counter of number