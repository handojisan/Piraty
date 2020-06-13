<template>
  <div id="app">
    <div class="ranking-box">
      <div class="ranking-title">
        <p>Top 3</p>
      </div>
      <div v-for="post in posts" :key="post.id">
        <div class="postList">
          <router-link :to="'/Article/' + post.id">
            <span class="title">{{ post.title }}</span>
          </router-link>
          <span class="fav" v-if="post.fav < 10"> ♡{{ post.fav }} </span>
          <span class="fav10" v-else-if="post.fav < 100">
            ♡{{ post.fav }}
          </span>
          <span class="fav100" v-else-if="post.fav < 1000">
            ♡{{ post.fav }}
          </span>
          <span class="fav1000" v-else> ♡{{ post.fav }} </span>
          <p class="postName" v-if="post.name">wirtten by {{ post.name }}</p>
        </div>
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
      .orderBy("fav", "desc")
      .limit(3)
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
<style scoped lang="scss">
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
  color: black;
}
.fav10 {
  color: rgb(255, 127, 0);
}
.fav100 {
  color: rgb(255, 0, 0);
}
.fav1000 {
  color: rgb(81, 255, 0);
}
.ranking-box {
  background-color: #ebe4dc;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  display: inline-block;
  border-radius: 10px;
  margin: 30px;
  .ranking-title {
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 600;
    color: white;
  }
  .postName {
    font-size: 12px;
    color: rgb(168, 175, 180);
  }
}
</style>
