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
    { type: 'header', level: 3, content: 'Sabaki' },
    { type: 'text', content: '围棋GTP引擎的GUI前端，兼具优雅与实用性的完美围棋应用。' },
    { type: 'image', src: '/story3/sabaki.png', alt: '画像の説明' },
    { type: 'link', href: 'https://github.com/SabakiHQ/Sabaki', content: 'Github' },
    {
      type: 'text', content: `Windows用户可以访问右侧的Releases，下载并安装sabaki-最新版本-win-x64-setup.exe。
      ` },
    { type: 'header', level: 3, content: 'Katrain' },
    { type: 'text', content: '使用Katago进行局势判断与最佳手分析。' },
    { type: 'image', src: '/story3/katrain.png', alt: '画像の説明' },
    { type: 'link', href: 'https://github.com/sanderland/katrain', content: 'Github' },
    {
      type: 'text', content: `阅读Github文档可快速了解如何安装和配置Katago。Katrain有带下载Katago的功能，无需自己单独下载Katago
      所以比较特别适合没有技术背景的用户。这软件大概是利用AI学棋的最佳选择。
      ` },
    { type: 'header', level: 3, content: 'Katago' },
    { type: 'text', content: '囲碁AI。' },
    { type: 'link', href: 'https://github.com/lightvector/KataGo', content: 'Github' },
    {
      type: 'text', content: `阅读文档至关重要。Katago最有用的地方不仅在于胜率表示，还在于它能估算子差。
      有趣的是，还支持多种围棋规则和棋盘大小。很可能是开源软件中最强大的围棋AI。
      ` },
    {
      type: 'text', content: `Katago可用cmd启动GTP引擎，但图形用户界面的话推荐Sabaki。首先，
      下载相应版本的katago，将下载的模型default_model.bin.gz放在与exe相同的文件夹中，然后以如下方式运行Sabaki启动
      并在"文件"->"首选项"->"引擎"中添加 katago。引擎
      名称可以是任何名称，路径是katago.exe的绝对路径。参数如下：.
      ` },
    {
      type: 'code',
      language: 'bash',
      content: `gtp -model default_model.bin.gz -config default_gtp.cfg`
    },
    { type: 'text', content: '在Sabaki中显示引擎侧边栏，并成功连接Katago即表示成功。' },
    { type: 'text', content: '撰写本文时，我比较期待的，传闻中的，更为强大的b28神经网络尚未发布。' },
    { type: 'header', level: 3, content: 'Drago' },
    { type: 'text', content: '重要的围棋应用，仅支持Windows。' },
    { type: 'image', src: '/story3/drago.png', alt: '画像の説明' },
    { type: 'link', href: 'http://www.godrago.net/', content: '主页' },
    { type: 'link', href: 'https://www.mediafire.com/file_premium/dbgctgelb825tig/PortableDrago0433.zip', content: '下载' },
    { type: 'text', content: `虽然Drago也支持GTP引擎，但显然Sabaki更为出色。
    不过棋谱管理功能和将大量棋谱导出为PDF以便打印的功能很方便。打印之时可以选择各种排版。所谓的大量，经测试，上限大约为500。超过这个数量可能会报错。` },
    { type: 'header', level: 3, content: 'StoneBase' },
    { type: 'text', content: '以前在中国的各类论坛上知名围棋应用，现在连正式的网站或下载链接都以不复存在，仅支持Windows。' },
    { type: 'image', src: '/story3/stonebase.png', alt: '画像の説明' },
    { type: 'link', href: 'https://www.mediafire.com/file_premium/xibtstu50bmxz5q/setup.4.7.7.2272.exe', content: '下载' },
    { type: 'text', content: `非英语版本安装时会出现乱码的情况。可用作棋谱的数据库管理应用
    程序。StoneBase和Drago可在Linux通过Bottle应用程序运行。除了打印功能外大致正常。` },
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
  '3': 'PC围棋软件',
  '4': '故事标题 4',
  '5': '故事标题 5',
  '6': '故事标题 6',
};