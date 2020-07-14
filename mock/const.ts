var Mock = require('mockjs');

export var productList = [
  {
    catgory: '书',
    title: '暮光之城系列',
    imgs: [
      '//img10.360buyimg.com/mobilecms/11833/105e2f6e-5b46-4c9d-8996-bf1542b77a95.jpg',
    ],
    tags: ['小说', '套装', '暮光之城'],
  },
  {
    catgory: '书',
    title: '暮光之城',
    imgs: [
      '//img10.360buyimg.com/n2/s240x240_18031/0361a6aa-25c7-44e0-9df5-1c95721d1efb.jpg!q70.jpg',
    ],
    tags: ['小说'],
  },
  {
    catgory: '书',
    title: '星空',
    imgs: [
      '//img13.360buyimg.com/n2/s240x240_jfs/t5611/18/1571055949/451665/bc9056da/59277e64N576fe52b.jpg!q70.jpg',
    ],
    tags: ['几米', '漫画'],
  },
  {
    catgory: '书',
    title: '暮色',
    imgs: [
      '//img14.360buyimg.com/n2/s240x240_14276/2039d349-67e3-4683-9fd7-59a39fa7feac.jpg!q70.jpg',
    ],
    tags: ['小说', '暮光之城'],
  },

  {
    catgory: '书',
    title: '茨威格精选',
    imgs: [
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/22996/23/4815/146046/5c358508E28b04284/e34a5fb08595dda0.png',
    ],
    tags: ['小说', '外国'],
  },

  {
    catgory: '书',
    title: '向左走向右走',
    imgs: [
      '//img11.360buyimg.com/n2/s240x240_jfs/t1/79882/3/5059/48381/5d32c735E46bc85da/b54b6d4d7975126d.jpg!q70.jpg',
    ],
    tags: ['几米', '漫画'],
  },

  {
    catgory: '书',
    title: '群山回唱',
    imgs: [
      '//img13.360buyimg.com/n2/s240x240_jfs/t2311/175/1769886898/247454/75c03727/56712bd0Nfabcc664.jpg!q70.jpg',
    ],
    tags: ['胡塞尼', '伊朗', '诺贝尔'],
  },
  {
    catgory: '书',
    title: '追风筝的人',
    imgs: [
      '//img11.360buyimg.com/n2/s240x240_jfs/t21010/207/701929964/289291/bfd00b3b/5b15fe0eN0c18f4a3.jpg!q70.jpg',
    ],
    tags: ['胡塞尼', '伊朗', '诺贝尔'],
  },
  {
    catgory: '书',
    title: '灿烂千阳',
    imgs: [
      '//img14.360buyimg.com/mobilecms/s316x316_jfs/t17245/75/557876508/270398/ac71e992/5a9668d7N5381995d.jpg!q70.dpg.webp',
    ],
    tags: ['胡塞尼', '伊朗', '诺贝尔'],
  },
  {
    catgory: '书',
    title: '假如给我三天光明',
    imgs: [
      '//img12.360buyimg.com/mobilecms/s316x316_jfs/t14026/170/261433633/270836/b11743b/5a06e009N81a66656.jpg!q70.dpg.webp',
    ],
    tags: ['教育', '海伦凯勒'],
  },
  {
    catgory: '书',
    title: '东方快车谋杀案（精装纪念新版）',
    imgs: [
      '//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/31472/20/14504/444048/5cbe81c3E015c6fb3/88cc78fff3d17920.jpg!q70.dpg.webp',
    ],
    tags: ['阿加莎', '侦探', '悬疑'],
  },
  {
    catgory: '书',
    title: '无人生还',
    imgs: [
      '//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/38482/4/1869/508076/5cbeb91aEce50269e/ae4334f521c29394.jpg!q70.dpg.webp',
    ],
    tags: ['阿加莎', '侦探', '悬疑', '孤岛'],
  },

  {
    catgory: '书',
    title: '悬崖山庄',
    imgs: [
      '//img10.360buyimg.com/mobilecms/s316x316_g12/M00/0D/1D/rBEQYVGtqhwIAAAAAAxjj9VECQkAACuKAK3q8wADGOn079.jpg!q70.dpg.webp',
    ],
    tags: ['阿加莎', '侦探', '悬疑'],
  },

  {
    catgory: '书',
    title: '阳光下的罪恶',
    imgs: [
      '//img14.360buyimg.com/mobilecms/s316x316_jfs/t163/362/2406322808/863708/173dc2db/53d0b3e7Nf0bd84b1.jpg!q70.dpg.webp',
    ],
    tags: ['阿加莎', '侦探', '悬疑'],
  },
  {
    catgory: '书',
    title: '蓝色列车之谜',
    imgs: [
      '//img12.360buyimg.com/mobilecms/s316x316_jfs/t2935/339/1454420274/145737/2039f430/57830bb7N2d837fb7.jpg!q70.dpg.webp',
    ],
    tags: ['阿加莎', '侦探', '悬疑'],
  },

  {
    catgory: '花',
    title: '满天星',
    imgs: [
      '//img10.360buyimg.com/mobilecms/s455x455_jfs/t1/20655/31/3115/418302/5c249229E57f9c94c/87ca0c2b6af0dd4a.jpg!q70.dpg.webp',
    ],
    tags: ['干花'],
  },
  {
    catgory: '眼镜',
    title: '太阳镜',
    imgs: [
      '//img13.360buyimg.com/mobilecms/s360x360_jfs/t1/109239/38/9717/483555/5e76d532E15960a01/b3be3efcb3a4c8a1.jpg!q70.dpg.webp',
    ],
    tags: ['防晒'],
  },
  {
    catgory: '冰箱',
    title: '创维冰箱',
    imgs: [
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/102296/38/18008/246689/5e8d20bbE3585069f/7e4e35e0cc039320.jpg!q70.jpg',
    ],
    tags: ['冰箱'],
  },
  {
    catgory: '冰箱',
    title: '海尔冰箱（Haier） BCD-258WDPM',
    imgs: [
      '//img12.360buyimg.com/n2/s240x240_jfs/t1/101668/29/17325/58569/5e86e76dE7b477bf6/60cd7676164cb749.jpg!q70.jpg',
    ],
    tags: ['冰箱'],
  },
  {
    catgory: '冰箱',
    title:
      '美的冰箱(Midea)226升 三门冰箱家用小型抗菌保鲜风冷无霜冷藏冷冻电子控温节能省电',
    imgs: [
      '//img13.360buyimg.com/n2/s240x240_jfs/t1/110575/5/10495/124509/5e7dd2aeEda64e4ba/0416b4d65304bc4e.jpg!q70.jpg',
    ],
    tags: ['美的冰箱'],
  },
  {
    catgory: '女装',
    title: '新款丝绒连帽宽松运动服',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdnkfezhk0j30a40f40u2.jpg',
    ],
    tags: ['女装'],
  },

  {
    catgory: '女装',
    title: '丝绒连衣裙高腰鱼尾裙荷叶边中长款长袖气质',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdnkejssyxj30a20fgq3d.jpg',
    ],
    tags: ['女装'],
  },
  {
    catgory: '女装',
    title: '新款vava明星同款棒球丝绒刺绣宽松夹克',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdnkc8w2zrj30aa0fgjt7.jpg',
    ],
    tags: ['女装'],
  },
  {
    catgory: '彩妆',
    title: '【新色上市】CHANEL 香奈儿可可小姐炫光唇膏口红#152#126#106#70',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdnkcwbx17j306u06qglr.jpg',
    ],
    tags: ['口红'],
  },
  {
    catgory: '包',
    title: '女款玫瑰金色PU长款钱夹43102',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdnkdnay5zj309c088mxa.jpg',
    ],
    tags: ['钱包'],
  },

  {
    catgory: '手机',
    title: '华为手机',
    imgs: [
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg!q70.jpg',
    ],
    tags: ['手机', '抗摔'],
  },

  {
    catgory: '手机',
    title: '华为手机-13',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdegmiois8j30hm0eo79w.jpg',
    ],
    tags: ['手机', '抗摔', '彩色'],
  },

  {
    catgory: '报纸',
    title: '老报纸',
    imgs: [
      '//img11.360buyimg.com/n2/s370x370_jfs/t1/50238/3/3329/373862/5d118888Ebc20ea79/52977f9388dc1867.jpg!q70.jpg',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/53673/26/3253/319180/5d118889E0aa18b33/e9e83b343c21b9f0.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/55261/29/13423/274282/5da340c1E1f0ddfd4/36967f8d08908ce7.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s750x750_11833/105e2f6e-5b46-4c9d-8996-bf1542b77a95.jpg!q80.dpg.webp',
    ],
    tags: ['复古'],
  },
  {
    catgory: '女装',
    title: '女装',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdnkwaug8dj30ae0fawfe.jpg',
    ],
    tags: ['运动'],
  },

  {
    catgory: '书',
    title: '马普尔小姐探案全集',
    imgs: [
      '//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/75302/21/14502/173631/5dbf9bb0E79a9a3ab/26b8aa20577daf11.jpg!q70.dpg.webp',
    ],
    tags: ['阿加莎', '侦探', '悬疑'],
  },
  {
    catgory: '书',
    title: 'ABC谋杀案',
    imgs: [
      '//img13.360buyimg.com/n2/s240x240_g13/M04/00/1B/rBEhVFHjRiQIAAAAAA1kQ5-Tu6gAABD6gGSNuYADWRb512.jpg!q70.jpg',
    ],
    tags: ['阿加莎', '侦探', '悬疑'],
  },
  {
    catgory: '书',
    title: '罗杰疑案',
    imgs: [
      '//img13.360buyimg.com/n2/s240x240_g10/M00/0D/0B/rBEQWFFL1vcIAAAAAAuNNu-ercwAACnBAOkS8QAC41O159.jpg!q70.jpg',
    ],
    tags: ['阿加莎', '侦探', '悬疑'],
  },
  {
    catgory: '书',
    title: 'Never Let Me Go',
    imgs: [
      '//img12.360buyimg.com/mobilecms/s316x316_15302/a9303373-9bd6-4ea0-a284-1fc44f889c45.jpg!q70.dpg.webp',
    ],
    tags: ['石黑一雄', '科幻'],
  },
  {
    catgory: '书',
    title:
      '三国演义 这是四大名著之一 打打杀杀的 还可以吧 有时间可以看看 虽然打架杀人挺不好看的 字数够了吧',
    imgs: [
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/54594/9/2803/246916/5d0a1635E98b4dc52/095f4cc72141902f.jpg!q70.jpg',
    ],
    tags: ['四大名著'],
  },
  {
    catgory: '书',
    title: '老人与海',
    imgs: [
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/83851/11/10334/500835/5d8057c8Eb0ec0a59/2d94e84aaeeeda27.jpg!q70.jpg',
    ],
    tags: ['名著', '海明威'],
  },
  {
    catgory: '书',
    title: '月亮与六便士',
    imgs: [
      '//img20.360buyimg.com/mobilecms/s316x316_jfs/t1/80024/25/13916/269599/5db6568cE097e42be/1dbcfb491f70b963.jpg!q70.dpg.webp',
    ],
    tags: ['名著', '毛姆'],
  },

  {
    catgory: '女装',
    title: '女装',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdnkzoz2rwj309a0fi44m.jpg',
    ],
    tags: ['报纸风'],
  },

  {
    catgory: '女装',
    title: '女装',
    imgs: [
      'https://tva1.sinaimg.cn/large/00831rSTly1gdegl69kmoj30gi0fqq9x.jpg',
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg!q70.jpg',
      'https://tva1.sinaimg.cn/large/00831rSTly1gdegmiois8j30hm0eo79w.jpg',
    ],
    tags: ['风'],
  },
];
