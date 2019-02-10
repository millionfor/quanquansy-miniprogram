<template>
  <div class="nav-model">
    <div class="nav-list">
      <ul>
        <li @click="_go('HOME')" :class="pagesType === 'HOME' ? 'active':'' "><span>HOME</span><i class="iconfont">&#xe852;</i></li>

        <li v-for="(item,index) in classifysList"
            :index="index"
            :key="item._id"
            @click="_go(item.classifys_en_name)"
            :class="pagesType === item.classifys_en_name ? 'active':'' ">
          <span>{{item.classifys_cn_name}} - {{item.classifys_en_name}} </span>
          <i class="iconfont">&#xe852;</i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "nav",
    data() {
      return {
        pagesType:'HOME',
        classifysList:[]
      }
    },
    props: {},
    onLoad: function (options) {
      this.pagesType = options.pagesType
    },
    methods: {
      _go(type){
        this.pagesType = type
        if (type === 'HOME') {
          wx.navigateTo({
            url: `/pages/index/main`
          })
        }else{
          wx.navigateTo({
            url: `/pages/list/main?pagesType=${type.toLowerCase()}`
          })
        }
      },
      _getClassifysList(){
        this.$fly.request({
          method:'get',
          url:"/syApi/external/classifysList",
          body:{}
        }).then(res =>{
          this.classifysList = res.data.map(v => {
            v.classifys_en_name = v.classifys_en_name.toUpperCase()
            return v
          })
        })
      }
    },
    watch: {},
    beforeCreate() {
    },
    created() {
      this._getClassifysList()
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
    computed: {

    },
    components: {},
  }
</script>

<style lang="scss" >
  .nav-model {
    width: 80%;
    background: #222;
    position: fixed;
    height: 100%;
    z-index: 2;
    transform: translate(-100%,0);
    -webkit-transition: -webkit-transform .4s ease;
    transition: transform .4s ease;
    .nav-list {
      padding-top: 50px;
      ul {
        li {
          height: 44px;
          line-height: 40px;
          border-bottom: 1px solid rgba(255,255,255,.05);
          padding:0 20px;
          position: relative;
          &.active {
            background: #1b1b1b;
            .iconfont {
              display: none;
            }
          }
          span {
            color: #ad986d;
            font-size: 14px;
            font-weight: normal;
          }
          .iconfont {
            position: absolute;
            right: 14px;
            top: 0;
            font-size: 14px;
            color: #ad986d;
          }
        }
      }
    }
  }
</style>
