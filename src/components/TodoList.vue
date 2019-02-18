<template>
  <div>
    <ul class="todoList">
      <li 
        v-for="todo in todoItems"
        :key="todo.id">
        <span>
          <input
            type="checkbox"
            id="checkbox"
            v-model="todo.done"
            @change="completeTodoItem"
            ref=true
          >
          <label for="checkbox">{{ todo.done }}</label>
        </span>
        <span class="title">
          <router-link :to="{
            path: `/todo/${todo.id}`,
          }">
            {{ todo.content }}
          </router-link>
        </span>
        <span class="date">
          {{ todo.createdAt }}
        </span>
        <span>
          <button 
            class="removeButton" 
            v-on:click="removeTodo(todo.id)">
            삭제
          </button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { Todo } from '@/model/todo';

@Component({})
export default class TodoList extends Vue {
  @Prop()
  public todoItems!: Todo [];

  constructor() {
    super();
  }

  /** emit */
  @Emit('removeTodoItem')
  private _removeTodoItem(id: string): void {
    this.$emit('remove-item', id);
  }
  @Emit('doneTodoItem')
  private _doneTodoItem(id: string, done: boolean): void {
    this.$emit('done-item', id, done);
  }

  /** created */
  private created() {
    console.log(this.todoItems);
  }

  /** methods */

  public doneTodo(id: string, done: boolean): void {
    this._doneTodoItem(id, done);
  }

  private removeTodo(id: string): void {
    this._removeTodoItem(id);
  }

}
</script>

