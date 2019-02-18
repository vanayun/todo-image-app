<template>
  <div>
    <div class="card" v-if="todoData.length">
      <todo-list-tab
        :change-tab="changeTab"
      />
      <div class="list">
        <todo-list-item
          v-for="(todo, index) in todoData"
          :key="todo.id"
          :index="index"
          :todo="todo"
          :remove-todo="remove"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TodoListTab from '@/components/TodoListTab.vue';
import TodoListItem from '@/components/TodoListItem.vue';
import { Todo } from '@/model/todo';

@Component({
  components: {
    TodoListTab,
    TodoListItem,
  },
  props: {
    todoData: [Todo],
  },
})
export default class TodoList extends Vue {

}
</script>

