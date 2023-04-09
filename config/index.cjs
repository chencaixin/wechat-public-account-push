/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
USE_PAKKAGE:'push-plus',

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
      id: 'o7scX6Czh7Ce-jx9klvwt80uflN0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FKRK7M6PcyvqEhMda6zDp7QCHEb7jA-ztfdZk8gmMN0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-26',
      horoscopeDateType: '今日',
       openUrl: 'https://wangxinleo.cn',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '鑫鑫小宝', year: '2001', date: '07-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '依依大宝', year: '2000', date: '09-26',
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
  CALLBACK_TEMPLATE_ID: 'IBuYoG-Kb76dVprgd8g23arFEWDqs7hzUJoaiEBm-YQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7scX6Czh7Ce-jx9klvwt80uflN0',
    }
  ],

}

module.exports = USER_CONFIG
