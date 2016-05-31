/* -------------------------------------------------
 | Validator object for form validation, because
 | [required] attribute isn't recognised across all
 | browsers.
 |
 | Written by: Myke Howells
 | Date: 22/02/2016
 |_________________________________________________*/

/**
 * Validator object.
 */
var Validator = {

    /**
     * Elements array.
     */
    'elements': [],

    /**
     * Validation state.
     */
    'state': true,

    /**
     * Form object.
     */
    'form': null,

    /**
     * Perform validation.
     *
     * @param form
     * @returns {Validator}
     */
    'validate': function ( form ) {

        this.form = form;

        var ref = form.find("[required]");

        var fields = [];

        $(ref).each(function(){

            if ( $(this).val().length == 0 ) {

                fields.push( $(this) );

            }

        });

        if( fields.length > 0 ) {
            this.state = false;
            this.elements = fields;
        }

        return this;

    },

    /**
     * Remove failed validation classes from all required fields.
     * 
     * @param form
     * @returns {Validator}
     */
    'clear': function ( form ) {

        var ref = this.form.find("[required]");

        $(ref).each(function(){

            $(this).removeClass( 'validator validation-failed' );

        });

        return this;

    },

    /**
     * Mark fields that failed validation with appropriate classes.
     *
     * @returns {Validator}
     */
    'mark': function () {

        // Get the fields that failed validation.
        var fields = this.fields();

        // Loop through failed fields and apply appropriate styles etc...
        for( var i = 0; i < fields.length; i++ ) {

            // Get the current field.
            var el = fields[ i ];

            // Add the failed validation class.
            el.addClass( 'validation validation-failed' );

        }

        return this;

    },

    /**
     * Check if validation process has failed.
     *
     * @returns {boolean}
     */
    'failed': function () {

        return this.state === false;

    },

    /**
     * Returns the fields that failed validation.
     *
     * @returns {Array}
     */
    'fields': function () {

        return this.elements;

    }

};
