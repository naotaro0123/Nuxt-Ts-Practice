<template lang="pug">
section
  .cards
    book-detail-item(:book="book")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BookDetailItem from '~/components/BookDetailItem.vue';
import { State } from 'vuex-class';
// eslint-disable-next-line no-unused-vars
import { Book } from '~/types';

@Component({
  components: {
    BookDetailItem
  }
})
export default class BookDetail extends Vue {
  @State book!: Book;
  mounted() {
    this.$store.dispatch('fetchBook', this.$route.params.id);
  }
}
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-between;
}
.row {
  padding: 8px 0;
}
</style>
