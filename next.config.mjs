// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", 'dev.jambo8.com', 'mediumrare.imgix.net'],
  },
};

export default withPlaiceholder(config);