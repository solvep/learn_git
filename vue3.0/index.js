// const data = {
//   name: '你不知道滴前端',
//   age: 24,
//   info: {
//       address: '杭州'
//   },
//   numbers: [1, 2, 3, 4]
// }

// function _observer(target, name) {
  
// }

// Object.defineProperty(data, 'f',{
//   get(a){
//     // track
//     console.log('a', a)
//   },
//   set(o){
//     // trigger
//     console.log('0', o)
//   }
// })
// data.f = 1
// console.log('data.a', data.a)

const PublicInstanceProxyHandlers = {

  get ({ _: instance }, key) {

    const { ctx, setupState, data, props, accessCache, type, appContext } = instance

    if (key[0] !== '$') {

      // setupState / data / props / ctx

      // 渲染代理的属性访问缓存中

      const n = accessCache[key]

      if (n !== undefined) {

        // 从缓存中取

        switch (n) {

          case 0: /* SETUP */

            return setupState[key]

          case 1 :/* DATA */

            return data[key]

          case 3 :/* CONTEXT */

            return ctx[key]

          case 2: /* PROPS */

            return props[key]

        }

      }

      else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {

        accessCache[key] = 0

        // 从 setupState 中取数据

        return setupState[key]

      }

      else if (data !== EMPTY_OBJ && hasOwn(data, key)) {

        accessCache[key] = 1

        // 从 data 中取数据

        return data[key]

      }

      else if (

        type.props &&

        hasOwn(normalizePropsOptions(type.props)[0], key)) {

        accessCache[key] = 2

        // 从 props 中取数据

        return props[key]

      }

      else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {

        accessCache[key] = 3

        // 从 ctx 中取数据

        return ctx[key]

      }

      else {

        // 都取不到

        accessCache[key] = 4

      }

    }

    const publicGetter = publicPropertiesMap[key]

    let cssModule, globalProperties

    // 公开的 $xxx 属性或方法

    if (publicGetter) {

      return publicGetter(instance)

    } else if (

      // css 模块，通过 vue-loader 编译的时候注入

      (cssModule = type.__cssModules) &&

      (cssModule = cssModule[key])) {

      return cssModule

    }

    else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {

      // 用户自定义的属性，也用 `$` 开头

      accessCache[key] = 3

      return ctx[key]

    }

    else if (

      // 全局定义的属性

      ((globalProperties = appContext.config.globalProperties),

        hasOwn(globalProperties, key))) {

      return globalProperties[key]

    }

    else if ((process.env.NODE_ENV !== 'production') &&

      currentRenderingInstance && key.indexOf('__v') !== 0) {

      if (data !== EMPTY_OBJ && key[0] === '$' && hasOwn(data, key)) {

        // 如果在 data 中定义的数据以 $ 开头，会报警告，因为 $ 是保留字符，不会做代理

        warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` +

          `character and is not proxied on the render context.`)

      }

      else {

        // 在模板中使用的变量如果没有定义，报警告

        warn(`Property ${JSON.stringify(key)} was accessed during render ` +

          `but is not defined on instance.`)

      }

    }

  }

}



let obj = {
  a : '2',
  b : '2',
  c : '3'
}

let arr = Object.keys(obj)
// console.log('arr', arr)
for(let item of arr) {
  console.log('item', item)
}