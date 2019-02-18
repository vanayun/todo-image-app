<template>
  <div class="todo-item" @click="() => {}">
    <div class="check-box">
      <input
        type="checkbox"
        id="checkbox"
        v-model="todo.done"
        ref=true
      >
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div class="todo-content" @click.prevent="handleClick">
      <span>{{todo.content}}</span>
      <span>{{todo.createdAt}}</span>
    </div>
    <div class="remove-button">
      <button @click="removeTodo(index)">
        remove
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  props: {
    index: Number,
    todo: Object,
    removeTodo: Function,
  },
})
export default class TodoListItem extends Vue {
  public handelClick() {
    this.$props.todo.done = !this.$props.done;
  }
}
</script>
<style scoped>

</style>
