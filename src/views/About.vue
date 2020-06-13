<template>
  <div>
    <div class="about">
      <h3>PIRATY</h3>
      <div class="aboutContent">
        このサイトは皆さんでおうち時間を<font color="#FFCC66">有意義</font
        >なものにすることを目的としています <br /><br />
        <h3>家で快適に過ごすコツは</h3>
        <div class="summaryBox">
          <h3>皆に<font color="#FFCC66">シェア</font>したいですよね？</h3>
          <h3>皆から<font color="#FFCC66">聞きたい</font>ですよね？</h3>
        </div>
        そんな，おうち時間をシェアするサイトです．
      </div>
    </div>
    <div class="feature">
      <h3>このサイトの特徴</h3>
      <div class="maru size_normal pink1">
        <div class="letter3">ログインしなくても記事が読めます</div>
      </div>
      <div class="maru size_normal pink1">
        <div class="letter3">
          良いねを何回でも押せます．良い記事には良いねをたくさん押しましょう！
        </div>
      </div>
      <div class="maru size_normal pink1">
        <div class="letter3">ログインすれば記事を投稿することが出来ます</div>
      </div>
      <div class="maru size_normal pink1">
        <div class="letter3">
          良いねの数で良いねの色が変わります．折角なので1000良いねを目指してみてください．
        </div>
      </div>
    </div>
    <div class="derive">
      <h3>PIRATYの読み方と由来</h3>
      <div class="deriveContent">
        「ピラティ」と読んでください．<br />由来は……特にないです．<br />可愛い名前なので，是非広めて下さい
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about {
  background-color: #ebe4dc;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  display: inline-block;
  border-radius: 10px;
  margin: 30px;
  h3 {
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 600;
    color: white;
  }
  .aboutContent {
    color: white;
    font-family: sans-serif;
    font-weight: 800;
  }
}
.summary {
  background-color: #ebe4dc;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  display: inline-block;
  border-radius: 10px;
  margin: 30px;
  h3 {
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 600;
    color: white;
  }
  .summaryBox {
    color: white;
    font-family: sans-serif;
    font-weight: 800;
  }
}
.feature {
  background-color: #ebe4dc;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  display: inline-block;
  border-radius: 10px;
  margin: 30px;
  h3 {
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 600;
    color: white;
  }
  /* 円の基本形 */
  .maru {
    display: inline-flex;
    background-color: #eeeeee;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    flex-flow: column;
    vertical-align: top;
  }
  /* 円の大きさ */
  .size_normal {
    width: 300px;
    height: 300px;
  }
  /* 文字の大きさ */
  .letter3 {
    font-size: 30px;
    line-height: 30px;
  }
  /* 円と文字の色 */
  .pink1 {
    color: rgb(255, 198, 133);
    border: 4px solid rgb(255, 233, 173);
  }
}
.derive {
  background-color: #ebe4dc;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  display: inline-block;
  border-radius: 10px;
  margin: 30px;
  h3 {
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 600;
    color: white;
  }
  .deriveContent {
    color: white;
    font-family: sans-serif;
    font-weight: 800;
  }
}
</style>
