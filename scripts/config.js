var config = {
    "name": "Harry John",
    "taglines": [
        "Ninja Software Engineer",
        "Chasing dreams since 1993",
        "SDE II @ Amazon",
        "The odd one",
        "AKA @harry671003"
    ],
    "links": [
        {
            "label": "blog",
            "url": "/blog"
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
            "title": "Side Projects",
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
                    "label": "B-Tech",
                    "desc": "Amrita Amrita Vishwa Vidyapeetham (2011 - 15)"
                }
            ]
        },
        {
            "title": "Stats",
            "items": [
                {
                    "label": "Hitting the Gym",
                    "desc": "258 days"
                },
                {
                    "label": "Social Media boycott",
                    "desc": diffDays(
                        new Date(), new Date(Date.parse('December 28, 2018'))
                    ) + " days"
                },
                {
                    "label": "Time spent on planet Earth",
                    "desc": diffHours(
                        new Date(), new Date(Date.parse('February 7, 1993'))
                    ) + " hours"
                }
            ]
        }
    ]
}

function diffDays(firstDate, secondDate) {
    console.log(firstDate, secondDate);
    var oneDay = 24*60*60*1000;

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

function diffHours(firstDate, secondDate) {
    console.log(firstDate, secondDate);
    var oneHour = 60*60*1000;

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneHour)));
}
