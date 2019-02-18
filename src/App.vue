<template>
  <div id="app">
    <div class="header">
      <h1 class="display-3 font-weight-thin pt-5 pb-4">TODO</h1>
      <HelloVue val="Vue" @:handle-click="handleClickButton($event)" />
    </div>
    <div class="container">
      <todo-input
        :handle-input-change="handleInputChange"
        :handle-submit="handleSubmit"
        :todo-text="todoText"
      />
      <todo-list
        :todoData="todoData"
        :change-tab="changeTab"
        :activated-tab="activatedTab"
        :remove-todo="removeTodo"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import moment from 'moment';
import shortid from 'shortid';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import HelloVue from '@/components/HelloVue.vue';
import { Todo } from '@/model/todo';

@Component({
  components: {
    TodoInput,
    TodoList,
    HelloVue,
  },
})
export default class App extends Vue {

  // data
  public activatedTab: string;
  public todoText: string;
  public todoData: Todo[];

  constructor() {
    super();
    this.activatedTab = 'ALL';
    this.todoText = '';
    this.todoData = [];
  }

  // methods

  public handleClickButton($event: string) {
    console.log($event);
  }

  public handleInputChange(value: string): void {
    this.todoText = value;
  }

  public handleSubmit(todoText: string) {
    if (!/.+/.test(todoText)) {
      alert('한 글자 이상 입력하세요');
      return;
    }

    this.todoText = '';
    const todo: Todo = {
      id: shortid.generate(),
      content: todoText,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      completed: false,
    };
    this.todoData.push(todo);
    this.savetodoData();
  }

  public savetodoData() {
    localStorage.setItem('todo', JSON.stringify(this.todoData));
  }

  public loadtodoData() {
    const store: string | '' = localStorage.getItem('todo') || '';
    this.todoData = JSON.parse(store);
  }

  public changeTab(tab: string) {
    this.activatedTab = tab;
  }

  /**
   * mounted
   */
  public mounted() {
    this.loadtodoData();
  }

  public removeTodo(index: number) {
    this.todoData.splice(index, 1);
    this.savetodoData();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #CBD;
}
.logo {
  width: 20%;
}
</style>
