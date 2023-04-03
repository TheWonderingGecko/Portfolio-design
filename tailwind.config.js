/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.css', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#151515',
        sub_base: '#242424',
        underlined: '#4EE1A0',
        text_color: '#FFFFFF',
        logo_color: '#FFF',
        sub_text_color: '#D9D9D9',
      },
      fontFamily: {
        portfolio_text: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        xl: '88px',
        lg: '48px',
        m: '24px',
        blg: '18px',
        m_sm: '16px',
        m_m: '32px',
      },
      lineHeight: {
        xl: '88px',
        lg: '56px',
        m: '32px',
        blg: '28px',
        m_sm: '26px',
      },
      letterSpacing: {
        xl: '-2.5px',
        lg: '-1.5px',
        m_sm: '2.29px',
      },

      fontWeight: {
        bold: '700',
        semibold: '500',
      },
    },
  },
  plugins: [],
}
