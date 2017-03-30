# Custom Components

## 데모 웹페이지
http://custom-components.jeonghojeong.me/

## 빌드
[Sass](http://sass-lang.com/)로 작성되었고, [grunt-postcss](https://github.com/nDmitry/grunt-postcss)와 [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)를 사용해 빌드했습니다.

```bash
cd /path/to/custom-components
npm install
grunt
```

## 구조
### Custom Checkbox & Radio Buttons
[SVG](https://developer.mozilla.org/docs/Web/SVG)를 사용해 그래픽 효과를 처리했습니다. 근본적으로는 `input`의 `:checked` pseudo-class를 이용해 상태를 판단합니다. 체크박스의 체크 애니메이션의 경우 `dash-offset`을 변화시켜 체크 표시가 그려지는 것처럼 표현했습니다.

### Collapsible Box
위와 마찬가지로 checkbox input을 사용합니다. 애니메이션의 경우 컨텐츠의 크기가 환경에 따라 달라질 수 있으므로 `height` 대신 `max-height`에 애니메이션을 주었습니다.

### Tab
radio input을 사용합니다. `input`들은 숨겨두고 `label`들을 탭 모양으로 노출시킨 후 `input`의 상태에 따라 표시하는 컨텐츠를 바꿉니다.