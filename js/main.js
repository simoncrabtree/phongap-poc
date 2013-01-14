var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function () {
            self.showAlert('Store Initialized', 'Info');
            self.takePhoto();
        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
        self.registerEvents();
    },

    showAlert: function(message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    takePhoto: function () {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,
            encodingType: 0
        };

        navigator.camera.getPicture(
            function (imageData) {
                $('.employee-image').attr('src', "data:image/jpeg;base64," + imageData);
            },
            function () {
                console.log("Error taking picture");
            },
            options
        );
    },

    registerEvents: function () {
        var self = this;
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            $('body').on('touchstart', 'a', function (event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function (event) {
                $(event.target).removeClass('tappable-active');
            });
        }
    }

};

app.initialize();
