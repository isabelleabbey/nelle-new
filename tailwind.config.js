module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/**/*.{html,md}',
    // '!./_site/**/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    fontFamily: {
      'title': ['Canela', 'serif'],
      'italic-title': ['Canela Italic','serif'],
    },
    safelist: [
      {
         pattern: /grid-cols-.*/,
         variants: ['lg, md, sm'],
    },
      { pattern: /col-span-.*/,
        variants: ['lg, md, sm'],
     },
     { pattern: /columns-.*/,
     variants: ['lg, md, sm'],
  },
    ],
    extend: {
      colors: {
        beige: '#EDEBE8',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '16/9',  
        'square': '1/1',
      },   
    },
  },
  plugins: [],
}
