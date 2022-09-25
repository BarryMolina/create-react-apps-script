// import {
// 	onOpen,
// 	openDialog,
// 	openSidebar,
// } from './ui';

// // Public functions must be exported as named exports
// module.exports = {
// 	onOpen,
// 	openDialog,
// 	openSidebar,
// };
import * as publicUiFunctions from './ui';

global.onOpen = publicUiFunctions.onOpen;
global.openDialog = publicUiFunctions.openDialog;
global.openSidebar = publicUiFunctions.openSidebar;