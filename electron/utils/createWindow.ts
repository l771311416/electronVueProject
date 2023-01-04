/*
 * @Author: 周楠
 * @Description: electron窗口创建
 * @Date: 2022-12-27 11:45:09
 * @LastEditTime: 2023-01-04 09:46:56
 * @LastEditors: 周楠
 */
import { BrowserWindow } from "electron";
import * as path from "path";
/**
* packages.json,script中通过cross-env NODE_ENV=production设置的环境变量
* 'production'|'development'
*/
const NODE_ENV = process.env.NODE_ENV;
/** 创建窗口方法 */
function createWindow() {
// 生成窗口实例
    const Window = new BrowserWindow({
        minWidth: 1120,
        minHeight: 645,
        width: 1200, // * 指定启动app时的默认窗口尺寸
        height: 800, // * 指定启动app时的默认窗口尺寸
        frame: false, // * app边框(包括关闭,全屏,最小化按钮的导航栏) @false: 隐藏
        transparent: true, // * app 背景透明
        hasShadow: false, // * app 边框阴影
        show: false, // 启动窗口时隐藏,直到渲染进程加载完成「ready-to-show 监听事件」 再显示窗口,防止加载时闪烁
        resizable: false, // 禁止手动修改窗口尺寸
        webPreferences: {
            // webSecurity:false,
            // 加载脚本
            preload: path.join(__dirname, "..", "preload.js")
        }
    });
    // 加载调试工具
    NODE_ENV === "development" && Window.webContents.openDevTools();

    // 由优雅写法
    // 启动窗口时隐藏,直到渲染进程加载完成「ready-to-show 监听事件」 再显示窗口,防止加载时闪烁
    Window.once("ready-to-show", () => {
        Window.show(); // 显示窗口
    });

    // * 主窗口加载外部链接
    // 开发环境,加载vite启动的vue项目地址
    if (NODE_ENV === "development") Window.loadURL("http://localhost:3920/");
}
// 导出模块
export { createWindow };
