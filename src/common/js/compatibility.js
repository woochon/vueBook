/*
* 常见js兼容性写法
* */

/*
* scroll();
* 返回值(Object): {top:number,left:number}
* 页面滚动距离的距离
* */
export  function scroll() {
  const scrollPos={};
  if (window.pageYOffset) {
    scrollPos.top = window.pageYOffset;
    scrollPos.left = window.pageXOffset;
  }
  else if (document.compatMode && document.compatMode !== 'BackCompat'){
    scrollPos.top = document.documentElement.scrollTop;
    scrollPos.left = document.documentElement.scrollLeft;
  }
  else if (document.body.scrollTop) {
    scrollPos.top = document.body.scrollTop;
    scrollPos.left = document.body.scrollLeft;
  }
  return scrollPos;
}


/*
* elementPosition(elementNode) 获取元素相对于屏幕的距离
* elementNode 单个元素节点
* 返回值(Object): { x:number,y:number }
* */
export function elementPosition(obj) {
  let left = 0, top = 0;
  if (obj.offsetParent) {
    left = obj.offsetLeft;
    top = obj.offsetTop;
    while (obj = obj.offsetParent) {
      left += obj.offsetLeft;
      top += obj.offsetTop;
    }
  }
  return { x: left, y: top };
}

/*
 *comStyle是一个可以获取当前元素所有最终使用的CSS属性值(即在浏览器中展示)
 * */
export function comStyle(element){
  if(window.getComputedStyle){
    return getComputedStyle(element,null);
  }
  else{
    return element.currentStyle;
  }
}


/* getElementsByClassName兼容写法 */
export function getElementWithClassName(element,classname) {
  if (element.getElementByClassName) {
    return element.getElementsByClassName(classname);
  } else {
    var ArrClass = [];
    var Tags = element.getElementsByTagName("*");
    for (var i = 0; i < Tags.length; i+=1) {
      if (Tags[i].className === classname) {
        ArrClass.push(Tags[i])
      }
    }
    return ArrClass;
  }
}

/*
* bind(obj , eventStr , callback)
* bind:事件绑定的兼容性写法
* */
export function bind(obj , eventStr , callback){
  if(obj.addEventListener){
    //大部分浏览器兼容的方式
    obj.addEventListener(eventStr , callback , false);
  }else{
    /*this是谁由调用方式决定，callback.call(obj)*/
    //IE8及以下
    obj.attachEvent("on"+eventStr , function(){
      //在匿名函数中调用回调函数
      callback.call(obj);
    });
  }
}



