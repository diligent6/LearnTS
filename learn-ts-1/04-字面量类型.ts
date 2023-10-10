

//字面量类型
function foo2(method:'get'|'post'){

    if(method === 'get'){
        console.log(method)
    }
    if(method !=='get'){
        console.log('post')
    }
}


foo2("post")