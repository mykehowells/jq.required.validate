# jQuery Required Validator

The 'required' attribute isn't supported/respected across all browsers, so this plugin should help with validation.

## Example:

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
