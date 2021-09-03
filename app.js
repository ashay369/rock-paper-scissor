$(document).ready(function () {

let names = ["ashay", "john", "jonny",];



    for(i=0; i<5; i++) {
        console.log(names[i ]);
    }
    




    const options = ['p', 'r', 's'];

    let userScore = 0;
    let compScore = 0;
    
    function capitalize(choice){
        if(choice == "p"){
            return "Paper";
        }else if(choice == "s"){
            return "Scissor";
        }else if(choice == "r"){
            return "Rock";
        }
    }


    function draw(cc, uc){
        $(".result").text(`${capitalize(uc)}(user) and ${capitalize(cc)}(computer), its a draw`);
    }

    function win(cc, uc){
        $(".result").text(`${capitalize(uc)}(user) beats ${capitalize(cc)}(computer), User Wins`);

        $("#user-score").text(++userScore);
    }

    function loss(cc, uc){
        $(".result").text(`${capitalize(cc)}(computer) beats ${capitalize(uc)}(user), computer Wins`);
        $("#comp-score").text(++compScore);
    }

    //computer choice
    

    //User's choice
    $(".choice").click(function(){
        
        const computerChoice = options[Math.floor(Math.random()*3)];


        const userChoice = $(this).attr("id");

        

        switch (computerChoice+userChoice) {
            case 'pp':
                draw(computerChoice,userChoice);
                break;
            case 'ps':
                win(computerChoice,userChoice);
                break;
            case 'pr':
                loss(computerChoice,userChoice);
                break;
            case 'sp':
                loss(computerChoice,userChoice);
                break;
            case 'ss':
                draw(computerChoice,userChoice);
                break;
            case 'sr':
                win(computerChoice,userChoice);
                break;
            case 'rp':
                win(computerChoice,userChoice);
                break;
            case 'rs':
                loss(computerChoice,userChoice)
                break;
            case 'rr':
                draw(computerChoice,userChoice);
                break;
        
            default:
                break;
        }

    });

    //Decide winner
    

    

    
})

