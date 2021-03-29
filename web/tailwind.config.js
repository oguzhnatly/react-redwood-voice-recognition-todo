module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    input: {
      classes: [
        'appearance-none rounded-none relative block',
        'w-full px-3 py-2 border border-gray-300',
        'placeholder-gray-500 text-gray-900 rounded-t-md',
        'focus:outline-none focus:ring-indigo-50',
        'focus:border-indigo-500 focus:z-10 sm:text-sm',
      ],
      errorTextColor: 'text-red-600',
      errorBorderColor: 'border-red-800',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
