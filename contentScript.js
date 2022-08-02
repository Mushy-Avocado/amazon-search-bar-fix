
// By MushyAvocado

function init() {
	
	var navLocation = $('#nav-global-location-slot')[0];
	var navLogo = $("#nav-logo")[0];
	var navContainer = $("#nav-tools")[0];
	
	navContainer.insertBefore(navLocation, navContainer.firstChild);
	navContainer.insertBefore(navLogo, navContainer.firstChild);
	
	var navSearch = $("#nav-search")[0];
	console.log(navSearch);
	navSearch.style.padding = '0px';
	navSearch.style.margin = '0px';
	
	var navDropdown = $("#nav-search-dropdown-card")[0];
	navDropdown.style.width = '300px';
	
	var navSearchField = $(".nav-search-field")[0];
	navSearchField.style.width = '300px';

}

init();	
