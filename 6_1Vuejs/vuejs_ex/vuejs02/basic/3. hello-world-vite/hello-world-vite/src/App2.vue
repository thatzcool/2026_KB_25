<template>
  <div>
    <h2>박스 너비 측정</h2>
    <div
      ref="box"
      style="width: 200px; height: 100px; background: skyblue"
    ></div>

    <p>created 결과: {{ createdWidth }}</p>
        
    <p>mounted 결과: {{ mountedWidth }}</p>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      createdWidth: 0,
      mountedWidth: 0,
    };
  },
  created() {
    console.log('created:', this.$refs.box);
    this.createdWidth = this.$refs.box ? this.$refs.box.offsetWidth : 0;
  },
  mounted() {
    // TODO: box width 측정
    //DOM 존재
    console.log('mounted:', this.$refs.box);
    this.mountedWidth = this.$refs.box.offsetWidth;
  },
};
</script>
