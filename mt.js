/*
* 浏览器端设备判断
* android/webos/ios/wp/aliyunos/symbian/blackberry/tizen/bada/kindle fire(HDX7/HDX8.9)
* 平板仅区分iPAD,其余平台归类为Mobile
*/

var _PLATFORM = {
 USERAGENT: navigator.userAgent.toLowerCase(),
 PCMARKER: 'pc',
 PADMARKER: 'pad',
 MOBILEMARKER: 'mobile'
};

_PLATFORM.DEVICETYPE=_PLATFORM.PCMARKER;

if (/mobile|android|webos|ipad|iphone|ipod|blackberry|bb10|windows phone|samsung|symbian|aliyunos|kfthwi|kfapwi/i.test(_PLATFORM.USERAGENT)) {
 if (/ipad/i.test(_PLATFORM.USERAGENT)) {
   _PLATFORM.DEVICETYPE = _PLATFORM.PADMARKER;
 }else {
   _PLATFORM.DEVICETYPE = _PLATFORM.MOBILEMARKER;
 }
}

_PLATFORM.isPc=function(){
  if(this.DEVICETYPE===this.PCMARKER){
    return true;
  }
  return false;
}

_PLATFORM.isPad=function(){
  if(this.DEVICETYPE===this.PADMARKER){
    return true;
  }
  return false;
}

_PLATFORM.isMobile=function(){
  if(this.DEVICETYPE===this.MOBILEMARKER){
    return true;
  }
  return false;
}
