<template>
  <div>
    <h1>Hello {{ value | convertUpperCase }}</h1>
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
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
@Component({
  /** filters */
  filters: {
    convertUpperCase(value: string): string | null {
      if (!value) {
        return null;
      }
      return value.toUpperCase();
    },
  },
})
export default class HelloVue extends Vue {
  /** props */
  @Prop()
  private val!: string;

  /** data */
  private value: string = this.val;
  private inputValue: string = '';

  /** emit */
  @Emit('handle-click')
  private clickButton(val: string): void {
    //
    alert(val);
  }

  /** watch */
  @Watch('value')
  private onValueChange(newValue: string, oldValue: string): void {
    console.log(`watch: ${newValue}, ${oldValue}`);
  }

  /** computed */
  get isDisabled(): boolean {
    return this.inputValue === '';
  }

  /** lifecycle hook */
  private mounted(): void {
    console.log('mounted');
  }

  /** methods */
  private handleInput($event: Event): void {
    this.inputValue = (($event.target as any) as HTMLInputElement).value;
  }

 private handleClick(): void {
    if (this.inputValue === '') {
      return;
    }
    this.value = this.inputValue;
    this.inputValue = '';
    this.clickButton(this.value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>