<template>
  <div class="box">
    <Search />
    <div class="postBox">
      <div class="postTitle">PostList</div>
      <PostList />
    </div>

    <!-- ↑投稿を表示する -->
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import PostList from "@/components/PostList";
export default {
  components: {
    Search,
    PostList //投稿を表示する
  }
};
</script>
<style scoped lang="scss">
.postBox {
  background-color: #ebe4dc;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  display: inline-block;
  border-radius: 10px;
}
.postTitle {
  font-size: 35px;
  font-family: sans-serif;
  font-weight: 600;
  color: white;
}
</style>
