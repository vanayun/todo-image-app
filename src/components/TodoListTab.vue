<template>
  <div class="list-tab">
    <div class="tab" @click="changeTab('ALL')">
      ALL
    </div>
    <div class="tab" @click="changeTab('TODO')">
      TODO
    </div>
    <div class="tab" @click="changeTab('DONE')">
      DONE
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    changeTab: Function,
  },
})
export default class TodoListTab extends Vue {
}
</script>
<style scoped>
</style>
