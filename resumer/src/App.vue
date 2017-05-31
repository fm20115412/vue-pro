<template>
  <div>
    <Topbar />
    <ResumeEditor />
    <ResumePreview />
  </div>
</template>

<script>
  import Topbar from "./components/Topbar"
  import ResumeEditor from "./components/ResumeEditor"
  import ResumePreviewer from "./components/ResumePreview"
  export default {
    name: 'app',
    data: function () {
      return {
        text:"nice to meet you !"
      }
    }
  }
</script>

<style>
  p{
    color:Red
  }
</style>
