/**
 * 获取url参数
 */
const getCurrentPageUrl = () => {
  let pages = getCurrentPages()    //获取加载的页面
  let currentPage = pages[pages.length - 1]    //获取当前页面的对象
  let url = currentPage.route    //当前页面url
  return url
}

export default {
  getCurrentPageUrl,
}
