# react-form-exercise
React表單練習

💙新觀念💙
JSX缺點：只能return 一個 <div>，造成太多的html tag
解決方法：
1. <></>
2. <React.Fragment><React.Fragment/>
3. <自己做componet>props.children<自己做componet/>

💙portals💙
-> 如果某個component只是overlay，卻包在其他component中並用css控制出現時機，就像寫了一個<div>硬塞 eventListener 把他做成<button>一樣，可行，但不好
