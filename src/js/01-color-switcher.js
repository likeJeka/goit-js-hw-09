
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
  
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  let timerId = null;
  
  function changeColor() {
    const randomColor = getRandomHexColor();
    startButton.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
  }
  
  function startChangingColor() {
    timerId = setInterval(changeColor, 1000);
    startButton.removeEventListener('click', startChangingColor);
  }
  
  startButton.addEventListener('click', startChangingColor);
  
  stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    startButton.addEventListener('click', startChangingColor); 
  });
  

