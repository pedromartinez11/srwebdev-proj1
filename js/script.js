(function () {
    $('.linksBox').on('click', 'a', function (ev) {
        console.log('clicked on a link');
        var linkType = $(ev.currentTarget).data('linkType');

        // hide the link menu
        $('.linksBox').hide();

        // show the appropriate view
        $('.pageContent.' + linkType).show();
        $('.backBtn').show();
    });

    $('.backBtn').on('click', function() {
        $('.linksBox').show();
        $('.pageContent').hide();
        $('.backBtn').hide();
    });

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