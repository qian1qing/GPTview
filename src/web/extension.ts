import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "gptview" is now active!');

    // 注册命令
    let disposable = vscode.commands.registerCommand('gptview.openChatGPT', () => {
        // 创建 Webview 面板
        const panel = vscode.window.createWebviewPanel(
            'chatgpt-webview',  // Webview 类型
            'ChatGPT',          // Webview 标题
            vscode.ViewColumn.One, // 在第一个面板中显示
            {
                enableScripts: true,  // 允许使用 JavaScript
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
// 这是一个简单的 VS Code 扩展，用于在 Webview 中显示 ChatGPT 网页
// 你可以根据需要修改 Webview 的内容和样式
// 确保在 package.json 中注册了命令 'gptview.openChatGPT'，以便在 VS Code 中调用此命令
// 例如：
// "contributes": {
//     "commands": [
//         {
//             "command": "gptview.openChatGPT",
//             "title": "Open ChatGPT"
//         }
//     ]
// }
// 你可以通过命令面板（Ctrl+Shift+P）输入 "Open ChatGPT" 来触发此命令
// 这将打开一个新的 Webview 面板，并在其中加载 ChatGPT 网页
// 注意：确保你的 VS Code 版本支持 Webview API，并且已正确配置了扩展的权限和设置
// 你可能需要在 package.json 中添加相关的权限设置，以允许 Webview 加载外部内容  
// 例如：
// "webview": {
//     "allowedUris": [
//         "https://chat.openai.com"
//     ]
// }
// 这样可以确保 Webview 能够加载 ChatGPT 网页而不会被阻止   