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
      { type: 'text', content: `123 is forming an infinite loop. If neither player stops, it ends in a no-win situation. 
      Logically, it should be considered as seki. Under ancient Chinese rule, black keeps 2 stones and white keeps 8.` },
      { type: 'image', src: '/story1/9.png', alt: '图片描述' },
      {
        type: 'text', 
        content: `Since Go is a competitive sport, a rule would be made to eliminate no-win situations.
                  Theoretically, if we expand rule 2, prohibiting the exact same shape on part of board of all previous moves, 
                  not just the one previous move, it would be possible to eliminate no-win situations completely.
                  However, it would be difficult to determine and enforce such cases.
                  The example here could be treated as seki, but there are an infinite number of forms of cycles, 
                  not all of them can be treated as seki.
                  The solution would be for the players to consider each case and decide what they think is fair, rather than making absolute rules.
                  The very nature of games is to bring people together, to create a shared experience, 
                  and to let the story unfold, sometimes in unexpected ways.
                  I believe The story of the game is more important than the end result. 
                  `
      },
      { type: 'header', level: 3, content: '4 End of the Game' },
      { type: 'text', content: 'In the endgame, the black and white stones are counted and the player with the most surviving stones on the board wins. If they are the same, the game is drawn. As of the endgame shown in below, Black wins by 7 stones according to Chinese rules, and Black wins by 6 points according to Japanese rules. However, I do prefer the ancient chinese stone scoring rules.' },
      { type: 'image', src: '/story1/10.png', alt: '图片描述' },
      { type: 'text', content: 'Black and white can continue to fill their territory with stones until they can no longer do so as the stones are about to be captured. Then we can count stones: 42 for black, 33 for white, thus black wins by 9 stones.' },
      { type: 'image', src: '/story1/11.png', alt: '图片描述' },
      { type: 'text', content: 'It is not really necessary to fill territory to determine the result, counting the total of territory plus stones and subtract 2 for each connected blocks of stones will give the same result.' },
      { type: 'image', src: '/story1/12.png', alt: '图片描述' },
    ],
    '2': [
      { "type": "header", "level": 3, "content": "Endgame Situation 1" },
      { "type": "image", "src": "/story2/2_1.png", "alt": "image description" },
      {
        "type": "text",
        "content": `The count results in Black having 37 stones and White 38 stones, with White winning by 1 stone.
                    The shape in the upper left corner, a bent four, is usually considered a dead group for Black, because White can start a ko after filling all the ko threats, leaving Black with no response.
                    However, in this case, both sides have created a seki (mutually alive shape) in the lower right, preventing White from filling the last ko threat. Starting a ko would be unfavorable for White, who thus leaves the bent four in the corner as is and ends the game.`
      },
      { "type": "header", "level": 3, "content": "Endgame Situation 2" },
      { "type": "image", "src": "/story2/2_2.png", "alt": "image description" },
      {
        "type": "text",
        "content": `A triple ko, the game ends after White captures a ko, with the count resulting in Black having 20 stones and White 21 stones, White winning by 1 stone. Black can capture the ko next, sacrificing the stones on the right side to capture White stones on the top, but the outcome remains the same.
                    If both players agree, a no-win decision can also be made.`
      },
      { "type": "header", "level": 3, "content": "Endgame Situation 3" },
      { "type": "image", "src": "/story2/2_3.png", "alt": "image description" },
      {
        "type": "text",
        "content": `A triple ko, with the count resulting in Black having 20 stones and White 21 stones, White winning by 1 stone.
                    If both players agree, a no-win decision can also be made.`
      },
      { "type": "header", "level": 3, "content": "Endgame Situation 4" },
      { "type": "image", "src": "/story2/2_4.png", "alt": "image description" },
      {
        "type": "text",
        "content": `White captures a ko, and Black, having no response, is forced to end the game. The count results in Black having 20 stones and White 21 stones, with White winning by 1 stone.
                    Judging by liberty, the upper left corner is obviously dead for White, but Black has no means to capture. In this case, Black passes, then White passes, and the issue arises whether Black can capture the ko next.
                    I believe that passing is equivalent to not playing a turn and does not count as a move. According to the Simple Ko Rule, Black cannot capture the ko.`
      }
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
      '1': 'The Rules of Go',
      '2': 'Endgame Judgment',
      '3': 'Story Title 3',
      '4': 'Story Title 4',
      '5': 'Story Title 5',
      '6': 'Story Title 6',
    };