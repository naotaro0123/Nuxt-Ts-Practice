<template lang="pug">
  section
    b-container
      b-row.row
        b-col
          b-form(@submit="onSubmit")
            b-input-group(size="lg")
              b-form-input.mr-sm-2(
                size="sm",
                type="text",
                placeholder="キーワードを入力して下さい"
                @change="handleChange"
                :value="query"
              )
              b-button.my2.my-sm-0(size="sm", type="submit") 検索する
            b-col
          .cards
            book-list-item(
              v-for="book in books",
              :key="book.id"
              :book="book"
            )
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import BookListItem from '~/components/BookListItem.vue';
// eslint-disable-next-line no-unused-vars
import { Books } from '~/types';

@Component({
  components: {
    BookListItem
  }
})
export default class extends Vue {
  @State books!: Books[];
  @State query?: string;

  handleChange(e: Event): void {
    this.$store.commit('setQuery', e);
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.$store.dispatch('search');
  }
}
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
}
.row {
  padding: 8px 0;
}
</style>
