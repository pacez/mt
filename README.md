# mt 简介：
根据userAgent判断浏览器端设备类型

#####属性介绍：

    _PLATFORM = {
      USERAGENT: navigator.userAgent.toLowerCase(), //获取userAgent并转为小写
      PCMARKER: 'pc', //设置PC端的标记字符
      PADMARKER: 'pad', //设置PAD端的标记字符
      MOBILEMARKER: 'mobile',//设置MOBILE端的标记字符
      isPc: boolean, //判断是否PC端
      isPad: boolean, //判断是否PAD端
      isMobile: boolean //判断是否MOBILE端
    };
