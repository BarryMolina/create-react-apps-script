export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('My React Project') // edit me!
    .addItem('Dialog', 'openDialog')
    .addItem('Sidebar', 'openSidebar');

  menu.addToUi();
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'React Dialog');
};

export const openSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
};
