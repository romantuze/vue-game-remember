<template>
<div class="app">
  <h1>Game Remember me</h1>
  <p>Запомни и открой все клетки</p>
  <Game />
</div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style scoped>
.app {
text-align: center;
margin-top: 40px;
font-family: Helvetica;
}
</style>
