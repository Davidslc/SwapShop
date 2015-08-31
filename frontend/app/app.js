'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'restangular',
    'myApp.mySwaps',
    'myApp.swapGallery',
    'myApp.myItems',
    'myApp.itemDetail',
    'myApp.addItem',
    'myApp.version'
])
    .config(['$routeProvider', "$httpProvider", "RestangularProvider", function ($routeProvider, $httpProvider, RestangularProvider) {
        $routeProvider.otherwise({redirectTo: '/swap-gallery'});

        RestangularProvider.setBaseUrl('/api');
        //RestangularProvider.setDefaultHeaders({'Content-Type': undefined});
    }]);


// What is this?
angular.module('SampleFormDefinition', [])
    .value(
    'SampleForm', {
        name: 'SampleForm',                    // Required. Used to set <form> id attribute
        horizontal: false,                     // Set to true for Bootstrap horizontal form layout

        fields: {
            first_name: {
                label: 'First Name',
                srOnly: true,
                type: 'text',
                placeholder: 'First name',
                required: true,
                autocomplete: false,
                helpText: 'Provide your first name.'
                },
            last_name: {
                label: 'Last Name',
                type: 'text',
                srOnly: true,
                placeholder: 'Last name',
                required: true,
                autocomplete: false,
                helpText: 'Provide your last name.'
                },
            email_address: {
                label: 'Email',
                type: 'email',
                srOnly: true,
                placeholder: 'Email address',
                required: true,
                autocomplete: false,
                helpText: 'Your primary email address.'
                },
            username: {
                label: 'Username',
                srOnly: true,
                placeholder: 'Username',
                type: 'text',
                length: 30,
                required: true,
                autocomplete: false,
                helpText: 'Choose the name you will be known as.'
                },
            password: {
                label: 'Password',
                srOnly: true,
                placeholder: 'Password',
                helpText: 'Create a password. Make it strong!',
                type: 'password',
                length: 16,
                autocomplete: false,
                required: true
                },
            referral_source: {
                label: 'Referral source',
                srOnly: true,
                placeholder: 'Select a referral source',
                type: 'select',
                required: true,
                helpText: 'How did you hear about us?',
                optionArray: 'sources',
                ngChange: "sourceSelected()"
                },
            other_source: {
                label: 'Other',
                srOnly: true,
                placeholder: 'Other source',
                type: 'text',
                ngShow: "referral_source == 'other'",
                ngRequired: "referral_source == 'other'",
                helpText: 'What is the Other source?'
                }
            },

        buttons: {
            save: {
                label: "Save",
                icon: "fa-refresh",
                ngClick: "save()",
                'class': 'btn-primary btn-sm'
                },
            reset: {
                label: "Reset",
                icon: "fa-minus-circle",
                ngClick: "reset()",
                'class': 'btn-default btn-sm'
                }
            }
        });
