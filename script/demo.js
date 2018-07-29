#!/usr/bin/env node

const fs = require('fs')
var name = process.argv[2];

if(!name) {
    console.log('error: 目录名称缺失')
    process.exit(2)
}else if(fs.existsSync(name)) {
    console.log(name + ' 目录已经存在')
    process.exit(1)
}else {
    fs.mkdirSync(name) //mkdir xx
    fs.mkdirSync(name + '/css')
    fs.mkdirSync(name + '/js')
    fs.writeFileSync(name + '/index.hatml', '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>')
    fs.writeFileSync(name + '/css/style.css', 'h1{color: red;}')
    fs.writeFileSync(name + '/js/main.js', 'var string = "Hello World"\nalert(string)' )
    process.exit(0)
}
