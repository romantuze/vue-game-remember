import { computed } from 'vue';
import { GAME_STATUS, FIELD, GAME_SPEED } from '../../constants';



export default function useGameStart(init, fields, difficult, number, gameStatus) {

   const start = () => {
       init();
       prepareGame();
   }

   const rand = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const prepareGame = () => {  
    gameStatus.value = GAME_STATUS.PREVIEW;
    
    for (let i = 0; i < difficult.value; i++) {
        const index = rand(0 , number - 1);
        if (fields.value[index].value !== FIELD.FILLED) {
          fields.value[index].value = FIELD.FILLED;
        } else {
          i--;
        }
    }

    setTimeout(() => {        
        gameStatus.value = GAME_STATUS.STARTED;      
    }, GAME_SPEED);
  
   };

   const canStartGame = computed(() => {
      return gameStatus.value !== GAME_STATUS.PREVIEW;
   });

    return {
        start,
        canStartGame
    }
}