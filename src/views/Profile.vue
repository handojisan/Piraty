<template>
  <div class="profiles">
    <form action="/my-handling-form-page" method="post">
      <ul>
        <li>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" value="ニックネーム" />
        </li>
        <li>
          <label for="msg">Message:</label>
          <textarea id="msg" name="user_message">
コメントを設定しよう！</textarea
          >
        </li>
        <li class="button">
          <button v-on:click="post-profile" type="submit">プロフィールを更新</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import db from "@/firebase";
export default {
  name:"profiles",
  data(){
   return{
    profiles:[
     {
        id:
      text:
     }
    ]
   }
  },
  methods: {
    postTweet() {
      db.collection("profiles").add({
        text: "新しいプロフィールです。"
      })
    }
  }
    created() {
    db.collection("profiles")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.profiles.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
  }
};
</script>

<style lang="scss" scoped></style>
