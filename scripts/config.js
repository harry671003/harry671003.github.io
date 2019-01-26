var config = {
    "name": "Harry John",
    "taglines": [
        "Ninja Software Engineer",
        "Chasing dreams since 1993",
        "SDE II @ Amazon",
        "The odd one",
        "🌲 🌊 🏔",
        "☯",
    ],
    "links": [
        {
            "label": "blog",
            "url": "https://harryjohn.io/blog"
        },
        {
            "label": "github",
            "url": "https://github.com/harry671003"
        },
        {
            "label": "linkedIn",
            "url": "https://www.linkedin.com/in/harry671003"
        }
    ],
    "sections": [
        {
            "title": "Work",
            "items": [
                {
                    "label": "Software Development Engineer II",
                    "desc": "Amazon (June 2018 - Present)"
                },
                {
                    "label": "Software Engineer",
                    "desc": "Microsoft (June 2015 - May 2018)"
                }
            ]
        },
        {
            "title": "Projects",
            "items": [
                {
                    "label": "S.Y.L (Sylphrena)",
                    "url": "https://github.com/harry671003/syl-core",
                    "desc": "Building a bot with better context management. (2018)"
                },
                {
                    "label": "ng2-appinsights",
                    "url": "https://www.npmjs.com/package/ng2-appinsights",
                    "desc": "App insights logging for Angular 2+ apps. (2017)"
                }
            ]
        },
        {
            "title": "Education",
            "items": [
                {
                    "label": "Advanced Certification in AI & ML",
                    "desc": "IIIT-H (2019 January - Present)"
                },
                {
                    "label": "Bachelor of Technology",
                    "desc": "Amrita Amrita Vishwa Vidyapeetham (2011 - 15)"
                }
            ]
        },
        {
            "title": "Stats",
            "items": [
                {
                    "label": "Gym",
                    "desc": "272 days"
                },
                {
                    "label": "NO Social Media",
                    "desc": countDays('December 28, 2018')
                },
                {
                    "label": "Hours on Earth",
                    "desc": countHours('February 7, 1993')
                }
            ]
        }
    ]
}

function countDays(start) {
    return diffDays(
        new Date(), new Date(Date.parse(start))
    ) + " days";
}

function countHours(start) {
    return diffHours(
        new Date(), new Date(Date.parse(start))
    ) + " hours";
}

function diffDays(firstDate, secondDate) {
    console.log(firstDate, secondDate);
    var oneDay = 24 * 60 * 60 * 1000;

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

function diffHours(firstDate, secondDate) {
    console.log(firstDate, secondDate);
    var oneHour = 60 * 60 * 1000;

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneHour)));
}
