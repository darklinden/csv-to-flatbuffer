# Csv To Flatbuffer

## 它是什么

* 使用flatc来生成fbs、代码、json和二进制数据

## 信息

* csv文件以Enum结尾将被解析为enum
* csv文件以Struct结尾，将被解析为Struct
* csv文件以Table结尾，将被解析为Table和数据
  
## 用法

* ```npm run build``` -> ```npx ts-node ./scripts/index.ts```
* 所有的生成步骤都在```scripts/index.ts```里

## What is it

* Using flatc to generate fbs, code, json and bytes

## Info

* csv file ends with Enum will be parsed as enum
* csv file ends with Struct will be parsed as Struct
* csv file ends with Table will be parsed as Table and data rows
  
## Usage

* ```npm run build``` -> ```npx ts-node ./scripts/index.ts```
* all generate steps in ```scripts/index.ts```
