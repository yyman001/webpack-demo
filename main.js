//编译入口主文件
import name from './mod';
//import { setTimeout } from 'core-js/library/web/timers';
let es6 = {
    name:'babel es6 to es5',
    doIt(){
        setTimeout(()=>{
            console.log('go')
        })
    }
}
document.getElementsByTagName('h1')[0].innerHTML = name;
console.log(name)

//引入css
// import './index.css';
import './index.scss'