document.addEventListener('DOMContentLoaded', () => {
    const zoomFactor = 0.8;
  
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
  
      const startPositionX = Math.random() * (window.innerWidth / zoomFactor);
      const startPositionY = -Math.random() * 50; 
  
      snowflake.style.left = `${startPositionX}px`;
      snowflake.style.top = `${startPositionY}px`;
  
     
      const animationDuration = 5 + Math.random() * 5;
      const fallDistance = window.innerHeight / zoomFactor; 
  
      snowflake.style.setProperty('--fall-distance', `${fallDistance}px`);
      snowflake.style.setProperty('--animation-duration', `${animationDuration}s`);
  
      document.body.appendChild(snowflake);
  
      setTimeout(() => {
        if (snowflake.parentElement) snowflake.parentElement.removeChild(snowflake);
      }, animationDuration * 1000);
    }
  
    setInterval(createSnowflake, 50);
  });
  