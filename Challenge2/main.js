
//function checkSpeed is called when the button is clicked

//I have used arrow function 



const checkSpeed  = () => {

let speed = document.getElementById('speed') .value;


//for these if statements, I have used so as to be able to go through each speed.


    if (speed >= 1 && speed <= 70) {
        document.getElementById("answer").innerHTML =  "Your speed is OK";
    }

    else if (speed >= 70) {

        
        let points = Math.floor((speed - 70) / 5);
        
        if (points >= 12) {

            //I have used getelementById to display the answer in the html file 

            document.getElementById("answer").innerHTML =  "You exided 12 poinst :  License suspended ";
          

        }
        else { 

            document.getElementById("answer") .innerHTML = points + " points";
           

        }

    }
}





