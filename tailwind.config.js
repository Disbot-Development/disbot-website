const tones = Array.from({ length: 10 }).reduce((obj, val, index) => {
    const tone = index == 0 ? '50' : String(index * 100);
    const tones = Array.from({ length: 10 }).reduce((_obj, _val, _index) => {
      const _tone = String(_index) + (_index != 0 ? '0' : '');
      _obj[tone + '/' + _tone] = `var(--${tone}-${_tone})`;
      return _obj;
    }, {});
    obj = {
      ...tones,
      ...obj
    };
    return obj;
}, {});

module.exports = {
    important: true,
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                blurple: {
                    ...tones,
                    100: 'var(--100)'
                }
            },
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ]
};