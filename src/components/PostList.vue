<template>
  <div id="App">
    <div
      v-for="post in posts"
      v-bind:key="post.id"
      v-html="compiledMarkdownText(post.value)"
    >
      {{ post.value }}
    </div>
  </div>
</template>

<script>
import marked from "marked";
import { db } from "@/firebase";

export default {
  data() {
    return {
      posts: ""
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
  },
  computed: {
    compiledMarkdownText: function() {
      return function(text) {
        return marked(text);
      };
    }
  }
};
</script>
