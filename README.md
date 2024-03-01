#Namaste React


#Parcel
- Dev Build
- Local Server
- HMR -> Hot Module Replacement
- Uses File Watching Algo - which is written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of Files
- Bundling files
- Compressing files - remove white spaces etc.
- Consistent Hashing
- Code splitting
- Differential Bundling- support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Separate Build for dev and production


#Food Ordering App
# Header
  -> Logo
  -> Nav Items
# Body
  -> Search Bar
  -> Resturant container
  -> Resturant card
     ->Img
     ->Name of Restaurants, rating, cuisine etc.
# Footer
  -> Copyright
  -> Links
  -> contacts
  -> Address

#Export/Import
---> Default Export/Import
    * export default component_name|variable_name;
    * import component_name|variable_name from
      path_name;
---> Named Export/Import
    * export variable_name|component
    * import {variable_name|component} from path_name;

#Hooks
--> Normal JS utility function.
--> Facebook developers have developed this function.
   * Two Importants Hooks
     -> useState(): used to generate super powerfull state variable in REACT.
     -> useEffect()


# Redux Toolkit
 -Install @reduxjs/toolkit and react-redux
 -Build our store
 -Connect our store to our app
 -create slice (cart slice)
 -dispatch(Action)
 -selector

 # Types of testing (for developer)
  - Unit Testing
  - Integration Testing
  - End to End Testing - e2e testing

  # Setting up testing environment
  - Install React testing lib
  - Install Jest
  - Install Babel dependencies which are required for Jest.
  - Configure Babel by creating babel.config.js file 
  - Configure Parcel Config file to disable default Babel transpilation
    and using our own Babel config which is required in jest for testing purpose.
  - Jest configuration using command - npx jest --init
  - Install JSDOM lib
  - Install @babel/preset-react to make JSX work for test cases 
  - Include @babel/preset-react inside my babel config
  - Install @testing-library/jest-dom