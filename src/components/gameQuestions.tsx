import welcomeScreen from "./Game";

function QuestionList() {
    interface questionOptions {
        triviaTopic:string;
        triviaQuestion: string;
        answer: string;
        optionOne: string;
        optionTwo: string;
        optionThree: string;
        optionFour: string;
    }

    const question: questionOptions[] = [{
        triviaTopic:"Disney",
        triviaQuestion:"Disney's Animal Kingdom theme park opened in Florida in Which Year?",
        answer:"1998",
        optionOne:"1998",
        optionTwo:"1990",
        optionThree:"2004",
        optionFour:"2010",
    },
    {
        triviaTopic:"Disney",
        triviaQuestion:"Nemo ends up in a Tank in which sort of office?",
        answer:"Dentist Office",
        optionOne:"Home Office",
        optionTwo:"Garden Office",
        optionThree:"Cellular Office",
        optionFour:"Team Office",
    },
    {
        triviaTopic:"Disney",
        triviaQuestion:"What is the Name of Buzz and Woody's original owner in Toy Story?",
        answer:"Andy",
        optionOne:"David",
        optionTwo:"Andy",
        optionThree:"Marcus",
        optionFour:"Samuel",
    },
    {
        triviaTopic:"Disney",
        triviaQuestion:"What is the Last Name of the Family in Mary Poppins?",
        answer:"Banks",
        optionOne:"Williams",
        optionTwo:"Banks",
        optionThree:"Smith",
        optionFour:"Wilson",
    },
    {
        triviaTopic:"Disney",
        triviaQuestion:"Let it Go' is a song from which famous Disney Animated Movie?",
        answer:"Frozen",
        optionOne:"Toy Story",
        optionTwo:"The Lion King",
        optionThree:"Aladdin",
        optionFour:"Frozen",
    },
    {
        triviaTopic:"Disney",
        triviaQuestion:"Gaston is the Villian in Which Disney Movie?",
        answer:"Beauty and The Beast",
        optionOne:"Beauty and The Beast",
        optionTwo:"Frozen",
        optionThree:"Tangled",
        optionFour:"Inside Out",
    },
    {
        triviaTopic:"Food Facts",
        triviaQuestion:"What is used to tell the temperature of sugar when making candy?",
        answer:"Sugar Thermometer",
        optionOne:"Weather Thermometer",
        optionTwo:"Sugar Thermometer",
        optionThree:"Measuring Spoon",
        optionFour:"Measuring Cup",
    },
    {
        triviaTopic:"Food Facts",
        triviaQuestion:"Which of the Following is not a member of the stone fruit family?",
        answer:"Strawberry",
        optionOne:"Cherry",
        optionTwo:"Plums",
        optionThree:"Strawberry",
        optionFour:"Peach",
    },
    {
        triviaTopic:"Food Facts",
        triviaQuestion:"What is the main ingredient in the French Stew Bouillabaisse?",
        answer:"Seafood",
        optionOne:"Carbohydrates",
        optionTwo:"Broth",
        optionThree:"Onion",
        optionFour:"Potato",
    },
    {
        triviaQuestion:"Food Facts",
        triviaTopic:"Which of the Following is Traditionally made with Buttermilk?",
        answer:"Ranch Dressing",
        optionOne:"Ranch Dressing",
        optionTwo:"Pancakes",
        optionThree:"Cheese",
        optionFour:"Blue Cheese Dressing",
    },
    {
        triviaTopic:"Food Facts",
        triviaQuestion:"Ketchup is a sauce traditionally with a base of what ingredient?",
        answer:"Tomato",
        optionOne:"Celery",
        optionTwo:"Lemons",
        optionThree:"Ketchup",
        optionFour:"Onion",
    },
    {
        triviaTopic:"Board Games",
        triviaQuestion:"What is the Color of the arrow in the Go Square in Monopoly?",
        answer:"Red",
        optionOne:"Red",
        optionTwo:"Blue",
        optionThree:'Green',
        optionFour:"Yellow",
    },
    {
        triviaTopic:"Board Games",
        triviaQuestion:"In Chess, which piece can only move in an L-Shape",
        answer:"Knight",
        optionOne:"Rook",
        optionTwo:"Knight",
        optionThree:"Queen",
        optionFour:"Pawn",
    },
    {
        triviaTopic:"Board Games",
        triviaQuestion:"In a Game of Sorry!, How Many Pawns does each Player Have?",
        answer:"4",
        optionOne:"4",
        optionTwo:"6",
        optionThree:"2",
        optionFour:"1",
    },
    {
        triviaTopic:"Board Games",
        triviaQuestion:"In a Game of Uno, How many cards does each player start with?",
        answer:"7",
        optionOne:"4",
        optionTwo:"10",
        optionThree:"3",
        optionFour:"8",
    },
    {
        triviaTopic:"Board Games",
        triviaQuestion:"In a Game of Connect Four, How many Checkers does each Player Have?",
        answer:"21",
        optionOne:"12",
        optionTwo:"22",
        optionThree:"21",
        optionFour:"6",
    },
    {
        triviaTopic:"Board Games",
        triviaQuestion:"In a Game of Candy Land, What is the name of the final destination on the Game Board?",
        answer:"Candy Castle",
        optionOne:"Candy Land",
        optionTwo:"Sugar Rush",
        optionThree:"Gumdrop Kingdom",
        optionFour:"Candy Castle",
    },
    {
        triviaTopic:"Music",
        triviaQuestion:"What sort of musical instrument is a 'fiddle'",
        answer:"Violin",
        optionOne:"Guitar",
        optionTwo:"Flute",
        optionThree:"Chello",
        optionFour:"Violin"
    },
    {
        triviaTopic:"Music",
        triviaQuestion:"The Music Mamma Mia! is based on Whose Music?",
        answer:"Abba",
        optionOne:"Abba",
        optionTwo:"Maroon 5",
        optionThree:"The Platters",
        optionFour:"The Beach Boys",
    },
    {
        triviaTopic:"Music",
        triviaQuestion:"Which of these musical instruments is played by plucking or strumming?",
        answer:"Banjo",
        optionOne:"Violin",
        optionTwo:"Guitar",
        optionThree:"Banjo",
        optionFour:"Chello",
    },
    ];
    return(
        <h1>This Returned something</h1>
    )
}

export default QuestionList