<template lang="pug">
.card
  .thumbnail
    b-img(:src="thumbnail", fluid, alt="Responsive image")
  .content
    h2 {{title}}
    p.card-text {{description}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
// eslint-disable-next-line no-unused-vars
import { Book } from '~/types';

@Component({})
export default class BookDetailItem extends Vue {
  @Prop() book!: Book;
  get id() {
    try {
      return this.book.id;
    } catch {}
    return '';
  }
  get title() {
    try {
      return this.book.volumeInfo!.title;
    } catch {}
    return '';
  }
  get description() {
    try {
      return this.book.volumeInfo!.description;
    } catch {}
    return '';
  }
  get thumbnail(): string | boolean {
    try {
      return this.book.volumeInfo!.imageLinks!.smallThumbnail;
    } catch {}
    return '';
  }
}
</script>

<style lang="scss">
.card {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  display: flex;
  width: 100%;
}
.thumbnail {
  width: 30%;
}
.content {
  width: 60%;
}
</style>
