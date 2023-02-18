/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
   theme: {
    container:{
      center:true
    },
    extend: {
      fontFamily: {
        Baloo: 'Baloo\\ 2',
        Inter: 'Inter',
      }, 
      colors:{
        'blue-accent-1':"#242F9B",
        'blue-accent-2':"#646FD4",
        'gray-accent-1':"#0000002B",
        dark :"#263238",
        "dark-accent-2" :"#3E3E3E",
        "muted-accent-1" :"#8D92A3",
        "muted-accent-2" :"#D9D9D9",
        "green-accent-1" :"#24C250",
        "green-accent-2" :"#24C2504A",
        "green-accent-3" :"#249B45",
        "orange-accent-1" :"#D39A0B",
        "orange-accent-2" :"#FCB773",
        "red-accent-1" :"#C91717",
        "dark-accent-1" :"#111821",
        "dark-accent-2" :"#20303D",
      }
    },
  },
  plugins: [],
}
