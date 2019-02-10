<template>
  <div class="pages-index-model" :class="[_rtNav,_rtAuthor]">
    <m-nav></m-nav>
    <m-author :config-data="configData"></m-author>
    <div class="mian-model">
      <m-herder
        @on-herder="_onHerder"
        :left-icon="'&#xe62b;'"
        :right-icon="'&#xe851;'">
      </m-herder>
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="4000" duration="600">
        <block v-for="(item, index) in hotBanner" :index="index" :key="item._id">
          <swiper-item @click="_go(item)">
            <image :src="item.imageView" class="slide-image" mode="widthFix"/>
          </swiper-item>
        </block>
      </swiper>
      <div class="hot-model animated fadeInUp">
        <div class="title-model">
          <span class="sp1">热门推荐</span>
          <span class="sp2">HOT RECOMMENDED</span>
        </div>
        <div class="list-box" v-if="hotList.length">
          <m-waterfall-flow :list="hotList"></m-waterfall-flow>
        </div>
      </div>
      <div class="record-model">
        <div class="title-model">
          <span class="sp1">记录</span>
          <span class="sp2">RECORD</span>
        </div>
        <div class="record-box">
          <div class="list">
            <div class="lt">
              <p class="text-1">3</p>
              <p class="text-2">年</p>
            </div>
          </div>
          <div class="list">
            <div class="lt">
              <p class="text-1">36</p>
              <p class="text-2">个月</p>
            </div>
          </div>
          <div class="list">
            <div class="lt">
              <p class="text-1">近<span id="bawa">80000</span></p>
              <p class="text-2">次快门</p>
            </div>
          </div>
          <div class="list">
            <div class="lt">
              <p class="text-1">4台</p>
              <p class="text-2">佳能机器</p>
            </div>
          </div>
          <div class="list">
            <div class="lt">
              <p class="text-1">8000+</p>
              <p class="text-2">张图片数量</p>
            </div>
          </div>
          <div class="list">
            <div class="lt">
              <p class="text-1">700+</p>
              <p class="text-2">G图片硬盘</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-model">
        <div class="title-model">
          <span class="sp1">联系</span>
          <span class="sp2">CONTACT</span>
        </div>
        <div class="contact-box">
          <ul>
            <li><span class="sp1">NAME</span><span class="sp2">{{configData.name}}</span></li>
            <li><span class="sp1">GENDER</span><span class="sp2">{{configData.gender === '1' ? '男' : '女'}}</span></li>
            <li><span class="sp1">E-MAIL</span><span class="sp2">{{configData.email}}</span></li>
            <li><span class="sp1">QQ</span><span class="sp2">{{configData.qq}}</span></li>
            <li><span class="sp1">微信</span><span class="sp2">{{configData.wechat}}</span></li>
            <li><span class="sp1">微博</span><span class="sp2">{{configData.weibo}}</span></li>
            <li><span class="sp1">ADDRESS</span><span class="sp2">{{configData.address}}</span></li>
            <li><span class="sp1">POCO网址</span><span class="sp2" >{{configData.poco}}</span></li>
            <li><span class="sp1">网易摄影</span><span class="sp2">{{configData.wangyi}}</span></li>
          </ul>
        </div>
      </div>
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
import mNav from '@/components/nav/nav'
import mAuthor from '@/components/author/author'
import mHerder from '@/components/herder/herder'
import mFooter from '@/components/footer/footer'
import mWaterfallFlow from '@/components/waterfallFlow/waterfallFlow'

export default {
  data () {
    return {
      isNav:false,
      isAuthor:false,
      hotBanner:[],
      hotList:[],
      configData:{}
    }
  },
  components: {
    mHerder,mWaterfallFlow,mFooter,mNav,mAuthor
  },
  computed: {
    _rtNav(){
      return this.isNav ? 'nav-active' : ''
    },
    _rtAuthor(){
      return this.isAuthor ? 'author-active' : ''
    }
  },
  onHide() {
    this.isNav = false
    this.isAuthor = false
    this.hotList = []
    this.hotBanner = []
  },
  onUnload(){
    this.isNav = false
    this.isAuthor = false
  },
  methods:{
    _go(item){
      wx.navigateTo({
        url: `/pages/details/main?id=${item._id}`
      })
    },
    _onHerder(type){
      if (type === 'left') {
        this.isNav = !this.isNav
      }else{
        this.isAuthor = !this.isAuthor
      }
    },
    _getIndexData(){
      this.$fly.request({
        method:'get',
        url:"/syApi/external/hotIndex",
        body:{}
      }).then(res =>{
        let data = res.data
        this.hotBanner = data.hotBanner.map( v => {
          let img = v.imageView
          if (img) {
            v.imageView = `${img.split('?')[0]}?imageView/1/w/1000/h/460/format/png`
          }
          return v
        })
        this.hotList = data.hotList.map( v => {
          return {
            id:v._id + '' || '',
            src:v.imageView,
            name:v.photos_title || ''
          }
        })
        this.configData = data.configData
      })
    }
  },
  created () {
    this._getIndexData()
  },
  mounted(){

  },
  onShareAppMessage:function(){
    let title = '转发给好友'
    let path = '/pages/index/main'
    let imageUrl = '/static/img/quanquansy.jpg'
    return {
      title,
      path,
      imageUrl,
      success: (res) => {
        console.log('res', res)
      },
      fail: (res) => {
        console.log('res', res)
      }
    }
  }
}
</script>

<style lang='scss'>


  .mian-model {
    -webkit-transition: -webkit-transform .4s ease;
    transition: transform .4s ease;
  }
  .slide-image {
    width: 100%;
  }
  .record-model {
    display: block;
    .record-box {
      background: #141514;
      overflow: hidden;
      margin-top: 10px;
      .list {
        width: 50%;
        float: left;
        height: 120px;
        text-align: center;
        border-bottom: 1px solid rgba(255,255,255,.05);
        &:nth-child(even){
          .lt {
            border-left: 1px solid rgba(255,255,255,.05);
          }
        }
        &:nth-last-child(1),&:nth-last-child(2){
          border-bottom: 0;
        }
        .lt {
          height: 80px;
          margin-top: 20px;
          .text-1 {
            color: #ad986d;
            font-size: 18px;
            padding-top: 12px;
          }
          .text-2 {
            color: #dddddd;
            font-size: 14px;
            opacity: .3;
            padding-top: 6px;
          }
        }
      }
    }
  }
  .contact-model {
    padding-top: 16px;
    .contact-box {
      ul {
        padding-left: 20px;
        li {
          span {
            font-size: 14px;
            color: #474747;
            &.sp1 {
              opacity: .4;
              width: 70px;
              display: inline-block;
              text-align: right;
            }
            &.sp2 {
              padding-left: 10px;
            }
          }
        }
      }
    }
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0,100%,0)
    }

    to {
      opacity: 1;
      transform: none
    }
  }

  .fadeInUp {
    animation-name: fadeInUp
  }

</style>
