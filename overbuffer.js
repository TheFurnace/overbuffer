/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
Called when the item has been removed.
We'll just log success here.
*/
function onRemoved() {
  console.log("Item removed successfully");
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Create the context menu item
*/
browser.menus.create( {
  id: "overbuff-lookup",
  title: "Lookup on Overbuff",
  contexts: ["selection"]
}, onCreated );

/*
The click event listener, where the stuff is done
*/
browser.menus.onClicked.addListener( (info, tab) => {
  if(info.menuItemId === "overbuff-lookup") {
  }
    var url = "https://www.overbuff.com/players/pc/";
    var battleTag = info.selectionText.replace("#","-");
    url = url + battleTag;

    browser.tabs.create({
      "url": url
    } );
} );