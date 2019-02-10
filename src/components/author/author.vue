<template>
  <div class="author-model">
    <div class="portrait">
      <img src="/static/img/tx.png" alt="">
      <span>圈圈摄影</span>
    </div>
    <div class="user-info">
      <ul>
        <li><span class="sp1">NAME</span><span class="sp2">圈圈</span></li>
        <li><span class="sp1">E-MAIL</span><span class="sp2">{{configData.email}}</span></li>
      </ul>
      <ul>
        <li><span class="sp1">ADDRESS</span><span class="sp2">{{configData.address}}</span></li>
        <li><span class="sp1">POCO网址</span><span class="sp2" >{{configData.poco}}</span></li>
        <li><span class="sp1">网易摄影</span><span class="sp2">{{configData.wangyi}}</span></li>
      </ul>
      <div class="cat-model">
        <span>
          <button open-type="share" plain="true">
            <i class="iconfont">&#xe652;</i>
          </button>
        </span>
        <span>
          <button open-type="share" plain="true">
            <i class="iconfont">&#xe657;</i>
          </button>
        </span>
        <span>
          <button open-type="share" plain="true">
            <i class="iconfont">&#xe618;</i>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "author",
    data() {
      return {
        name:''
      }
    },
    props: {
      configData:Object
    },
    computed:{
    },
    mounted(){
    },

  }
</script>

<style lang="scss" >
  .author-model {
    width: 80%;
    background: #222;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 2;
    transform: translate(100%,0);
    -webkit-transition: -webkit-transform .4s ease;
    transition: transform .4s ease;
    button[plain]{
      border:0;
      display: inline-block;
      margin: 0 -14px;
    }
    .portrait {
      text-align: center;
      padding-top: 60px;
      img {
        width: 60px;
        height: 60px;
        display: block;
        margin: 0 auto;
        border-radius: 100%;
      }
      span {
        display: block;
        font-size: 16px;
        opacity: .5;
        padding-top: 10px;
      }
    }
    .user-info {
      padding-top: 20px;
      ul {
        li {
          span {
            font-size: 13px;
            opacity: .3;
            &.sp1 {
              width: 80px;
              text-align: right;
              display: inline-block;
              margin-right: 8px;
              opacity: .2;
            }
          }
        }
      }
    }
    .cat-model {
      text-align: center;
      padding-top: 10px;
      span {
        display: inline-block;
        margin: 0 6px;
        i {
          font-size: 60px;
          opacity: .3;
        }
      }
    }
  }
</style>
