/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Sonav Agarwal",
        description: "Sonav Agarwal's personal website.",
        url: "https://sonavagarwal.com", // No trailing slash allowed!
        image: "./src/assets/FishFavicon.png", // Path to your image you placed in the 'static' folder
    },
    plugins: [
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: "[data-sal]", // Selector of the elements to be animated
                animateClassName: "sal-animate", // Class name which triggers animation
                disabledClassName: "sal-disabled", // Class name which defines the disabled state
                rootMargin: "0% 50%", // Corresponds to root's bounding box margin
                enterEventName: "sal:in", // Enter event name
                exitEventName: "sal:out", // Exit event name
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`limelight`, `open sans\:400,800b,`],
                display: "swap",
            },
        },
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         icon: `./src/assets/FishFavicon.png`,
        //     },
        // },
    ],
}
