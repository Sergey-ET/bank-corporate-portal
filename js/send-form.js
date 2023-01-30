const form = document.querySelector('#report');

const sendJSON = function() {
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

  let xhr = new XMLHttpRequest();
  let url = "database.php";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(this.responseText);
      console.log(true);
    } else {
      console.log(false);
    }
  };

  let data = JSON.stringify(output);

  xhr.send(data);
  console.log(JSON.stringify(output));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendJSON();
  e.target.reset();
});
