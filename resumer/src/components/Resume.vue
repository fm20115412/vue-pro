<template>
    <div>
      <div class=page>
        <header>
          <Topbar/>
        </header>
        <main>
          <ResumeEditor/>
          <ResumePreview/>
        </main>
      </div>
    </div>
  </template>
<script>
  import Topbar from './Topbar'
  import ResumeEditor from './ResumeEditor'
  import ResumePreview from './ResumePreview'

  export default {
    name: 'Resume',
    components: { Topbar, ResumeEditor, ResumePreview},
    created() {
        }
    }
  </script>

<style scoped lang="scss">
  resumeEditor{
    min-width:35%;
    background: #444;
  }
  #resumePreview{
    flex-grow:1;
    margin-left: 16px;

  }
</style>
