let raw_str = '[{"time":"2017/6/17 11:51:31 GMT+0800","username":"root","nickname":"根","content":"太难了，出题人太强大了","reply_to":""},{"time":"2017/6/17 11:51:50 GMT+0800","username":"111","nickname":"2333","content":"说的对！！","reply_to":"0"},{"time":"2017/6/18 12:51:50 GMT+0800","username":"woc","nickname":"","content":"真的可怕!","reply_to":""},{"time":"2017/6/19 12:51:50 GMT+0800","username":"测试4","nickname":"我啊啊啊","content":"我都慌了","reply_to":""}]';
let render = function (value,index){
  let to = value.reply_to;
  // console.log(to);
  console.log(value);
  if(to!=""){
    let select = $("#"+to+".msg");
    if(select.length){
      $("#post_box").append("<h5>"+ value.username+'<small>('+value.nickname+')</small>'+ ': ' +value.content+"</h5>");
    }else{
      //something goes wrong QAQ!
    }
  }else{
    //append to post_box directly
    let str = '<h3 class="msg" id=\"'+ index+'\">'+value.username+ '<small>(' +value.nickname+ ')</small>:' + value.content + '</h3>';
    $("#post_box").append(str);
  }
}
$(function() {
  let arr = JSON.parse(raw_str);
  console.log("rendering start");
  arr.map(render);
  console.log("rendered");
})
/*
[].forEach(function(value, index, array) { });
[].map(function(value, index, array) { });
*/
