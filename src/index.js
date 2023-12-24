import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
function sendEmail() {
    const fromName=document.getElementById("name").value
    const fromEmail=document.getElementById("email").value
    const message=document.getElementById("message").value
    if(message.length===0 || fromName.length===0 || fromEmail.length===0){
        alert("The fields cant be empty")
    }
    else{

    
    emailjs.send("service_id4zm7b", "template_6zcmbew", {
    
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }, "Iius2lM9EnowdV6Rt")
      .then(function(response) {
        alert("Message sent successfully")
        console.log("Email sent successfully:", response);
        // You can add additional actions here if the email is sent successfully
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
      })
      .catch(function(error) {
        console.log("Email failed to send:", error);
        // Handle errors here
      });
    }
  }
  const detailSubmitButton=document.querySelector("#detailSubmitButton");
detailSubmitButton.onclick=sendEmail;