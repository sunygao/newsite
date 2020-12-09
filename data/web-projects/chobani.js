export default {
    "chobani" : {
        "meta" : {
            "title" : "Suny Gao - Chobani.com",
            "description" : "Chobani Home Page"
        },
        "backgroundColor" : "#283a34",
        "title" : "Chobani.com",
        "client" : "Chobani",
        "slug" : "chobani",
        "previewImages" : [
            "home-page-1.jpg",
            "product-thumb.jpg"
        ],
        "hasBorder" : "true",
        "heroImage" : "hero.jpg",
        "description" : [
            "<p>Stink Studios and Chobani launched the new Chobani.com to coincide with the yogurt's rebrand at the beginning of 2018. Because the project was so large in scope, the front end dev team's first priority was to work closely with designers to define a style guide with a grid system, type sizes and components across 5 breakpoints.</p>",
            "<p>Part of the client's requirement was to have flexibility with page layouts and to be able to easily make periodic updates to the site's content. The Stink team development a system of page templates and customizable modules that uses data pulled from a Contentful CMS. The developers worked closely with the UX and design teams to define more than 10 customizable modules that the client could add, delete, reorder and swap within each page's template constraints. Each module was built as its own React component, and each had its own customizations, like optional SVG frames or images, or positioning the text on the right or left.</p>",
            "<p>On the backend, Stink's internal tool pulled data from the Contentful API into static JSON files and uploaded them to an S3 bucket. The front end could then consume this static data instead of requesting data directly from the API. The site also used a number of external APIs like JobVite, MailChimp and Destini.</p>",
            "<p>Front end stack: React, Redux + Reselect, Immutable.js, Post CSS + CSS modules, compiled with Webpack and Babel.</p>",
            "<p>More information and an in-depth technical overview can be found <a target=\"_blank\" href=\"https://medium.com/stink-studios/how-we-built-chobani-com-98fe5613b1b5\">here</a>.</p>"
        ],
        "credits" : {
            "agency" : [
                {
                    "text": "Stink Studios",
                    "url" : "http://www.stinkstudios.com"
                }
            ],
            "role" : "Front End Developer",
            "date" : "January 2018"
        },	
        "links" : {
            "site" : "http://www.chobani.com",
            "caseStudy" : "http://www.stinkstudios.com/work/chobani-a-new-home"
        },
        "mainContent": [
            { 
                "type": "image",
                "images" : [ 
                    {
                        "src" : "product-landing-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    },
                    {
                        "src": "product-ingredients-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    },
                    {
                        "src": "header-article-component.jpg",
                        "width" : "1440",
                        "height" : "775"
                    },
                    {
                        "src" : "recipes-landing-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    },
                    {
                        "src" : "mobile-desktop-recipes.jpg",
                        "width" : "1440",
                        "height" : "775"
                    }
                ],
                "description" : "The new site includes a section for recipes that users can filter by tag."
            },
            { 
                "type": "image",
                "images" : [ 
                    {
                        "src" : "recipe-header-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    },
                    {
                        "src" : "recipe-detail-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    }
                    
                ]
            },
            { 
                "type": "image",
                "images" : [ 
                    
                    {
                        "src" : "careers-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    }
                    
                ],
                "description" : "Careers page with data pulled in from the JobVite API."

            },
            { 
                "type": "image",
                "images" : [ 
                    
                    {
                        "src" : "recipe-carousel-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    },
                    {
                        "src" : "video-carousel-desktop.jpg",
                        "width" : "1440",
                        "height" : "775"
                    }
                    
                ],
                "description" : "Carousel component with optional SVG frame."
            },
            { 
                "type": "image",
                "images" : [ 
                    
                    {
                        "src" : "header-component.jpg",
                        "width" : "1440",
                        "height" : "775"
                    }
                    
                ],
                "description" : "Header component with optional SVG frame."
            },
            { 
                "type": "image",
                "images" : [ 
                    
                    {
                        "src" : "impact-component.jpg",
                        "width" : "1440",
                        "height" : "775"
                    }
                    
                ],
                "description" : "An article component with text placement and frame options."
            },
            { 
                "type": "image",
                "images" : [ 
                    
                    {
                        "src" : "mobile-screens.jpg",
                        "width" : "1440",
                        "height" : "775"
                    }
                    
                ]
            }
        ]
    }
}

