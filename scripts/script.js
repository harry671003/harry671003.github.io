var config = {
    name: 'Harry John',
    links: [
        {
            label: 'blog',
            url: 'https://uglyhelmet.in',
        },
        {
            label: 'instagram',
            url: 'https://instagram.com/uglyhelmet',
        },
        {
            label: 'github',
            url: 'https://github.com/harry671003',
        },
    ],
};

function PageController() {}

/**
 * Sets the name on the passed in element
 *
 * @param {any} element - Element
 * @param {any} text - Name
 */
PageController.prototype.setName = function(element, text) {
    element.innerHTML = text;
}

/**
 * Sets the external links
 *
 * @param {any} element - element
 * @param {any} links - links
 */
PageController.prototype.setLinks = function(element, links) {
    for(var i = 0; i < links.length; i++) {
        var li = this._createNewLinkElement(links[i]);
        element.appendChild(li);
    }
}

/**
 *
 *
 * @param {any} link
 * @returns
 */
PageController.prototype._createNewLinkElement = function(link) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.appendChild(document.createTextNode(link.label));
    a.setAttribute('href', link.url);
    li.appendChild(a);
    return li;
}

function run() {
    var pageController = new PageController();
    // Set the name
    pageController.setName(document.getElementById('name-holder'), config.name);

    // Set the links
    pageController.setLinks(document.getElementById('links-holder'), config.links);
}

// Set run
window.onload = run;