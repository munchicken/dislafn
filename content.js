// DISLaFN?
// Chrome Extension by: Munchicken (https://github.com/munchicken)

// This extension enables viewing your news & social media posts regarding Muslims
// as if they are about Jews (circa 1940's), so you can answer DISLaFN?

// Inspired by a protest sign (included in popup.html).  Individual in pic is unknown for attribution.

// I recommend pairing this source code with "Weight of the World" by Apoptygma Berzerk
// (https://www.youtube.com/watch?v=OilB45L-5kA)

findText(document.body);  //look at that body!

// Check all nodes for text elements
// ISSUE:  Have to refresh Facebook posts/comments to work, need to add somekind of listener for dynamic node changes
function findText(node)
{
	var child;
	var nextChild;
	
	// yeah, I should switch, but it's late
	if (node.nodeType === 3) {
		changeText(node);
	}
	// just gonna use a multi-ORed IF until I hit all the main stuff, then maybe change to a switch...
	else if (node.nodeType === 1 || node.nodeType === 9 || node.nodeType === 11) {
		child = node.firstChild;
		while (child) {
			nextChild = child.nextSibling;
			findText(child);  // recursion can warp your brain... but ain't it fun?
			child = nextChild;
		}
	}
}

function changeText(textNode)
{
	var value = textNode.nodeValue;  //save
	
	// Definately not a perfect list, but I tried
	// Rarely breaking parsing on boundaries so that I can catch word concoctions from FoxNews
	
	// Descriptors
	value = value.replace(/muslim/gi, "Jew");
	value = value.replace(/islamist/gi, "Militant Jew");
	value = value.replace(/islamic/gi, "Judaistic");  //could be changed to "Jewish" ¯\_(ツ)_/¯
	value = value.replace(/islam/gi, "Judaism");
	value = value.replace(/refugee/gi, "jewish refugee");
	value = value.replace(/\bisis\b/gi, "militant jewish fundamentalists");
	value = value.replace(/\bisil\b/gi, "militant jewish fundamentalists");
	value = value.replace(/jihadist/gi, "holy warrior");
	value = value.replace(/arab/gi, "Jew");
	value = value.replace(/arabic/gi, "Jewish");
	
	// Areas
	// These countries had the largest Jewish population in 1933 (US Holocaust Memorial Museum)
	// In no particular order, other than Syria = Poland for emphasis
	value = value.replace(/Libya/gi, "Soviet Union");
	value = value.replace(/Sudan/gi, "Romania");
	value = value.replace(/Syrians/gi, "Polish");
	value = value.replace(/Syrian/gi, "Polish");
	value = value.replace(/Syria/gi, "Poland");
	value = value.replace(/Iraq/gi, "Germany");
	value = value.replace(/Iran/gi, "Hungary");
	value = value.replace(/Yemen/gi, "Czechoslovakia");
	value = value.replace(/Somalia/gi, "Great Britain");
	
	// Places
	value = value.replace(/mosque/gi, "Temple");
	
	// Things
	value = value.replace(/jihad/gi, "holy war");
		
	textNode.nodeValue = value;  //replace
}