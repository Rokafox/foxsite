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
      { type: 'header', level: 3, content: 'Sabaki' },
      { type: 'text', content: '囲碁思考エンジンと連携できるGUIフロントエンド。優雅さと実用性を兼ね備えた完璧な囲碁アプリ。' },
      { type: 'image', src: '/story3/sabaki.png', alt: '画像の説明', width: '100%' },
      { type: 'link', href: 'https://github.com/SabakiHQ/Sabaki', content: 'Githubリンク' },
      {
        type: 'text', content: `Windowsユーザーは、右のReleasesをアクセスし、sabaki-最新バージョン-win-x64-setup.exeをダウンロードしてインストールすればいい。
        File->Preferences->General->Languageで日本語を選択できる。
        ` },
      { type: 'header', level: 3, content: 'Katrain' },
      { type: 'text', content: 'Katagoで囲碁対局を即座に分析するツール。' },
      { type: 'image', src: '/story3/katrain.png', alt: '画像の説明', width: '100%' },
      { type: 'link', href: 'https://github.com/sanderland/katrain', content: 'Githubリンク' },
      {
        type: 'text', content: `インストール、Katagoの設定などにはドキュメンテーションを読めばすぐにわかるはず。KataGoを自分でダウンロードする必要はなく、
        アプリ内でもダウンロードできる。技術的な知識のないユーザーにやさしいUIが特徴。AIを
        使って囲碁を勉強するには最適でこれ一択と言ってもいいくらい。
        ` },
      { type: 'header', level: 3, content: 'Katago' },
      { type: 'text', content: '囲碁AI。' },
      { type: 'link', href: 'https://github.com/lightvector/KataGo', content: 'Githubリンク' },
      {
        type: 'text', content: `ドキュメンテーションを読むのは非常に大事。結構いろいろ書いてます。Katagoの一番役立つところは勝率だけでなく、スコア(古典中国ルールで石の数の差)を推定
        できること。また、珍しく、複数の囲碁ルールとボードサイズも対応している。実力はオーペンソースの囲碁AIの中で一番強いの可能性は高い。
        ` },
      {
        type: 'text', content: `Katagoは囲碁思考エンジンとして使うにはコマンドラインでもいいんだが、GUI役のSabakiがおすすめです。Windowsユーザーは
        まず、適切なバージョンのkatagoをダウンロードし、exeと同じフォルダにダウンロードしたモデルdefault_model.bin.gzを置いて、Sabakiを
        起動し、File->Preferences->EnginesでKatagoを追加。
        エンジン名は何でもいい、パスはkatago.exeの絶対パス。引数:
        ` },
      {
        type: 'code',
        language: 'bash',
        content: `gtp -model default_model.bin.gz -config default_gtp.cfg`
      },
      { type: 'text', content: 'Sabakiでエンジンサイドバーを表示し、そこでKatagoを接続できれば成功です。' },
      { type: 'text', content: 'この記事を書いた時点では噂のb28ニューラルネットはまだリリースされていない。どれだけ強くなるのは気ににゃる。' },
      { type: 'header', level: 3, content: 'Drago' },
      { type: 'text', content: '重要な囲碁アプリ。Windowsのみ対応。' },
      { type: 'image', src: '/story3/drago.png', alt: '画像の説明', width: '100%' },
      { type: 'link', href: 'http://www.godrago.net/', content: 'ウェブサイト' },
      { type: 'link', href: 'https://www.mediafire.com/file_premium/dbgctgelb825tig/PortableDrago0433.zip', content: 'ダウンロード' },
      { type: 'text', content: `Dragoは一応囲碁思考エンジンにも連携できますが、Sabakiが輝きしすぎているためあんまり使われていない。しかし、
      囲碁の棋譜管理、大量の棋譜をpdfして出力しプリントする機能は素晴らしいと思う。棋譜の出力デザインもカストマイズできる。
      ここで大量というのは、上限500くらい。これ以上になると謎のエラーが出る。` },
      { type: 'header', level: 3, content: 'StoneBase' },
      { type: 'text', content: '古い中華囲碁アプリ。ウェブサイトもまともなダウンロードリンクも存在しません。Windowsのみ対応。' },
      { type: 'image', src: '/story3/stonebase.png', alt: '画像の説明', width: '100%' },
      { type: 'link', href: 'https://www.mediafire.com/file_premium/xibtstu50bmxz5q/setup.4.7.7.2272.exe', content: 'ダウンロード' },
      { type: 'text', content: `英語版以外のインストールは文字化けになる。棋譜のデータベース管理アプリとして利用できる。
      古いだが見た目も機能もぜんぜん悪くない。StoneBaseとDragoはLinuxの
      Bottleアプリでの動作はプリント機能以外は大体正常です。` },
    ],
    '4': [
      { type: 'text', content: `これらはKatagoの自戦1600局を収録したpdf文書とSGFファイル。ルールは古典中国ルール、
      手数は30手まで、一手は800visitsくらい計算されてる。Katagoの布石探索のランダム性を少し増やしたから必ず最も良い手を選ぶわけではない。` },
      { type: 'text', content: 'PDFファイルはDragoが作成されたもの。棋譜ライブラリにインポートする際、重複した70局が削除され、1530局が残った。3つのpdfに分かれている。' },
      { type: 'link', href: 'https://www.mediafire.com/file_premium/i4hvzk2wppu0rga/openings_0.pdf', content: 'pdf0' },
      { type: 'link', href: 'https://www.mediafire.com/file_premium/owx22bbx3h1akfq/openings_1.pdf', content: 'pdf1' },
      { type: 'link', href: 'https://www.mediafire.com/file_premium/8ws91uum4s2opx2/openings_2.pdf', content: 'pdf2' },
      { type: 'link', href: 'https://www.mediafire.com/file_premium/yp7m8uycfm71zyg/openings_sgf.zip', content: 'sgfファイル' },
      { type: 'text', content: '例：' },
      { type: 'image', src: '/story4/opening_example.png', alt: '画像の説明', width: '100%' },
    ],
    '5': [
      { type: 'text', content: 'ここは、時間が静止され、SNSと広告の喧噪から逃れるところです。' },
      { type: 'text', content: `検索エンジンやソーシャルメディアのフィードから見つけることはできない、それでも
      あなたはこの見つけた者にしか明かされない私だけの桃源郷に辿り着いた。これは偶然ではなく、運命に導かれた出会いなのでしょう。` },
      { type: 'text', content: `しかし、なぜこのサイトがこんなデジタル時代の隠者のように存在し、
      世間からの隔絶を選んだのか、あなたは疑問に思うかもしれない。理由はここは単なる情報掲載サイトではなく、
      人類文化のユニークな分岐でもあるのです。この乖離は意図的なものであり、主流がしばしば描く均質な風景に対する反抗である。
      ` },
      { type: 'text', content: '私には、異なる夢を見っている。' },
    ],
    '6': [
      { type: 'text', content: 'これが最初のストーリーです。' },
      { type: 'text', content: 'これは画像です：' },
      { type: 'image', src: '/logo512.png', alt: '画像の説明', width: '100%' },
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
      {
        type: 'progress-bar',
        completed: 52.3,
        bgColor: '#000000',
        height: '30px',
        labelColor: '#ffffff',
        labelSize: '20px',
        maxCompleted: 100,
        customLabel: '52.3%'
      },
    ],
  };
    
 export const stories_title = {
      '1': '囲碁のルール',
      '2': '勝負の審判',
      '3': 'PC用囲碁アプリ',
      '4': '囲碁布石1600局',
      '5': '武陵桃源',
      '6': 'ストーリータイトル6',
    };