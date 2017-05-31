<template>
  <div class="page">
      <header>
        <Topbar />
      </header>
      <main>
        <ResumeEditor />
        <ResumePreview />
      </main>
  </div>
</template>

<script>
  import "normalize.css/normalize.css"
  import "./assets/reset.css"
  import Topbar from "./components/Topbar"
  import ResumeEditor from "./components/ResumeEditor"
  import ResumePreview from "./components/ResumePreview"
  export default {
    name: 'app',
    data: function () {
      return {
        text:"nice to meet you !"
      }
    },
    components:{Topbar,ResumeEditor,ResumePreview}
  }
</script>

<style>
  .page{
      height:100vh;
      display: flex;
      flex-direction: column;
  }
  .page>main{
    flex-grow: 1;
  }
  .page>main{
    min-width: 1024px;
    max-width: 1440px;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
</style>
