/* eslint-disable */
// axios基本使用
// 导入的是一个axios的实例对象
import axios from 'axios'

// 返回一个promise类型
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
    console.log(res)
});
