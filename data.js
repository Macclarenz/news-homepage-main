import headlineImageDesktop from './src/assets/images/image-web-3-desktop.jpg'
import headlineImageMobile from './src/assets/images/image-web-3-mobile.jpg'
import otherNewsImage1 from './src/assets/images/image-retro-pcs.jpg'
import otherNewsImage2 from './src/assets/images/image-top-laptops.jpg'
import otherNewsImage3 from './src/assets/images/image-gaming-growth.jpg'

export default {
    "headline": {
        "title": "The Bright Future of Web 3.0?",
        "description": "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
        "url": "#",
        "image": {
            "desktop": headlineImageDesktop,
            "mobile": headlineImageMobile
        }
    },
    "news": [
        {
            "title": "Hydrogen VS Electric Cars",
            "description": "Will hydrogen-fueled cars ever catch up o EVs?"
        }, {
            "title": "The Downsides of AI Artistry",
            "description": "What are the possible adverse effects of on-demand AI image generation?"
        }, {
            "title": "Is VC Funding Drying Up?",
            "description": "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
    ],
    "articles": [
        {
            "title": "Reviving Retro PCs",
            "description": "What happens when old PCs are given modern upgrades?",
            "image": {
                "url": otherNewsImage1,
                "alt": "old pcs"
            }
        }, {
            "title": "Top 10 Laptops of 2022",
            "description": "Our best picks for various needs and budgets.",
            "image": {
                "url": otherNewsImage2,
                "alt": "key buttons"
            }
        }, {
            "title": "The Growth of Gaming",
            "description": "How the pandemic has sparked fresh opportunities.",
            "image": {
                "url": otherNewsImage3,
                "alt": "psp controller"
            }
        }
    ]
}