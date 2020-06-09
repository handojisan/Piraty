<template>
  <div id="app">
    <h1>{{ title(key) }}</h1>
    <div v-html="compiledMarkdownText(key)" v-if="posts"></div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import marked from "marked";

export default {
  data() {
    return {
      key: "",
      posts: null
    };
  },
  mounted() {
    db.collection("posts")
      .get()
      .then(snapshot => {
        this.posts = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
      });
    this.$nextTick(() => {
      this.key = this.$route.params.id;
    });
  },
  computed: {
    title: function() {
      return function(key) {
        if (this.posts) {
          for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id === key) {
              return this.posts[i].title;
            }
          }
        }
      };
    },
    compiledMarkdownText: function() {
      return function(key) {
        if (this.posts) {
          for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id === key) {
              return marked(this.posts[i].value);
            }
          }
        }
      };
    }
  }
};
</script>

<style lang="sass" scoped></style>
