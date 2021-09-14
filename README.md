# react-form-exercise
React表單練習


JSX缺點：一個JSX root只能return 一個< div>，造成太多的html tag

解決方法：
1. <></>
2. <React.Fragment><React.Fragment/>
3. <自己做componet>props.children<自己做componet/>

💙 portals 💙
-> 如果某個component只是彈跳視窗（modal），卻包在其他component中並用css控制出現時機，就像寫了一個< div>硬塞 eventListener 把他做成< button>一樣，可行但不好

-> ReactDOM.createPortal(child, DOM element)使我們需要的 child 可以在指定的 DOM node 中出現，例如彈跳視窗可以和 root 並列於 html 架構中。

💙 ref 💙
->Let’s say you want to change the value of an <input> element, but without using props or re-rendering the whole component.

-> 單純讀取資料可用，且用 ref 讀資料的 input component 稱之為 uncontrolled component。

因為他們不被 React 控制，雖然我們確實用了 useRef，但使用者輸入的資料是直接顯示，這些操作都屬用 DOM 不屬於 React 。相對的，如果是使用 state，使用者輸入的資料都會再由 React state 傳回input 欄位，我們就會稱之 controlled component。

