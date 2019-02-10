<template>
  <div class="pages-index-model">
    <div class="mian-model">
      <div class="details-model">
        <div class="title">
          <div class="icon-p">
            <i class="iconfont">&#xe61a;</i>
          </div>
          <div class="name-p">
            <div class="name">{{detailsInfo.photos_title}}</div>
            <div class="hanrlp">
              <span class="sp1">
                {{updateTime}}
              </span>
              <span class="sp2">
                浏览量：{{num}}次
              </span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="cont-box">
            <div class="list" v-for="item in detailsInfo.photos_path" :key="item.uid">
              <img :src="item.url" alt="" mode="widthFix">
              <p>{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
  import mFooter from '@/components/footer/footer'
  export default {
    data () {
      return {
        detailsInfo:{},
        updateTime:'',
        id:null,
        num:0,
      }
    },
    onLoad: function (options) {
      this.id = options.id
      this.num = Math.floor(Math.random()*1000+1)
    },
    onUnload(){
      this.detailsInfo = ''
    },
    components: {
      mFooter
    },
    methods:{
      _onHerder(){
        wx.navigateBack({
          delta: 1
        })
      },
      _getDetailsInfo(){
        this.$fly.request({
          method:'get',
          url:`/syApi/external/photoDetails?id=${this.id}`,
        }).then(res =>{
          this.detailsInfo = res.data
          this.updateTime = new Date(this.detailsInfo.updateTime).toLocaleString()
        })
      }
    },
    computed:{

    },
    created () {
      this.detailsInfo = {}

    },
    mounted(){
      this._getDetailsInfo()
    }
  }
</script>

<style lang="scss">
.details-model {
  padding: 0 10px;
  .title {
    height: 60px;
    position: relative;
    margin-top: 8px;
    .icon-p {
      position: absolute;
      left: 0;
      top: 2px;
      .iconfont {
        font-size: 40px;
        color: #ad986d;
      }
    }
    .name-p {
      position: absolute;
      left: 56px;
      top: 12px;
      .name {
        font-size: 16px;
        color: #ad986d;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 296px;
      }
      .hanrlp {
        margin-top: -8px;
        span {
          font-size: 12px;
          opacity: .4;
          &.sp1 {
            padding-right: 10px;
          }
        }
      }
    }
  }
  .content {
    padding:12px 10px 18px 10px;
    .cont-box {
      .list {
        padding-bottom: 14px;
        img {
          width: 100%;
          display: block;
          margin-bottom: 8px;
        }
        p {
          padding: 6px;
          background: #1A1B1A;
          color: #ad986d;
          border-radius: 4px;
          font-size: 13px;
          display: block;
        }
      }
    }
  }
}
</style>
