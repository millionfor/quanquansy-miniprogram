<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  },
}
</script>

<style lang="scss">
  .title-model {
    padding: 16px 12px;
    text-align: center;
    .sp1 {
      font-size: 16px;
      color: #ad986d;
      display: block;
    }
    .sp2 {
      font-size: 12px;
      color: #dddddd;
      opacity: .4;
      display: block;
    }
  }
</style>
