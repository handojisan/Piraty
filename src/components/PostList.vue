<template>
  <div id="App">
    <div v-for="post in posts" :key="post.id">
      <div id="postList">
        <router-link :to="'/Article/' + post.id">
          {{ post.title }}
        </router-link>
      </div>
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
      .orderBy("date")
      .get()
      .then(snapshot => {
        this.posts = snapshot.docs.reverse().map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
      });
  }
};
</script>
<style>
#postList {
  width: 50%;
  display: inline-block;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #333333;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
