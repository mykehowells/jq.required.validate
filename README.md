# jQuery Required Validator

The 'required' attribute isn't supported/respected across all browsers, so this plugin should help with validation.

## Installation

### Via bower

Run ```bower install jq.required.validate``` from within your project directory.

### Via git

Run ```git clone https://github.com/mykehowells/jq.required.validate.git``` from within your project directory.

### Via direct download

Download the latest release of this repository from [here](https://github.com/mykehowells/jq.required.validate/releases/latest) and move into your project directory.

## Use example

```javascript
$( 'form' ).on( 'submit', function ( e ) {

    // Get the form object.
    var form = $(this);

    // Pass form to Validator.validate() object function.
    var Validation = Validator.validate( form );

    // Remove any failed validation classes from required fields, ready for next validation check.
    Validation.clear();

    // Check if validation has failed.
    if( Validation.failed() ) {

        // Mark failed fields.
        Validation.mark();

        // Return false to halt script execution.
        return false;

    }

    // Continue processing...

}
```
