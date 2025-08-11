import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "chatgpt-webview" is now active!');

    let disposable = vscode.commands.registerCommand('chatgpt-webview.openChatGPT', () => {
        // 创建 Webview 面板
        const panel = vscode.window.createWebviewPanel(
            'chatgpt-webview', // Webview 类型
            'ChatGPT',         // Webview 标题
            vscode.ViewColumn.One, // 在 VSCode 第一个面板中打开
            {
                enableScripts: true // 启用脚本
            }
        );

        // 设置 Webview 内容
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

function getWebviewContent() {
    // 返回包含 ChatGPT 网页的 HTML 内容
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ChatGPT</title>
    </head>
    <body>
        <iframe src="https://chat.openai.com" style="width:100%; height:100vh; border:none;"></iframe>
    </body>
    </html>
    `;
}                                                                                                     