<template>
  <span :class="getGameItemClasses" @click="select(field.id)"></span>
</template>

<script>
import { GAME_STATUS } from '@/constants';
import { FIELD } from '@/constants';
import { computed } from 'vue';
export default {
  name: 'GameItem',
  props: {    
    field: {
      type: Object,
      required: true,
    },
    gameStatus: {
      type: Number,
      required: false,
      default: GAME_STATUS.NONE
    }
  },
  setup(props) {
    const getGameItemClasses = computed(() => {
      let classes = "item " ;
      let cfield = props.field;
      if (cfield.value === FIELD.FILLED 
      &&
       props.gameStatus === GAME_STATUS.PREVIEW 
      || 
      cfield.clicked  && cfield.value === FIELD.FILLED 
      ) {
        classes += 'item-active ';
      }
      if (cfield.clicked && cfield.value === FIELD.EMPTY) {
        classes += 'item-error';
      }
      return classes;
    });
    return {
      getGameItemClasses
    }
  },
  methods: {
    select(id) {
      if (this.gameStatus === GAME_STATUS.STARTED) this.$emit('selectField', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
position: relative;
width: 50px;
height: 50px;
background: #ccc;
margin: 5px;
cursor: pointer;
display: inline-block;
transition: 0.4s;
transform-style: preserve-3d;
}

.item-active {
background: green;
transform: rotateX(180deg);
}

.item-error {
background: red;
transform: rotateX(180deg);
}
</style>
