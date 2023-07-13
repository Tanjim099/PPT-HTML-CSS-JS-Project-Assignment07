// Quiz questions and answers
const quizData = [
    {
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: 0 // Index of the correct answer
    },
    {
      question: "Question 2",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: 1
    },
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  const leaderboardElement = document.getElementById('leaderboard');
  const resultElement = document.getElementById('result');
  
  // Load the first question
  loadQuestion();
  
  // Load question and answer options
  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.innerText = currentQuiz.question;
    optionsElement.innerHTML = '';
  
    currentQuiz.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerText = option;
      optionElement.addEventListener('click', () => selectAnswer(index));
      optionsElement.appendChild(optionElement);
    });
  }
  
  // Select and check user's answer
  function selectAnswer(selectedIndex) {
    const currentQuiz = quizData[currentQuestion];
    if (selectedIndex === currentQuiz.answer) {
      score++;
      showPopup(true);
    } else {
      showPopup(false);
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showLeaderboard();
    }
  }
  
  // Show popup indicating correct or incorrect answer
  function showPopup(isCorrect) {
    const popupElement = document.createElement('div');
    popupElement.classList.add('popup');
    popupElement.classList.add(isCorrect ? 'correct' : 'incorrect');
    popupElement.innerHTML = `
      <h3>${isCorrect ? 'Correct!' : 'Incorrect!'}</h3>
      <button class="popup-btn">Next</button>
    `;
    document.body.appendChild(popupElement);
  
    const popupButton = popupElement.querySelector('.popup-btn');
    popupButton.addEventListener('click', () => {
      popupElement.remove();
    });
  }
  
  // Show leaderboard with overall result
  function showLeaderboard() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    submitButton.style.display = 'none';
  
    leaderboardElement.innerHTML = `
      <h2>Leaderboard</h2>
      <p>Correct Answers: ${score}</p>
      <p>Incorrect Answers: ${quizData.length - score}</p>
    `;
    leaderboardElement.style.display = 'block';
  
    resultElement.innerText = `Your Overall Result: ${score}/${quizData.length}`;
    resultElement.style.display = 'block';
  }
  