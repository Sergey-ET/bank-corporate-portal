const form = document.querySelector('#message')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let output = {};
  new FormData( form ).forEach(( value, key ) => {
    if ( Object.prototype.hasOwnProperty.call( output, key ) ) {
      let current = output[ key ];
      if ( !Array.isArray( current ) ) {
        current = output[ key ] = [ current ];
        current.push( value );
      }
    } else {
      output[ key ] = value;
    }
  });

  fetch('transform.php', {
    method: 'POST',
    body: JSON.stringify(output),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
  .then((response) => {
    console.log(response);
  });

  console.log(JSON.stringify(output));
  e.target.reset();
});
