define(
  [
    'js/service/l10n.js',
    'js/service/svg.js',
    'js/service/ConstValueService.js',
    'js/service/CommonService.js'
  ],
  function(
    l10n,
    svg,
    ConstValueService,
    CommonService
  ){
    const constValueService = new ConstValueService(svg);
    const commonService = new CommonService({constValueService});
    const ServicePlugin = {
      install(Vue = {}, options = {}){
        Vue.prototype.$constValue = constValueService;
        Vue.prototype.$commonService = commonService;

        Vue.directive('svg', {
          inserted(element = {}, binding = {}){
            const div = document.createElement('div');
            div.innerHTML = binding.value;

            if(element.classList.length){
              element.classList.forEach(className => {
                div.firstElementChild.classList.add(className);
              })
            }

            element.parentNode.replaceChild(div.firstElementChild, element)
          }
        })
      }
    }

    Vue.use(ServicePlugin)

    return {constValueService, commonService};
  })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               