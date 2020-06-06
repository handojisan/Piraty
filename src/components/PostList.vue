<template>
  <div id="App">
    <div v-for="post in posts" :key="post.id">
      <router-link :to="'/Article/' + post.id">
        {{ post.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>
