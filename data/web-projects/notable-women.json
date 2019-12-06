{
    "notable-women" : {
        "meta" : {
            "title" : "Suny Gao - Notable Women",
            "description" : "Notable Women website"
        },
        "title" : "Notable Women",
        "client" : "Rosie Rios & Google Creative Lab",
        "slug" : "notable-women",
        "previewImages" : [
            "rosa-bill-full.jpg",
            "mahalia-bill-full.jpg",
            "eleanor-bill-full.jpg"
        ],
        "backgroundColor" : "#FAEBD2",
        "heroYT" : "1peWF8ThC8Y",
        "description" : [
            "<p>In the Fall of 2018, former Treasurer of the United States Rosie Rios, along with Google Creative Lab, launched an AR experiment and website that lets you see 100 historic American women where they've historically been left out - on US currency. Intended as a way to explore the wide range of accomplishments by these notable women, the iOS and Android apps use AR to place the women directly on any US bill note, and the accompanying website lets users flip through all one hundred bills, view the featured women by category, share individual bills, and includes a teachers kit to help bring these women's stories into the classroom.</p>",
            "<p>The site is built with React and Redux as the framework and state manager. Initially developed with React SSR (server side rendering) paired with a Node server, we quickly realized that it was much more efficient to generate a server-less static site. Because we wanted the ability to deeplink to each individual woman's bill, and to have different metadata for social sharing, HTML was pre-generated for all 100 different bill pages and for the about, view all and teacher's kit pages. This solution minimized our deployment time and ensured that the site would work seamlessly on App Engine's standard Python environment.</p>",
            "<p>Throughout the process of developing this site, I carried out several performance audits to identify optimizations, especially for users with slower internet speeds. The first step was to visualize our javascript bundle with Webpack Bundle Analyzer, then use React-Loadable to split the js into bundles and only load what's necessary for each page. We also needed a way to ensure that users would be able see the highest quality bill assets with minimal load time. To that end, we first ensured that only necessary assets were preloaded - all others were lazy loaded as needed. Then, I worked with our backend developer to create a custom service with the ability to serve dynamically resized images from Google Cloud Storage. With this functionality in place, we could resize images on the fly and serve different sized images for each breakpoint at runtime, ensuring that the user never has to download a larger asset than needed.</p>",
            "<p>It was important for the site to work across all platforms. With this in mind, the front end was built using 5 different breakpoints, a custom grid system, and optimized for both touch and trackpad interactions. The bill animations utilize GSAP timelines and React's fast rendering cycle to to create smooth and efficient animations.</p>",
            "<p>Front end stack: Babel-transpiled ES6 with React, Redux, SCSS, and GSAP, complied with Webpack</p>"
            
        ],
        "credits" : {
            "agency" : [
                {
                    "text": "Google Creative Lab"
                }
            ],
            "role" : "Lead Developer",
            "date" : "September 2018"
        },	
        "links" : {
            "site" : "https://notablewomen.com"
        },
        "mainContent": [
            

            { 
                "type": "video",
                "videos" : [ 
                    {
                        "src" : "bill-stack-animation.mp4",
                        "width" : "1440",
                        "height" : "798"
                    }
                ],
                "description" : "On first load, the bills are sorted into random order, and users can flip through the bills infinitely in either direction."
            },

            

            { 
                "type": "image",
                "images" : [ 
                    
                    {
                        "src" : "desktop-2.jpg",
                        "width" : "1440",
                        "height" : "798"
                    },
                    {
                        "src" : "desktop-3.jpg",
                        "width" : "1440",
                        "height" : "798"
                    }
                ]
            },

            { 
                "type": "video",
                "videos" : [ 
                    {
                        "src" : "grid-page-animation.mp4",
                        "width" : "1440",
                        "height" : "798"
                    }
                ],
                "description" : "On the view all page, the women can be filtered by category then viewed on the bill."
            },
            { 
                "type": "image",
                "images" : [ 
                    {
                        "src" : "sharing-screens.jpg",
                        "width" : "1440",
                        "height" : "798"
                    }
                ],
                "description" : "Users can deeplink to each individual bill with custom share assets optmized for Twitter, Facebook and Google+."
            },
            { 
                "type": "image",
                "images" : [ 
                    {
                        "src" : "desktop-5.jpg",
                        "width" : "1440",
                        "height" : "1504"
                    }
                ],
                "description" : "The teachers kit page includes lesson plans, a poster, a bulletin board and an app companion."
            },
            {
                "type" : "image",
                "images" : [
                    {
                        "src" : "iphone-screens.jpg",
                        "width" : "1440",
                        "height" : "798"
                    }
                ]
            }
        ]
    }
}
