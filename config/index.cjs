/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx87eff2233bfd3b05',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '689dacee0ce0809132eb1e37838793e4',

  PROVINCE: '广西',
  CITY: '来宾',

  USERS: [
    {
      // 想要发送的人的名字
      name: '鑫哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7scX6PYQkaTB2r8_7mUulkguYiE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'rB_rMFTbAEAtuIwaRa5JrtOlhqUWc3JarocgCgKK7gA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-19',
      horoscopeDateType: '今日',
       openUrl: 'https://wangxinleo.cn',
      TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '0543a4ebe7ed32ce67991cacc0a64a59',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 3,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '鑫哥', year: '2001', date: '07-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '崽崽', year: '2000', date: '09-26',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '01-01',
         CIBA: true,
         },
         {
          type: '节日', name: '春节', year: '2023', date: '01-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'KWf4V3hIgBWR9SCV-Tn8RCFyM9J2TmnwgwIgeymWa9U',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7scX6Czh7Ce-jx9klvwt80uflN0',
    }
  ],

}

module.exports = USER_CONFIG
