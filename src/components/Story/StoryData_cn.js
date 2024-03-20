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
    { type: 'header', level: 3, content: '3 循环，双活和无胜负' },
    { type: 'text', content: '如果黑白双方执意于循环的场面，以无胜负判定。' },
    { type: 'image', src: '/story1/8.png', alt: '图片描述' },
    { type: 'text', content: '123形成无限循环。如果双方均不收手将以无胜负收场。此形逻辑上来说算双活最合理，终局时算黑2子，白8子。' },
    { type: 'image', src: '/story1/9.png', alt: '图片描述' },
    {
      type: 'text', 
      content: `既然围棋是一项竞技运动，
                自然会设立各种规则来排除无胜负或者平局的情况。
                从理论上讲，如果扩大禁全同规则的范围，（适用于问题局部的所有之前的局面，而不仅仅是全局的1手之前），就可以完全避免无胜负。
                但是执行起来有难度，判断也会很麻烦。无胜负的方案最为实在。
                这里的例子可以作为双活处理，但循环的棋形无穷无尽，并不是所有的循环都可以作为双活处理。
                我认为最佳的解决方法是以每种情况当成个例来作判断，让棋手决定他们认为公平的做法，而不是制定绝对的规则。
                游戏的本质是将人们聚集在一起，创造一种共同的体验，即使是剧情偶尔会以意想不到的方式展开。
                我认为这比输赢的最终结果更重要。
                `
    },
    { type: 'header', level: 3, content: '4 子多为胜' },
    { type: 'text', content: '在终局时，清点黑白双方子数，在棋盘上存活最多棋子的一方获胜。相同则和棋。当前局面以中国规则的子空皆地来算是黑胜7子，惟目是地的日本规则的话是黑胜6目。不过我偏爱古代还棋头的数子法。' },
    { type: 'image', src: '/story1/10.png', alt: '图片描述' },
    { type: 'text', content: '黑白双方可以继续往空中填子，直到即将被提起，不能继续填为止。数子的结果：黑42子，白33子，黑胜9子。' },
    { type: 'image', src: '/story1/11.png', alt: '图片描述' },
    { type: 'text', content: '其实没有必要填满才能计算胜负，到此为止，只需要计算子加空，减去每块棋不能填的2子就与数子结果相同。' },
    { type: 'image', src: '/story1/12.png', alt: '图片描述' },
  ],
  '2': [
    { type: 'header', level: 3, content: '终局局面1' },
    { type: 'image', src: '/story2/2_1.png', alt: '图片描述' },
    {
      type: 'text', content: `数子的结果黑37子，白38子，白胜1子。
                              左上盘角曲四的形状通常来说是黑棋的死棋，因为白在补净所有劫材之后开劫，黑无应手。
                              但在此，双方在右下形成了双活，白于是无法补净最后的劫材。白开劫不利，遂不动盘角曲四而终局。
                              ` },
    { type: 'header', level: 3, content: '终局局面2' },
    { type: 'image', src: '/story2/2_2.png', alt: '图片描述' },
    {
      type: 'text', content: `三劫循环，白1提劫后终局，数子的结果黑20子，白21子，白胜1子。黑以下可以提劫，以右边数子为代价得上方白数子，但结果不变。
                              如果双方合意的话也可以作无胜负判定。
                              ` },
    { type: 'header', level: 3, content: '终局局面3' },
    { type: 'image', src: '/story2/2_3.png', alt: '图片描述' },
    {
      type: 'text', content: `三劫循环，数子的结果黑20子，白21子，白胜1子。
                              如果双方合意的话也可以作无胜负判定。
                              ` },
    { type: 'header', level: 3, content: '终局局面4' },
    { type: 'image', src: '/story2/2_4.png', alt: '图片描述' },
    {
      type: 'text', content: `白1提劫，黑因无应手而不得不终局。数子的结果黑20子，白21子，白胜1子。
                              从棋形上看，白左上为明显的死棋，但黑没有杀白的手段。这里其实是黑停一手，接着白停一手，此时黑可否提劫的问题。
                              我认为停一手等于没有着手，因此不能够算作一手。根据禁止同局的规则，黑不能提劫。
                              ` },
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
    { type: 'header', level: 3, content: '标题 3' },
    {
      type: 'code',
      language: 'java', // or 'sql', 'python', etc.
      content: `public class HelloWorld {
      public static void main(String[] args) {
        System.out.println("Hello, World!");
      }
    }`
    },
  ],
};

export const stories_title = {
  '1': '围棋规则',
  '2': '胜负判定',
  '3': '故事标题 3',
  '4': '故事标题 4',
  '5': '故事标题 5',
  '6': '故事标题 6',
};