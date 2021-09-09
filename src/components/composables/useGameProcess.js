import { computed } from 'vue';
import { FIELD, GAME_STATUS, DEFAULT_DIFFICULT, GAME_SPEED } from "../../constants";

export default function useGameProcess(fields, gameStatus, difficult) {

    const selectField = (id) => {
      const index = fields.value.findIndex((field) => {
          return field.id === id
      });

      if (index > -1 && !fields.value[index].clicked) {
          fields.value[index].clicked = true;
          checkGame();
      }
    }

    const checkGame = () => {
        const errorIndex = fields.value.findIndex(field => {
            return field.clicked && field.value === FIELD.EMPTY;
        });

        if (errorIndex > -1) {
            setGameOver();
            return;
        }

        const notFoundItemIndex = fields.value.findIndex(field => {
            return !field.clicked && field.value === FIELD.FILLED;
        });

        if (notFoundItemIndex === -1) {
            setWin();
        }
    }

    const setGameOver = () => {                     
        gameStatus.value = GAME_STATUS.FAIL;
        difficult.value = DEFAULT_DIFFICULT;
    }

    const setWin = () => {        
        setTimeout(async () => {
            gameStatus.value= GAME_STATUS.WIN;
            difficult.value += 1;            
        }, GAME_SPEED);
    }

    const isWin = computed(() => {
        return gameStatus.value === GAME_STATUS.WIN;
    });

    const isFail = computed(() => {
        return gameStatus.value === GAME_STATUS.FAIL;
    });

    return {
        selectField,
        isWin,
        isFail
    }
}