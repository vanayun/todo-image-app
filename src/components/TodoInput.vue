<template>
  <div class="text-input-area">
    <input
      :value="todoText"
      @keyup.enter="submit(todoText)"
      @change="handleInputChange"
      required
    >
    <input type="text"
      :value="inputValue"
      @input="handleInput($event)" />
    <button
      @:click="handleClick()"
      :disabled="isDisabled">
      button</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    handleSubmit: Function,
    handleInputChange: Function,
  },
})
export default class TodoInput extends Vue {

  // methods
  public submit(todoText: string): void {
    alert(todoText);
    this.$props.handleSubmit(todoText);
  }
}
</script>
<style scoped>

</style>
