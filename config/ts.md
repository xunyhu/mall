## 安装依赖
yarn add ts-loader typescript -D

## webpack配置loader

```js
{
    test: /\.(ts|tsx)$/,
    include: paths.appSrc,
    loader: require.resolve('ts-loader')
}
```

## 配置tsconfig.json

## 安装模块的声明文件
yarn add @types/react -D
yarn add @types/***



