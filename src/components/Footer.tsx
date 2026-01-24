'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            TEDx MSU Baroda
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            This independent TEDx event is operated under license from TED.
            TEDx MSU Baroda is not endorsed by TED.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-400 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.084.566c-.726.28-1.337.662-1.947 1.272C1.526 2.448 1.144 3.059.864 3.785c-.264.691-.446 1.5-.5 2.706C.3 7.697.286 8.097.286 11.718s.014 3.996.067 5.202c.054 1.206.236 2.015.5 2.706.28.726.662 1.337 1.272 1.947.61.61 1.221 1.002 1.947 1.282.691.264 1.5.446 2.706.5C7.997 23.7 8.397 23.714 12.018 23.714s4.011-.014 5.217-.067c1.206-.054 2.015-.236 2.706-.5.726-.28 1.337-.662 1.947-1.272.61-.61 1.002-1.221 1.282-1.947.264-.691.446-1.5.5-2.706.053-1.206.067-1.606.067-5.227s-.014-4.011-.067-5.217c-.054-1.206-.236-2.015-.5-2.706-.28-.726-.662-1.337-1.272-1.947C21.552 1.526 20.941 1.144 20.215.864c-.691-.264-1.5-.446-2.706-.5C16.011.3 15.611.286 12.017.286zM11.99 2.804c3.59 0 4.011.014 5.427.08 1.326.062 2.043.28 2.522.467.526.206.91.454 1.308.852.398.398.646.782.852 1.308.187.479.405 1.196.467 2.522.066 1.416.08 1.837.08 5.427s-.014 4.011-.08 5.427c-.062 1.326-.28 2.043-.467 2.522-.206.526-.454.91-.852 1.308-.398.398-.782.646-1.308.852-.479.187-1.196.405-2.522.467-1.416.066-1.837.08-5.427.08s-4.011-.014-5.427-.08c-1.326-.062-2.043-.28-2.522-.467-.526-.206-.91-.454-1.308-.852-.398-.398-.646-.782-.852-1.308-.187-.479-.405-1.196-.467-2.522C2.804 15.611 2.79 15.19 2.79 11.6s.014-4.011.08-5.427c.062-1.326.28-2.043.467-2.522.206-.526.454-.91.852-1.308.398-.398.782-.646 1.308-.852.479-.187 1.196-.405 2.522-.467 1.416-.066 1.837-.08 5.427-.08z"/>
                <path d="M12.017 6.556c-3.705 0-6.717 3.012-6.717 6.717s3.012 6.717 6.717 6.717 6.717-3.012 6.717-6.717-3.012-6.717-6.717-6.717zm0 11.111c-2.404 0-4.353-1.949-4.353-4.353s1.949-4.353 4.353-4.353 4.353 1.949 4.353 4.353-1.949 4.353-4.353 4.353z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} TEDx MSU Baroda. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              This event is independently organized and not endorsed by TED.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}