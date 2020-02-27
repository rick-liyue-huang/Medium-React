
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {font-family: "iconfont";
  src: url('./statics/fonts/iconfont.eot?t=1567399626308'); /* IE9 */
  src: url('./statics/fonts/iconfont.eot?t=1567399626308#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATIAAsAAAAACTgAAAR5AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqFfIUGATYCJAMQCwoABCAFhG0HRxvvB8gekiRCEEEEEapAXBqIePj/NdZ98/8IpkmSevbTSZpIeKoWIqkRCo1EotlK3Loz/HvaCwY4O2GwmwwqXrNMqWYdmKQ9EJ+kUj4+43+OmS6fDyy/be1SGdY42hvgKIEGFNEWeaJ3oHiLeoUGIBM+7yfQacIUyEFSRgEwlLnDAnHH0GJgWNHLPbjQqCpgbgbxBPQ0xQh6BvCY/H38ButhCBTKBNyxhxeJMhDz6fBsW+r+3600MgLtelaIRSQsAjJxDtrPYFl8EabTZMYtAyq5sPh0fLat/c+avETPOQXn/8dLCqICrrwbYzcTiU+HgELw6ciHFNuwXkHReXCDAcAPEAcIOyYtvR+ox0yNTexMTQ0xUwvMxs3MwriFFOy3XUeuXSOvXCm4elU0/Xo4byfaMH18/qaVrdevU3Vu689du1Y3WTvdLjIiShDEOdw0ezJaxIPuC4GzvXIlgNMt4E2mO6w7PfkypRXarjwpuPpUdP05de1Z85qiBdYrLzWhTEQm5YUlRRRiDDp16QrvQmqaveBAadfZiXidbQFHFVAl04QeB2rT9Il8N9chnQbIClWU1vbYR5UNMo5xz6Llu7GshiKiuWKTCC6eX2O3xlnYuHGt/VonfkOZJXyBFW/XzYV9iD8XoHq9W0UgNufAwbnFHPTgwfDMuQcPzEmB5W7TxpPn3iE+Fr4I2FrbgLWvXdeOdqBcinLc2rUdHPxl0y7/UUbxfbrQUYa2xz39Dfymr7iz4t4a07NbNvdnw6mSeP15ipj9BjgBN9/s6UtxWgo83ipP4mZm+Cn8JJKexNyCizk4x3TX4B7sEyxk3vvpPfhe/OMX7vno75bThv5Rq15HrvI/YdgfRltAi6VnWXdW6aHkV2Q9wHEzwyTa2XsgNJEmRXQcN+jt6dvjUVToQSYZjJgmHD/u6eebYLogs+icdFr7gMhifZ1ZwheifvJMEIXvP+93O23ef/q7+Pe1nf//D+k+4uasMRJvNmwWoCugT295zgmcaCgsiXMDnA38H+c/cH9AJ5ob6IACQMukQ+j7hLAm3cYqk0/STgz9hfrZ2wjuq7CI+Np0Xceq93kvp4ivZTIYb9TcWUfwwwhGlmRL5BpyNsQB307Prhhw96WdXogWuO5B99ZQjoxOJzRGCijUxiFpTCIzdhFKXTah0tiGTguSF3cZooKJbASYN4Ag9NsGhV4vkPQ7i8zYu1Aa9RYq/YFBp6OwWbPLdDDG8Soo1kAZIWkhGClbL/dNGuM0Mw/SDbViVVmU4EmoUjMhwtfLp55KhvVQtcYEdSPtp9HICbmKrSOS0GGwtpYlFCq2Gko1XlUajSLM21sOPchLytYBY/tUIDENSIYg0YLAkGLVk0eVNYwbv58HojWoJabqKWqykyAVNaZ1gi8vPiOQyfL6UUXP0lmtEc2PhoacDpJTYdUhJGErVOvFWQQF3KsaJKXhpWpGVCGMNyknHyv32l9Zd4WboJO7Tg4UwRAc0QOdF+J6WiauZqLpJmrYMjV2qlgmmypBJQwAAAAA') format('woff2'),
  url('./statics/fonts/iconfont.woff?t=1567399626308') format('woff'),
  url('./statics/fonts/iconfont.ttf?t=1567399626308') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./statics/fonts/iconfont.svg?t=1567399626308#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

`;



