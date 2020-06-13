<template>
  <div class="article">
    <h1 class="title">{{ title(key) }}</h1>

    <span class="postName" v-if="desplayPost.name"
      >wirtten by
      <router-link :to="'/Others/' + desplayPost.auth">{{
        desplayPost.name
      }}</router-link></span
    >
    <div v-html="compiledMarkdownText" v-if="posts"></div>
    <button v-if="desplayPost.auth === userid" v-on:click="deleteButton">
      投稿を削除
    </button>
    <button v-else v-on:click="fav">気に入った！</button>
    <span> {{ desplayPost.fav }} </span>
  </div>
</template>

<script>
import { db } from "@/firebase";
import marked from "marked";

export default {
  data() {
    return {
      key: "",
      posts: null,
      desplayPost: "iti",
      userid: "ni"
    };
  },
  mounted() {
    if (this.$store.state.user) this.userid = this.$store.state.user.uid;
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
      return key => {
        if (this.posts) {
          for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id === key) {
              this.desplayPost = this.posts[i];
              return this.desplayPost.title;
            }
          }
        }
      };
    },
    compiledMarkdownText: function() {
      console.log(this.desplayPost.value);
      return marked(this.desplayPost.value);
    }
  },
  methods: {
    deleteButton: function() {
      this.$dialog
        .confirm(
          {
            title: "最終確認",
            body: "本当に削除してもよろしいですか？この操作は元に戻せません"
          },
          {
            okText: "はい",
            cancelText: "キャンセル"
          }
        )
        .then(() => {
          db.collection("posts")
            .doc(this.desplayPost.id)
            .delete()
            .then(function() {
              console.log("Document successfully deleted!");
              this.$router.push("/"); //これやりたかったけど，よく分からなかったのでとりあえずコメントアウトしましたbyさっきー
            })
            .catch(function(error) {
              console.error("Error removing document: ", error);
            });
        })
        .catch(() => {
          console.log("Clicked on cancel");
        });
    },
    fav: function() {
      this.desplayPost.fav += 1;
      db.collection("posts")
        .doc(this.desplayPost.id)
        .update({
          fav: this.desplayPost.fav
        });
      console.log(this.desplayPost.fav);
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
}
.article h1 {
  font-size: 30px;
  font-weight: bold;
}
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
  font-family: sans-serif;
}
.postName {
  font-size: 12px;
  color: rgb(168, 175, 180);
}
</style>
