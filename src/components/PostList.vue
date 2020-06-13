<template>
  <div id="App">
    <div v-for="post in posts" :key="post.id">
      <div class="postList">
        <router-link :to="'/Article/' + post.id">
          <span class="title">{{ post.title }}</span>
        </router-link>
        <span class="fav"> ♡{{ post.fav }} </span>
        <p class="postName" v-if="post.name">wirtten by {{ post.name }}</p>
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
      .orderBy("date", "desc")
      .get()
      .then(snapshot => {
        this.posts = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
      })
      .catch(() => {
        alert("記事の取得に失敗しました");
      });
  }
};
</script>
<style scoped>
.postList {
  width: 50%;
  display: inline-block;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #333333;
  border-radius: 10px;
  margin-top: 10px;
  z-index: 3;
  background-color: white;
}
.title {
  font-size: 20px;
  display: inline-block;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.fav {
  color: red;
}
.postName {
  font-size: 12px;
  color: rgb(168, 175, 180);
}
</style>
