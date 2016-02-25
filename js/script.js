(function () {
    console.log('script.js hello!');

    var getValues = function($form) {
        var result = {
            name : $form.find('#fname').val(),
            email : $form.find('#email').val(),
            password: $form.find('#password').val(),
            title: $form.find('#title').val()
        };

        return result;
    };

    $('#signUpForm').on('submit', function () {
        console.log('on submit');

        var values = getValues($(this));

        console.log('values: ' + JSON.stringify(values));

        return false;
    });
})();