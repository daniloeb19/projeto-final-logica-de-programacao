const getUserChoice = (userInput) => {
    userInput = userInput.toString().toLowerCase();//Pedra --> pedra

    switch (userInput) {
        case "pedra":
            return userInput;
            break;
        case "papel":
            return userInput;
            break;
        case "tesoura":
            return userInput;
            break;
        default:
            console.log("Desculpe, a entrada não foi reconhecida como pedra, papel ou tesoura.");
            return 0;
    }
}

const getComputerChoice = () => {
    var computerOut = Math.floor(Math.random() * 3);//números aleátorios entre 0 a 2

    switch (computerOut) {
        case 0:
            return "pedra";
            break;
        case 1:
            return "papel";
            break;
        case 2:
            return "tesoura";
            break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        return "Houve um empate";
    } else {
        if (userChoice == "pedra" && computerChoice == "tesoura") {
            return "Você ganhou";
        } else if (userChoice == "tesoura" && computerChoice == "pedra") {
            return "Máquina ganhou";
        } else if (userChoice == "papel" && computerChoice == "tesoura") {
            return "Máquina ganhou";
        } else if (userChoice == "tesoura" && computerChoice == "papel") {
            return "Você ganhou";
        } else if (userChoice == "papel" && computerChoice == "pedra") {
            return "Você ganhou";
        } else if (userChoice == "pedra" && computerChoice == "papel") {
            return "Máquina ganhou";
        }
    }
}
const playGame = () => {

    let userChoiceInput = getUserChoice(prompt("Pedra, papel ou tesoura?"));
    userChoiceInput = userChoiceInput.toString().toLowerCase();

    while (userChoiceInput != "pedra" && userChoiceInput != "papel" && userChoiceInput != "tesoura") {
        userChoiceInput = getUserChoice(prompt("Opção informada foi inválida\nEscolha entre: pedra, papel ou tesoura."));
        userChoiceInput = userChoiceInput.toString().toLowerCase();
        console.log("Usuário escolheu: " + userChoiceInput);
    }

    console.clear();

    console.log("Usuário escolheu: " + userChoiceInput);

    let computerChoice = getComputerChoice();
    console.log("Máquina escolheu: " + computerChoice);
    console.log(determineWinner(userChoiceInput, computerChoice));
}

playGame();