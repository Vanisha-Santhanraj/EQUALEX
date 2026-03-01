// function firm(j){
//     let demo=document.querySelector("nav");
//     if(j=='open'){
//         demo.style="right:20px"
//     }

//     else if(j=='close'){
//         demo.style="right:-100%";
//     }
// }

// Initialize 

(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); 
})();

document.getElementById("enquiry-form")
.addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
      document.getElementById("status").innerHTML = 
      "✅ Enquiry sent successfully!"; 
    }, function(error) {
      document.getElementById("status").innerHTML = 
      "❌ Failed to send. Try again.";
    });
});