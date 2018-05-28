var config = {
    name: 'Harry John',
    about: 'Full time software engineer. Part time student.',
    links: [
        {
            label: 'blog',
            url: 'https://medium.com/@harry671003'
        },
        {
            label: 'github',
            url: 'https://github.com/harry671003'
        },
        {
            label: 'linkedIn',
            url: 'https://www.linkedin.com/in/harry671003'
        },
        {
            label: 'instagram',
            url: 'https://instagram.com/uglyhelmet'
        },
        {
            label: 'twitter',
            url: 'https://twitter.com/harry671003'
        },
    ],
    resumeSections: [
        {
            title: 'Work',
            items: [
                {
                    label: 'Software Engineer',
                    desc: 'Microsoft (June 2015 - May 2018)',
                },
            ],
        },
        {
            title: 'Side Projects',
            items: [
                {
                    label: 'S.Y.L (Sylphrena)',
                    url: 'https://github.com/harry671003/syl-core',
                    desc: 'Building a bot with better context management. (2018)',
                },
                {
                    label: 'ng2-appinsights',
                    url: 'https://www.npmjs.com/package/ng2-appinsights',
                    desc: 'App insights logging for Angular 2+ apps. (2017)',
                },
            ],
        },
        {
            title: 'Education',
            items: [
                {
                    label: 'B-Tech',
                    desc: 'Amrita Amrita Vishwa Vidyapeetham (2011 - 15)',
                }
            ],
        },
    ],
};

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
 * Builds resume sections
 * @param {any} element - element
 * @param {any} links - links
 */
PageController.prototype.buildResume = function(element, resumeSections) {
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
            ' : ' + 
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

    for(var i = 0; i < resumeSections.length; i++) {
        element.appendChild(createSection(resumeSections[i]));
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
    pageController.setText(document.getElementById('desc-holder'), config.about);

    // Build the resume
    pageController.buildResume(document.getElementById('resume'), config.resumeSections);

    // Set the links
    pageController.setLinks(document.getElementById('links-holder'), config.links);
}

// Set run
window.onload = run;
