var posts=["2024/07/09/CC链学习/","2024/07/05/GeoServer Jxpath RCE/","2024/06/20/Linux下的隐藏进程/","2024/05/28/从内存马到内核马到Rookit/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };