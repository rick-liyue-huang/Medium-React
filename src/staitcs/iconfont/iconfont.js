
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1547185787323'); /* IE9 */
  src: url('./iconfont.eot?t=1547185787323#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1547185787323') format('woff'),
  url('./iconfont.ttf?t=1547185787323') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1547185787323#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;




