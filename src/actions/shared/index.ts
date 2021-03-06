import * as vscode from 'vscode';
import checkProjFilePath from './checkProjFilePath';
import showProjFileQuickPick from './showProjFileQuickPick';
import clearStatusBar from './clearStatusBar';
import createUpdatedProjectJson from './createUpdatedProjectJson';
import getProjFileRecursive from './getProjFileRecursive';
import truncateProjFilePath from './truncateProjFilePath';

const showInformationMessage = vscode.window.showInformationMessage.bind(vscode.window);

export {
    checkProjFilePath,
    showProjFileQuickPick,
    clearStatusBar,
    showInformationMessage,
    createUpdatedProjectJson,
    getProjFileRecursive,
    truncateProjFilePath
};
