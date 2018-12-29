function PageController() {}

/**
 * Sets the text on the passed in element
 *
 * @param {any} element - Element
 * @param {any} text - Name
 */
PageController.prototype.setText = function(element, text) {
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
 * Builds the sections
 * @param {any} element - element
 * @param {any} links - links
 */
PageController.prototype.buildSections = function(element, sections) {
    var createSectionHeader = function(title) {
        var header = document.createElement('h3');
        var titleText = document.createTextNode(title);
        header.appendChild(titleText);

        return header;
    }

    var createSectionItem = function(sectionItem) {
        var item = document.createElement('p');
        var label = null;
        if(sectionItem.url) {
            label = document.createElement('a');
            label.setAttribute('href', sectionItem.url);
            var labelText = document.createTextNode(sectionItem.label);
            label.appendChild(labelText);
        }
        else {
            label = document.createTextNode(sectionItem.label);
        }
        var desc = document.createTextNode(
            ' | ' +
            sectionItem.desc);

        item.appendChild(label);
        item.appendChild(desc);

        return item;
    }

    var createSection = function(section) {
        var sectionEl = document.createElement('div');
        sectionEl.setAttribute('class', 'section');
        sectionEl.appendChild(createSectionHeader(section.title));

        for(var i = 0; i < section.items.length; i++) {
            sectionEl.appendChild(
                createSectionItem(section.items[i])
            );
        }

        return sectionEl;
    }

    for(var i = 0; i < sections.length; i++) {
        element.appendChild(createSection(sections[i]));
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
    pageController.setText(document.getElementById('name-holder'), config.name);

    // Set the description
    pageController.setText(
        document.getElementById('desc-holder'),
        config.taglines[Math.floor(Math.random() * config.taglines.length)]);

    // Build the sections
    pageController.buildSections(document.getElementById('sections'), config.sections);

    // Set the links
    pageController.setLinks(document.getElementById('links-holder'), config.links);
}

// Set run
window.onload = run;
