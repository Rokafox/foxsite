export const stories = {
    '1': [
      { type: 'text', content: 'ここで紹介された囲碁のルールは、私が囲碁はゲームとしてに最も適していると考えるものであり、今日の国際的な囲碁大会で最も一般的に使用されている日本や中国のルールとまったく同じではない。' },
      { type: 'header', level: 3, content: '1 囲まれた石は取れる' },
      { type: 'text', content: '縦横4ヶ所で囲まれた石が取られる。' },
      { type: 'image', src: '/story1/1.png', alt: '画像の説明' },
      { type: 'text', content: '白1ここで打てば取れる。' },
      { type: 'image', src: '/story1/2.png', alt: '画像の説明' },
      { type: 'text', content: '例2' },
      { type: 'image', src: '/story1/3.png', alt: '画像の説明' },
      { type: 'text', content: '隅っこの白い塊が同じように。' },
      { type: 'image', src: '/story1/4.png', alt: '画像の説明' },
      { type: 'header', level: 3, content: '2 全局同形禁止' },
      { type: 'text', content: '石を打つと相手をすぐ前の局面と同じ局面になることはできない。' },
      { type: 'image', src: '/story1/5.png', alt: '画像の説明' },
      { type: 'text', content: '白1を打ってから黒にとってすぐに取り返せないアタリの形です。これは劫のルールという。' },
      { type: 'image', src: '/story1/6.png', alt: '画像の説明' },
      { type: 'text', content: '全局同形を避けるため黒が一度他の場所に打てなければなりません。白3のあとで黒4で石を取れる、今度は問題ないね。' },
      { type: 'image', src: '/story1/7.png', alt: '画像の説明' },
      { type: 'header', level: 3, content: '3 循環、セキと無勝負' },
      { type: 'text', content: '黒と白が譲らない同じ戦いを繰り返す、永遠に終わらない局面になることもあります。' },
      { type: 'image', src: '/story1/8.png', alt: '画像の説明' },
      { type: 'text', content: '123で終わらぬ永遠になります。終盤ではセキとして扱い、古典中国ルールで生きてる石を数えるとここで黒が石2個、白が8個と計算されるのは合理的だと思う。' },
      { type: 'image', src: '/story1/9.png', alt: '画像の説明' },
      {
        type: 'text', 
        content: `囲碁が競技スポーツである以上、
                  無勝負や引き分けの状況を排除するルールが作らないとは考えられない。
                  理論上、2の全局同形禁止のルールの範囲を広げれば(すぐ前の局面だけではなく、すべて前の局面に適用させる)
                  無勝負を完全に排除できるが、判断と施行が難しいだろう。
                  ここの例はセキ扱いにもできるが、循環の形が無限にあって、全部セキ扱いになれるわけではない。
                  解決策として、絶対的なルールを作るより、それぞれのケースを検討し、公平と思われるものを対局者で決定するのがいいと思う。
                  ゲームというものの本質が、人々を集め、共有体験を作り出し、時には思いもよらない方法で物語を展開させることである。
                  勝ち負けという最終的な結果よりも、対局の物語がもっと重要になる。 
                  `
      },
      { type: 'header', level: 3, content: '4 石が多いほうが勝ち' },
      { type: 'text', content: '対局は進むといずれ終局になる。すると盤上に残っている石の数が多い方が勝ちとなり、数が同じである場合は引き分けとなる。下の図の場合では、中国ルールで数えると7石で黒が勝ち、日本ルールで数えると6目差で同じく黒が勝つ。でも私はやはり生きてる石を数える中国古典のルールを好むね。' },
      { type: 'image', src: '/story1/10.png', alt: '画像の説明' },
      { type: 'text', content: '石を増やすためにお互いぎりぎり取られないまで自分の陣地で石を置く。終わたら石を数える。結果：黒42個、白33個、9個差で黒の勝ち。' },
      { type: 'image', src: '/story1/11.png', alt: '画像の説明' },
      { type: 'text', content: '実は勝敗を決まるために自分の陣地でぎりぎりまで石を埋める必要はなく、この局面でも数えるね。自分の陣地プラス石マイナス2個埋めたらまずい石で計算すれば結果は同じになる。' },
      { type: 'image', src: '/story1/12.png', alt: '画像の説明' },
    ],
    '2': [
      { type: 'header', level: 3, content: '終局局面1' },
      { type: 'image', src: '/story2/2_1.png', alt: '画像の説明' },
      {
        type: 'text', content: `石を数えると、黒37個、白38個、1個の差で白の勝ち。
                                左上の隅の曲がり4目の形は通常、黒の死に石とされます。白がすべてのコウ材を清算した後にコウを仕掛けると、黒が対抗策がない。
                                しかし、ここでは両者が右下でセキを形成しているため、白は最後のコウ材を清算することができない。白がコウを仕掛けると不利になり、結局、隅の曲がり4目を動かさずに終局になる。
                                ` },
      { type: 'header', level: 3, content: '終局局面2' },
      { type: 'image', src: '/story2/2_2.png', alt: '画像の説明' },
      {
        type: 'text', content: `三劫循環、白1でコウを取った後に終局、数子の結果は黒20個、白21個、1個の差で白の勝ち。黒はコウを取り返すことができますが、それは右側を犠牲にして上側の白を得ることになるから結果は変わらない。
                                両方が合意すれば、無勝負とも判断できる。
                                ` },
      { type: 'header', level: 3, content: '終局局面3' },
      { type: 'image', src: '/story2/2_3.png', alt: '画像の説明' },
      {
        type: 'text', content: `三劫循環、数子の結果は黒20個、白21個、1個の差で白の勝ち。
                                両方が合意すれば、無勝負とも判断できる。
                                ` },
      { type: 'header', level: 3, content: '終局局面4' },
      { type: 'image', src: '/story2/2_4.png', alt: '画像の説明' },
      {
        type: 'text', content: `白1でコウを取り、黒は対処の手がなく終局せざるを得ない。数子の結果は黒20個、白21個、1個の差で白の勝ち。
                                石の形を見ると、白の左上は明らかに死に石ですが、黒には白を取る手段がない。ここで黒がパス、その後白がパス、この時点で黒がコウを取ることができるかどうかが問題になります。
                                パスは着手ではないし、どれだけ両方がパスしてもすぐ前の局面は変わらない。全局同形禁止ルールに基づき、黒はコウを取り返すことができない。
                                ` },
    ],
    '3': [
      { type: 'text', content: 'これが最初のストーリーです。' },
      { type: 'text', content: 'これは画像です：' },
      { type: 'image', src: '/logo512.png', alt: '画像の説明' },
      { type: 'text', content: '画像の後にさらにテキストがあります。' },
      { type: 'link', href: 'https://www.example.com', content: 'example.comへのリンク' },
      { type: 'ordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'unordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'header', level: 2, content: '見出し2' },
      { type: 'header', level: 3, content: '見出し3' },
    ],
    '4': [
      { type: 'text', content: 'これが最初のストーリーです。' },
      { type: 'text', content: 'これは画像です：' },
      { type: 'image', src: '/logo512.png', alt: '画像の説明' },
      { type: 'text', content: '画像の後にさらにテキストがあります。' },
      { type: 'link', href: 'https://www.example.com', content: 'example.comへのリンク' },
      { type: 'ordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'unordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'header', level: 2, content: '見出し2' },
      { type: 'header', level: 3, content: '見出し3' },
    ],
    '5': [
      { type: 'text', content: 'これが最初のストーリーです。' },
      { type: 'text', content: 'これは画像です：' },
      { type: 'image', src: '/logo512.png', alt: '画像の説明' },
      { type: 'text', content: '画像の後にさらにテキストがあります。' },
      { type: 'link', href: 'https://www.example.com', content: 'example.comへのリンク' },
      { type: 'ordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'unordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'header', level: 2, content: '見出し2' },
      { type: 'header', level: 3, content: '見出し3' },
    ],
    '6': [
      { type: 'text', content: 'これが最初のストーリーです。' },
      { type: 'text', content: 'これは画像です：' },
      { type: 'image', src: '/logo512.png', alt: '画像の説明' },
      { type: 'text', content: '画像の後にさらにテキストがあります。' },
      { type: 'link', href: 'https://www.example.com', content: 'example.comへのリンク' },
      { type: 'ordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'unordered-list', items: [
        { content: 'リスト内の最初のアイテム' },
        { content: 'リスト内の2番目のアイテム' },
        { content: 'リスト内の3番目のアイテム' }
      ]},
      { type: 'header', level: 2, content: '見出し2' },
      { type: 'header', level: 3, content: '見出し3' },
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
      '1': '囲碁のルール',
      '2': '勝負の審判',
      '3': 'ストーリータイトル3',
      '4': 'ストーリータイトル4',
      '5': 'ストーリータイトル5',
      '6': 'ストーリータイトル6',
    };