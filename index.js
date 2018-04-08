var root = document.querySelector(':root');
// console.log(root);
var rootStyles = getComputedStyle(root);
var red = rootStyles.getPropertyValue('--red');
// console.log('red: ', red);
root.style.setProperty('--red', '	#4169E1');