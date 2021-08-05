<template>
  <div class="board-wrapper">
  <div class="board">
    <BoardItem />
  </div>

  <div class="difficult">
    <p>Сложность: {{difficult}}</p>
  </div>


  <div class="">
    <button class="btn">Старт</button>
  </div>
  </div>
</template>

<script>
import BoardItem from './BoardItem';
import {ref} from 'vue';
export default {
 
  name: 'Board',
  props: {},
  components: {
    BoardItem
  },
  setup() {
    const difficult = ref(3);
    return {
      difficult
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board-wrapper {
padding: 20px 0 0 0;
}

.board {
  width: 300px;
  background: #eeeeee;
  margin: 0 auto;
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


</style>
