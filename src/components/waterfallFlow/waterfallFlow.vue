<template>
  <div class="waterfall-flow-model">
    <div>
      <div class="left-list">
        <div v-for="(item,$index) in leftList" class="item-list" :key="item.id">
          <a :href="'/pages/details/main?id=' + item.id">
            <img :src="item.src" alt="" mode="widthFix">
            <div class="sub-line" >
              <span class="name" v-if="!item.photos_desc">{{item.name}}</span>
              <span class="name" v-if="item.photos_desc">{{item.photos_desc}}</span>
            </div>
          </a>
        </div>
      </div>
      <div class="right-list">
        <div v-for="(item,$index) in rightList" class="item-list" :key="item.id">
          <a :href="'/pages/details/main?id=' + item.id" >
            <img :src="item.src" alt="" mode="widthFix">
            <div class="sub-line">
              <span class="name" v-if="!item.photos_desc">{{item.name}}</span>
              <span class="name" v-if="item.photos_desc">{{item.photos_desc}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: "waterfall-flow",
    data() {
      return {
        winWidth:0,
        leftList:[],
        rightList:[],
      }
    },
    props: {
      list:Array
    },
    methods: {
    },
    watch: {},
    beforeCreate() {
    },
    created() {
      this.list.map((v,i) => {
        if (parseInt(i)%2 === 0) {
          this.leftList.push(v)
        }else{
          this.rightList.push(v)
        }
      })
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
    components: {}
  }
</script>

<style lang="scss" >
  .waterfall-flow-model {
    overflow: hidden;
    padding-top: 10px;
    .left-list,.right-list {
      width: 50%;
      float: left;
      img {
        width: 100%;
      }
    }
    .item-list {
      margin-bottom: 2px;
      position: relative;
      .sub-line {
        width: 100%;
        height: 26px;
        line-height: 26px;
        position: absolute;
        background: rgba(0,0,0,.5);
        bottom:6px;
        left: 5px;
        .name {
          font-size: 14px;
          color: #ad986d;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          display: block;
          padding: 0 8px;
        }
      }
    }
    .left-list {
      .item-list {
        padding-left: 5px;
      }
    }
    .right-list {
      .item-list {
        padding-right: 6px;
        padding-left: 6px;
        .sub-line {
          left: 6px;
        }
      }
    }
  }
</style>
