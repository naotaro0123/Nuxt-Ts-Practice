<template lang="pug">
  section
    h1.header Nuxt TypeScript Starter
    .cards
      Card(v-for="person in people", :key="person.id", :person="person")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
import { Person } from '~/types';
import Card from '~/components/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State people!: Person;
}
</script>

<style scoped>
.header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
