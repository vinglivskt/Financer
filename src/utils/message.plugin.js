import localizeFilter from '@/filters/localize.filter'
import M from 'materialize-css'
export default {
  install(Vue) {
    Vue.prototype.$message = function(html) {
      M.toast({ html })
    }

    Vue.prototype.$error = function(html) {
      M.toast({ html: `[${localizeFilter('Error')}]: ${html}` })
    }
  }
}
