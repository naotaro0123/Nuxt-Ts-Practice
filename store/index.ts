import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { MutationTree, ActionTree } from 'vuex';
// eslint-disable-next-line no-unused-vars
import { RootState } from '~/types';

export const state = (): RootState => ({
  books: [],
  book: {},
  query: ''
});

export const mutations: MutationTree<RootState> = {
  setBooks(state, books) {
    state.books = books;
  },
  setBook(state, book) {
    state.book = book;
  },
  clearBook(state) {
    state.book = {};
  },
  setQuery(state, query) {
    state.query = query;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async search({ commit, state }) {
    if (!state.query) {
      return;
    }
    const path = `https://www.googleapis.com/books/v1/volumes?q=${state.query}`;
    const response = await axios.get(path);
    if (response.data && response.data.items) {
      const books = response.data.items;
      commit('setBooks', books.slice(0, 10));
    }
  },

  async fetchBook({ commit, state }, id) {
    commit('clearBook');
    const book = state.books.find(book => book.id === id);
    if (book !== void 0) {
      commit('setBook', book);
      return null;
    }

    const path = `https://www.googleapis.com/books/v1/volumes/${id}`;
    const response = await axios.get(path);
    if (response && response.data) {
      commit('setBook', response.data);
    }
  }
};
