import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "auto-realesed-vscode-extension" is now active!');

	let disposable = vscode.commands.registerCommand('auto-realesed-vscode-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Prantik');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
