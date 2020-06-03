<template>
  <div>
    <!---最後のinputタグのvalueの中に自分のサイトのドメイン名をいれる-->
    <form method="get" action="http://www.google.co.jp/search" target="_blank">
      <input type="text" name="q" size="31" maxlength="255" value="" />
      <input type="submit" name="btng" value="検索" />
      <input type="hidden" name="hl" value="ja" />
      <input type="hidden" name="sitesearch" value="" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
