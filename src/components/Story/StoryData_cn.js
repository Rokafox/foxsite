export const stories = {
  '1': [
    { type: 'text', content: '这里介绍的是我认为最适合围棋的规则，和目前国际围棋比赛中，最常用的日本规则和中国规则不完全相同。' },
    { type: 'header', level: 3, content: '1 气尽提取' },
    { type: 'text', content: '一块棋子被对方棋子横竖包围起来就被提取。' },
    { type: 'image', src: '/story1/1.png', alt: '图片描述' },
    { type: 'text', content: '白1可提起黑4子。' },
    { type: 'image', src: '/story1/2.png', alt: '图片描述' },
    { type: 'text', content: '例2' },
    { type: 'image', src: '/story1/3.png', alt: '图片描述' },
    { type: 'text', content: '畏缩在边角的白大块已被完全包围，被黑一手提起。' },
    { type: 'image', src: '/story1/4.png', alt: '图片描述' },
    { type: 'header', level: 3, content: '2 禁止同局' },
    { type: 'text', content: '落子之后，不能使对方面临和前一手时完全相同的局面。这里只限前一手。' },
    { type: 'image', src: '/story1/5.png', alt: '图片描述' },
    { type: 'text', content: '这是劫争的基本型，白提后黑不可立即反提。' },
    { type: 'image', src: '/story1/6.png', alt: '图片描述' },
    { type: 'text', content: '黑需要在其他地方下一手才可以重新提回一子。' },
    { type: 'image', src: '/story1/7.png', alt: '图片描述' },
    { type: 'header', level: 3, content: '3 循环无胜负' },
    { type: 'text', content: '如果黑白双方执意于循环的场面，以无胜负判定。' },
    { type: 'image', src: '/story1/8.png', alt: '图片描述' },
    { type: 'text', content: '123形成无限循环。如果双方均不收手将以无胜负收场。逻辑上来说应该算双活，终局时算黑2子，白8子。' },
    { type: 'image', src: '/story1/9.png', alt: '图片描述' },
    { type: 'text', content: '是否利用无胜负而避免输棋应取决于个人判断。但作为比赛项目的围棋不可避免的会制定各种规则排除无胜负和和棋的情况。' },
    { type: 'header', level: 3, content: '4 子多为胜' },
    { type: 'text', content: '在终局时，清点黑白双方子数，在棋盘上存活最多棋子的一方获胜。相同则和棋。当前局面以中国规则的子空皆地来算是黑胜7子，惟目是地的日本规则的话是黑胜6目。不过我偏爱古代还棋头的数子法。' },
    { type: 'image', src: '/story1/10.png', alt: '图片描述' },
    { type: 'text', content: '黑白双方可以继续往空中填子，直到即将被提起，不能继续填为止。数子的结果：黑42子，白33子，黑胜9子。' },
    { type: 'image', src: '/story1/11.png', alt: '图片描述' },
    { type: 'text', content: '其实没有必要填满才能计算胜负，到此为止，只需要计算子加空，减去每块棋不能填的2子就与数子结果相同。' },
    { type: 'image', src: '/story1/12.png', alt: '图片描述' },
  ],
  '2': [
    { type: 'text', content: '这是第一个故事。' },
    { type: 'text', content: '这是一张图片：' },
    { type: 'image', src: '/logo512.png', alt: '图片描述' },
    { type: 'text', content: '图片后的更多文本。' },
    { type: 'link', href: 'https://www.example.com', content: '链接到example.com' },
    {
      type: 'ordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    {
      type: 'unordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    { type: 'header', level: 2, content: '标题 2' },
    { type: 'header', level: 3, content: '标题 3' }
  ],
  '3': [
    { type: 'text', content: '这是第一个故事。' },
    { type: 'text', content: '这是一张图片：' },
    { type: 'image', src: '/logo512.png', alt: '图片描述' },
    { type: 'text', content: '图片后的更多文本。' },
    { type: 'link', href: 'https://www.example.com', content: '链接到example.com' },
    {
      type: 'ordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    {
      type: 'unordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    { type: 'header', level: 2, content: '标题 2' },
    { type: 'header', level: 3, content: '标题 3' }
  ],
  '4': [
    { type: 'text', content: '这是第一个故事。' },
    { type: 'text', content: '这是一张图片：' },
    { type: 'image', src: '/logo512.png', alt: '图片描述' },
    { type: 'text', content: '图片后的更多文本。' },
    { type: 'link', href: 'https://www.example.com', content: '链接到example.com' },
    {
      type: 'ordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    {
      type: 'unordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    { type: 'header', level: 2, content: '标题 2' },
    { type: 'header', level: 3, content: '标题 3' }
  ],
  '5': [
    { type: 'text', content: '这是第一个故事。' },
    { type: 'text', content: '这是一张图片：' },
    { type: 'image', src: '/logo512.png', alt: '图片描述' },
    { type: 'text', content: '图片后的更多文本。' },
    { type: 'link', href: 'https://www.example.com', content: '链接到example.com' },
    {
      type: 'ordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    {
      type: 'unordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    { type: 'header', level: 2, content: '标题 2' },
    { type: 'header', level: 3, content: '标题 3' }
  ],
  '6': [
    { type: 'text', content: '这是第一个故事。' },
    { type: 'text', content: '这是一张图片：' },
    { type: 'image', src: '/logo512.png', alt: '图片描述' },
    { type: 'text', content: '图片后的更多文本。' },
    { type: 'link', href: 'https://www.example.com', content: '链接到example.com' },
    {
      type: 'ordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    {
      type: 'unordered-list', items: [
        { content: '列表中的第一项' },
        { content: '列表中的第二项' },
        { content: '列表中的第三项' }
      ]
    },
    { type: 'header', level: 2, content: '标题 2' },
    { type: 'header', level: 3, content: '标题 3' }
  ],
};

export const stories_title = {
  '1': '围棋规则',
  '2': '故事标题 2',
  '3': '故事标题 3',
  '4': '故事标题 4',
  '5': '故事标题 5',
  '6': '故事标题 6',
};