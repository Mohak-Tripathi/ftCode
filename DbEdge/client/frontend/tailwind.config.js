/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        // Add a custom hover class
    hover: {
      'scale-115': 'scale(1.15)',
    },
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}

