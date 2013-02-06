$.index.open(); 

$.view = Alloy.createController('view');

$.index.add($.view.getView());


function removeViewAndClose() {
	// this attempts to remove items from the window before closing it
	$.index.remove($.view.getView());
	$.view = null;

	$.index.close(); 
}

function justClose() {
	$.index.close();
}


//Run this in Instruments, and filter for TiUIView. 
// TODO: choose which one to Run:

//justClose();  // this will release the TiUIView

// or

//removeViewAndClose();  // TiUIView will stay in memory here, and is forever forgotten....