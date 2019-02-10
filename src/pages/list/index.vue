<template>
  <div class="pages-index-model" >
    <div class="mian-model">
      <div class="hot-model animated fadeInUp">
        <div class="title-model">
          <span class="sp1">{{classifysData.classifys_cn_name}}</span>
          <span class="sp2">{{classifysName}}</span>
        </div>
        <div class="list-box">
          <div v-if="list.length">
            <m-waterfall-flow :list="list"></m-waterfall-flow>
          </div>
        </div>
      </div>
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
  import {getCurrentPageUrl} from '../../utils'
  import mFooter from '@/components/footer/footer'
  import mWaterfallFlow from '@/components/waterfallFlow/waterfallFlow'

  export default {
    data () {
      return {
        isNav:false,
        isAuthor:false,
        pagesType:'',
        classifysData:{},
        list:[],
        classifysName:''
      }
    },
    components: {
      mWaterfallFlow,
      mFooter
    },
    onLoad: function (options) {
      this.pagesType = options.pagesType
    },
    onUnload(){
      this.classifysData = ''
      this.list = []
    },
    computed: {
    },
    onHide() {
      this.isNav = false
      this.isAuthor = false
    },
    methods:{
      _onHerder(type){
        if (type === 'left') {
          this.isNav = !this.isNav
        }else{
          this.isAuthor = !this.isAuthor
        }
      },
      _getListData(){
        this.list = []
        this.$fly.request({
          method:'get',
          url:`/syApi/external/photoList?classifysEnName=${this.pagesType}`,
        }).then(res =>{
          this.classifysData = res.data.classifysData
          this.list = res.data.list.map( v => {
            return {
              id:v._id + '',
              src:v.imageView,
              name:v.photos_title || ''
            }
          })
          this.classifysName = this.classifysData.classifys_en_name.toUpperCase()
        })
      }
    },
    created () {
    },
    mounted(){
      this._getListData()
    }
  }
</script>

<style lang="scss">

</style>
