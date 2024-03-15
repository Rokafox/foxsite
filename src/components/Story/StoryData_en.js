export const stories = {
    '1': [
      { type: 'text', content: 'The rules presented here are what I consider to be the most appropriate for the game of Go, and are not exactly the same as the Japanese and Chinese rules that are most commonly used in international Go competitions today.' },
      { type: 'header', level: 3, content: '1 Stone Capture Rule' },
      { type: 'text', content: 'Stones with no liberty left can be captured.' },
      { type: 'image', src: '/story1/1.png', alt: '图片描述' },
      { type: 'text', content: 'White can easily capture 4 stones of black.' },
      { type: 'image', src: '/story1/2.png', alt: '图片描述' },
      { type: 'text', content: 'Another example:' },
      { type: 'image', src: '/story1/3.png', alt: '图片描述' },
      { type: 'text', content: 'Large block of white stones are surrounded on the edge and corner of the board and only one liberty left, Black can easily capture them.' },
      { type: 'image', src: '/story1/4.png', alt: '图片描述' },
      { type: 'header', level: 3, content: '2 Simple Ko Rule' },
      { type: 'text', content: 'After a move, the opponent cannot have the exact same board as in his previous move. The ko rule is to prevent infinite repetition of the same board positions, otherwise it would lead to a deadlock with no progression in the game' },
      { type: 'image', src: '/story1/5.png', alt: '图片描述' },
      { type: 'text', content: 'After white captures a stone, black cannot immediately recapture by placing in X, as it would result in the exact same board before white 1.' },
      { type: 'image', src: '/story1/6.png', alt: '图片描述' },
      { type: 'text', content: 'Black will have to play elsewhere first, If white also choose to respond elsewhere, then the ko can be recaptured by black.' },
      { type: 'image', src: '/story1/7.png', alt: '图片描述' },
      { type: 'header', level: 3, content: '3 Cycles' },
      { type: 'text', content: 'If black and white stuck on cycles, it should be ruled as a no-win situation.' },
      { type: 'image', src: '/story1/8.png', alt: '图片描述' },
      { type: 'text', content: '123 is forming an infinite loop. If neither player stops, it ends in a no-win situation. Logically, it should be considered as seki, black keeps 2 stones and white keeps 8.' },
      { type: 'image', src: '/story1/9.png', alt: '图片描述' },
      { type: 'text', content: 'Whether or not to use no-win situations to avoid losing should be left to individual judgment. However, it is inevitable that Go, as a competitive sport, will have rules to exclude no-win and draw situations.' },
      { type: 'header', level: 3, content: '4 End of the Game' },
      { type: 'text', content: 'In the endgame, the black and white stones are counted and the player with the most surviving stones on the board wins. If they are the same, the game is drawn. As of the endgame shown in below, Black wins by 7 stones according to Chinese rules, and Black wins by 6 points according to Japanese rules. However, I do prefer the ancient chinese stone scoring rules.' },
      { type: 'image', src: '/story1/10.png', alt: '图片描述' },
      { type: 'text', content: 'Black and white can continue to fill their territory with stones until they can no longer do so as the stones are about to be captured. Then we can count stones: 42 for black, 33 for white, thus black wins by 9 stones.' },
      { type: 'image', src: '/story1/11.png', alt: '图片描述' },
      { type: 'text', content: 'It is not really necessary to fill territory to determine the result, counting the total of territory plus stones and subtract 2 for each connected blocks of stones will give the same result.' },
      { type: 'image', src: '/story1/12.png', alt: '图片描述' },
    ],
    '2': [
        { type: 'text', content: 'This is the second story.' },
        { type: 'text', content: 'This is a image:'},
        { type: 'image', src: '/logo512.png', alt: 'Image description' },
        { type: 'text', content: 'More text after the image.' },
        { type: 'link', href: 'https://www.example.com', content: 'Link to example.com'},
        { type: 'ordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'unordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'header', level: 2, content: 'Header 2' },
        { type: 'header', level: 3, content: 'Header 3' },
    ],
    '3': [
        { type: 'text', content: 'This is the third story.' },
        { type: 'text', content: 'This is a image:'},
        { type: 'image', src: '/logo512.png', alt: 'Image description' },
        { type: 'text', content: 'More text after the image.' },
        { type: 'link', href: 'https://www.example.com', content: 'Link to example.com'},
        { type: 'ordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'unordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'header', level: 2, content: 'Header 2' },
        { type: 'header', level: 3, content: 'Header 3' },
    ],
    '4': [
        { type: 'text', content: 'This is the forth story.' },
        { type: 'text', content: 'This is a image:'},
        { type: 'image', src: '/logo512.png', alt: 'Image description' },
        { type: 'text', content: 'More text after the image.' },
        { type: 'link', href: 'https://www.example.com', content: 'Link to example.com'},
        { type: 'ordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'unordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'header', level: 2, content: 'Header 2' },
        { type: 'header', level: 3, content: 'Header 3' },
    ],
    '5': [
        { type: 'text', content: 'This is the fifth story.' },
        { type: 'text', content: 'This is a image:'},
        { type: 'image', src: '/logo512.png', alt: 'Image description' },
        { type: 'text', content: 'More text after the image.' },
        { type: 'link', href: 'https://www.example.com', content: 'Link to example.com'},
        { type: 'ordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'unordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'header', level: 2, content: 'Header 2' },
        { type: 'header', level: 3, content: 'Header 3' },
    ],
    '6': [
        { type: 'text', content: 'This is the sixth story.' },
        { type: 'text', content: 'This is a image:'},
        { type: 'image', src: '/logo512.png', alt: 'Image description' },
        { type: 'text', content: 'More text after the image.' },
        { type: 'link', href: 'https://www.example.com', content: 'Link to example.com'},
        { type: 'ordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'unordered-list', items: [
          { content: 'First item in the list' },
          { content: 'Second item in the list' },
          { content: 'Third item in the list' }
        ]},
        { type: 'header', level: 2, content: 'Header 2' },
        { type: 'header', level: 3, content: 'Header 3' },
    ],
  };
    
 export const stories_title = {
      '1': 'The Rules of Go',
      '2': 'Story Title 2',
      '3': 'Story Title 3',
      '4': 'Story Title 4',
      '5': 'Story Title 5',
      '6': 'Story Title 6',
    };