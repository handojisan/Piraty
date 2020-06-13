<template>
  <div id="App">
    <div v-for="post in posts" :key="post.id">
      <div class="postList">
        <router-link :to="'/Article/' + post.id">
          <span class="title">{{ post.title }}</span>
        </router-link>
        <span class="fav" v-if="post.fav < 10"> ♡{{ post.fav }} </span>
        <span class="fav10" v-else-if="post.fav < 100"> ♡{{ post.fav }} </span>
        <span class="fav100" v-else-if="post.fav < 1000">
          ♡{{ post.fav }}
        </span>
        <span class="fav1000" v-else> ♡{{ post.fav }} </span>
        <p>
          <span class="postName">{{ changeDate(post.date) }}</span>
          <router-link :to="'/Others/' + post.auth">
            <span class="postName" v-if="post.name"
              >wirtten by {{ post.name }}</span
            >
          </router-link>
        </p>
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
  computed: {
    changeDate: function() {
      return _timestamp => {
        var _d = _timestamp ? new Date(_timestamp * 1000) : new Date();

        // var Y = _d.getFullYear();
        var m = ("0" + (_d.getMonth() + 1)).slice(-2);
        var d = ("0" + _d.getDate()).slice(-2);
        var H = ("0" + _d.getHours()).slice(-2);
        var i = ("0" + _d.getMinutes()).slice(-2);
        var s = ("0" + _d.getSeconds()).slice(-2);

        return `${m}/${d} ${H}:${i}:${s}`;
      };
    }
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
.postName {
  font-size: 12px;
  color: rgb(168, 175, 180);
}
</style>
