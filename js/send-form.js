const form = document.querySelector('#message')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let output = {};
  new FormData( form ).forEach(( value, key ) => {
    // Check if property already exist
    if ( Object.prototype.hasOwnProperty.call( output, key ) ) {
      let current = output[ key ];
      if ( !Array.isArray( current ) ) {
        // If it not an array, convert it to an array.
        current = output[ key ] = [ current ];
      }
      current.push( value ); // Add the new value to the array.
    } else {
      output[ key ] = value;
    }
  });
  console.log(JSON.stringify(output));
});
