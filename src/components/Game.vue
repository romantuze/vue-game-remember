<template>
  <div class="board-wrapper">
    <div class="board">
      <GameItem 
      v-for="field in fields"
      :field="field" 
      :game-status="gameStatus"
      :key="'item-' + field.id" 
      @selectField="selectField($event)"
      />
    </div>

    <div class="difficult">
      <p>Сложность: {{difficult}}</p>
    </div>
  
    <div class="win" v-if="isWin">
      <p>Вы выиграли!</p>
    </div>

    <div class="fail" v-if="isFail">
      <p>Вы проиграли!</p>
    </div>

    <div class="btn-start">
      <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
    </div>
  </div>
</template>

<script>
import GameItem from './GameItem';
import {ref} from 'vue';
import useGameInit from '@/components/composables/useGameInit';
import useGameStart from '@/components/composables/useGameStart';
import useGameProcess from '@/components/composables/useGameProcess';
import { NUMBER_FIELDS, GAME_STATUS } from "@/constants";

export default { 
  name: 'Game',
  props: {},
  components: {
    GameItem
  },
  setup() {    
    const number = NUMBER_FIELDS;

    const gameStatus = ref(GAME_STATUS.NONE);

    const { difficult, fields, init } = useGameInit(number);

    const { start, canStartGame } = useGameStart(init, fields, difficult, number, gameStatus);

    const { selectField, isWin, isFail } = useGameProcess(fields, gameStatus, difficult);

    return {
      difficult,
      fields,
      number,
      init,
      start,
      gameStatus,
      canStartGame,
      selectField,
      isWin,
      isFail
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board-wrapper {
padding: 20px 0 0 0;
margin-bottom: 40px;
}

.board {
width: 300px;
background: #eee;
margin: 0 auto;
overflow: hidden;
}

.btn {
background: green;
color: white;
border: none;
border-radius: 2px;
padding: 10px;
margin: 10px 0;
cursor: pointer;
outline: none;
}

.btn:hover {
background: lightgreen;
}

.win {
color: green;
}

.fail {
color: red;
}
</style>