var botui = new BotUI('myabout'),
    address = 'House 1, First Ave.';

botui.message.add({
  delay:800,
  content:"Hi,我是mmimo (*´▽｀)ノノ"
}).then(function(){
	botui.message.add({
		delay: 1000,
		content: "一个追求上进的女孩纸" 
  })
}).then(function(){
    return botui.action.button({
      delay:1500,
      action:[{
        text:'然后呢 ♪(^∇^*)',
        value:'next'
      },{
        text: '少废话 (￣_,￣ )',
        value:'end'
      }]
    })
  }).then(function(res){
    if(res.value == 'end'){
      botui.message.add({
        delay:1000,
        content: "好叭，那期待下次再见~ (。・_・)/~~~"
      });
    }else{
     selfintroduce();
    }
  });

  var selfintroduce = function (){
    botui.message.add({
      delay:1000,
      content: "我就读于福建师范大学"
    }).then(function(){
      botui.message.add({
        delay:1100,
        content: "专业是软件工程"
      })
    }).then(function(){
      botui.message.add({
      delay:2000,
      content: "立志成为全栈工程师(不过目前还是一颗小白菜)"
    })
    }).then(function(){
      return botui.action.button({
        delay:3000,
        action:[{
          text: "你不怕没头发？ w(ﾟДﾟ)w",
          value: "talkstudy"
        },{
          text:"讲点学习外的",
          value: 'talklife'
        }]
      })
    }).then(function(res){
      if(res.value == 'talkstudy'){
        talkstudy()
      }else{
        talklife()
      }
    })
  }

var talkstudy = function(){
  botui.message.add({
    delay:1000,
    content: "我感觉我现在已经有秃头的倾向了"
  }).then(function(){
    botui.message.add({
      delay:1200,
      content: "可是对专业的小小热爱打动了我的心"
    }).then(function(){
      botui.message.add({
        delay:1000,
        content: "而且我对睡眠的依赖导致我没法熬夜，所以几乎每天都乖乖地早睡啦，这应该可以减缓我头发掉落的速度（嘿嘿）"
      })
    }).then(function(){
      return botui.action.button({
        delay:3000,
        action:[{
          text:"不错，讲点学习外的",
          value: 'talkstudy'
        },{
          text:"祝你不要秃头，再见",
          value: 'end'
        }]
      })
    }).then(function(res){
      if(res.value == 'end'){
        botui.message.add({
          delay:800,
          content: "你也不要经常熬夜哟，拜拜~ (o´ω`o)ﾉ"
        })
      }else{
        talklife()
      }
    })
  })
}

var talklife = function(){
  botui.message.add({
    delay:800,
    content:"除了学习，我还喜欢画画，看书，旅游，还有蹭我哥的饭（可爱）"
  }).then(function(){
    botui.message.add({
      delay:1200,
      content:"我也挺中意有意义的公益活动，还有筹备精心的生日礼物"
    }).then(function(){
      return botui.action.button({
        delay:2000,
        action:[{
          text:"真是个可爱的小姐姐",
          value: 'talkmore'
        },{
          text: "知道了，不想聊了",
          value: 'end'
        }]
      })
    }).then(function(res){
      if(res.value == 'talkmore'){
        botui.message.add({
          delay:1000,
          content: "嘻嘻实际上是可爱又蠢蠢的女孩，很高兴你听我讲了这么久，希望我们都越来越进步呀 ฅ(๑ ̀ㅅ ́๑)ฅ "
        })
      }else{
        botui.message.add({
          delay:1000,
          content: "和你聊天很开心，期待下次再聊 ┏(＾0＾)┛"
        })
      }
    })
  })
}