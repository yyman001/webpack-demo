//编译入口主文件
import name from './mod';
let es6 = {
    name:'babel es6 to es5',
    doIt(){
        setTimeout(()=>{
            console.log('es6->es5...')
        })
    }
}
import './index.css'
// require('./index.css')
document.getElementsByTagName('h1')[0].innerHTML = name;
console.log(name)
console.log('自动刷新...');
es6.doIt();


