// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

 
        modules: [
          '@nuxtjs/tailwindcss'
        ],
        app: {
            head: {
              meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                
              ],
              script: [
    
                { src: '/libs/tiny-slider/min/tiny-slider.js' ,body: true },
                { src: '/libs/feather-icons/feather.min.js' ,body: true },
                { src: '/js/plugins.init.js' ,body: true },
                { src: '/js/app.js' ,body: true },
               
                
    
              ],
              link: [
               
                { rel: 'stylesheet', href: '/css/icons.css' },
                { rel: 'stylesheet', href: '/libs/tiny-slider/tiny-slider.css' },
                { rel: 'stylesheet', href: '/libs/@iconscout/unicons/css/line.css' },
                
              ],
              // please note that this is an area that is likely to change
              noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required' }
              ]
            }
          }
          
      
})
