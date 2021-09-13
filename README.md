# react-form-exercise
React表單練習


JSX缺點：只能return 一個< div>，造成太多的html tag

解決方法：
1. <></>
2. <React.Fragment><React.Fragment/>
3. <自己做componet>props.children<自己做componet/>

💙 portals 💙
-> 如果某個component只是overlay，卻包在其他component中並用css控制出現時機，就像寫了一個< div>硬塞 eventListener 把他做成< button>一樣，可行，但不好

💙 ref 💙
-> 單純讀取資料可用，且用 ref 讀資料的 input component 稱之為 uncontrolled component。

因為他們不被 React 控制，雖然我們確實用了 useRef，但使用者輸入的資料是直接顯示，這些操作都屬用 DOM 不屬於 React 。相對的，如果是使用 state，使用者輸入的資料都會再由 React state 傳回input 欄位，我們就會稱之 controlled component。
