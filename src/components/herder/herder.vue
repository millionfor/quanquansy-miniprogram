<template>
  <div class="herder-model">
    <div class="left" v-if="leftIcon" @click="_on('left')">
      <i class="iconfont" v-html="leftIcon"></i>
    </div>
    <div class="logo-p" v-if="!text">
      <img src="/static/img/logo.png" alt="">
    </div>
    <div class="text-p" v-if="text"><span>{{text}}</span></div>
    <div class="right" v-if="rightIcon" @click="_on('right')">
      <i class="iconfont" v-html="rightIcon"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: "herder",
    data() {
      return {}
    },
    props: {
      leftIcon:String,
      rightIcon:String,
      text:String
    },
    methods: {
      _on(type){
        this.$emit('on-herder',type)
      }
    },
    watch: {},
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    computed: {},
    components: {},
  }
</script>

<style lang="scss">
  .pages-index-model {
    overflow: hidden;
    .swiper {
      padding-bottom: 10px;
    }
    &.nav-active {
      .mian-model{
        transform: translate(80%,0);
      }
      .nav-model {
        transform: translate(0,0);
        -webkit-transition: -webkit-transform .4s ease;
        transition: transform .4s ease;
      }
    }
    &.author-active {
      .mian-model{
        transform: translate(-80%,0);
      }
      .author-model {
        transform: translate(0,0);
        -webkit-transition: -webkit-transform .4s ease;
        transition: transform .4s ease;
      }
    }
  }
  .herder-model {
    height: 50px;
    background: #1b1b1b;
    position: relative;
    .left {
      position: absolute;
      left: 10px;
      top: 0;
      >.iconfont {
        font-size: 32px;
        color: #ad986d;
      }
    }
    .right {
      position: absolute;
      right: 10px;
      top: 0;
      >.iconfont {
        font-size: 32px;
        color: #ad986d;
      }
    }
    .logo-p {
      text-align: center;
      padding-top: 9px;
      img {
        width: 64px;
        height: 34px;
      }
    }
    .text-p {
      text-align: center;
      line-height: 50px;
      span {
        font-size: 20px;
        color: #ad986d;
      }
    }
  }
</style>
