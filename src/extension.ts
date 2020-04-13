// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

const getSrcDocPath = (p: string) => path.resolve(__dirname, '../testWorkspace', p);
const getSrcDocUri = (p: string) => vscode.Uri.file(getSrcDocPath(p));
const myHelloTextURI = getSrcDocUri('MyHelloText.java');
const mySampleURI = getSrcDocUri('MySample.java');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    vscode.commands.registerCommand('test.executeDefinitionProvider', async () => {
        await vscode.workspace.openTextDocument(mySampleURI);
        await vscode.commands.executeCommand<vscode.Location[]>('vscode.executeDefinitionProvider', mySampleURI, new vscode.Position(14, 35)).then(value => {
            if (value) {
                console.log("executeDefinitionProvider");
                console.log(value);
            } else {
                console.log("Failed to retrieve definition");
            }
        });
    });

    vscode.commands.registerCommand('test.executeDeclarationProvider', async () => {
        await vscode.workspace.openTextDocument(mySampleURI);
        await vscode.commands.executeCommand<vscode.Location[]>('vscode.executeDeclarationProvider', mySampleURI, new vscode.Position(14, 35)).then(value => {
            if (value) {
                console.log("executeDeclarationProvider");
                console.log(value);
            } else {
                console.log("Failed to retrieve declaration");
            }
        });
    });

    vscode.commands.registerCommand('test.executeTypeDefinitionProvider', async () => {
        await vscode.workspace.openTextDocument(mySampleURI);
        await vscode.commands.executeCommand<vscode.Location[]>('vscode.executeTypeDefinitionProvider', mySampleURI, new vscode.Position(14, 35)).then(value => {
            if (value) {
                console.log("executeTypeDefinitionProvider");
                console.log(value);
            } else {
                console.log("Failed to retrieve type definition");
            }
        });
    });

    vscode.commands.registerCommand('test.executeHoverProvider', async () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        await vscode.workspace.openTextDocument(mySampleURI);
        await vscode.commands.executeCommand<vscode.Hover[]>('vscode.executeHoverProvider', mySampleURI, new vscode.Position(14, 35)).then(value => {
            if (value) {
                console.log("executeHoverProvider");
                console.log(value);
            } else {
                console.log("Failed to retrieve executeHoverProvider");
            }
        });
    });

    vscode.commands.registerCommand('test.executeDocumentHighlights', async () => {
        await vscode.workspace.openTextDocument(mySampleURI);
        await vscode.commands.executeCommand<vscode.DocumentHighlight[]>('vscode.executeDocumentHighlights', mySampleURI, new vscode.Position(14, 35)).then(value => {
            if (value) {
                console.log("executeDocumentHighlights");
                console.log(value);
            } else {
                console.log("Failed to retrieve executeDocumentHighlights");
            }
        });
    });

    vscode.commands.registerCommand('test.executeFormatDocumentProvider', async () => {
        await vscode.workspace.openTextDocument(mySampleURI);
        await vscode.commands.executeCommand<vscode.TextEdit[]>('vscode.executeFormatDocumentProvider', mySampleURI, {
            insertSpaces: true,
            tabSize: 4
        } as vscode.FormattingOptions).then(value => {
            if (value) {
                console.log("executeFormatDocumentProvider");
                console.log(value);
            } else {
                console.log("Failed to retrieve executeFormatDocumentProvider");
            }
        });
    });

    vscode.commands.registerCommand('test.executeFormatRangeProvider', async () => {
        await vscode.workspace.openTextDocument(mySampleURI);
        await vscode.commands.executeCommand<vscode.TextEdit[]>('vscode.executeFormatRangeProvider', mySampleURI, new vscode.Range(new vscode.Position(1, 1), new vscode.Position(25, 25)), {
            insertSpaces: true,
            tabSize: 4
        } as vscode.FormattingOptions).then(value => {
            if (value) {
                console.log("executeFormatOnTypeexecuteFormatRangeProviderProvider");
                console.log(value);
            } else {
                console.log("Failed to retrieve executeFormatRangeProvider");
            }
        });
    });

}

// this method is called when your extension is deactivated
export function deactivate() { }
