var app = angular.module('appname', []);

app.controller('appCtrl', function () {
    this.reviews = reviews;
});

app.controller('AddCtrl', function () {
    this.review = {};

    this.addReview = function () {
        reviews.push(this.review);

        this.review = {};
    }
});

var reviews = [
    {
        body: "Best Party ever! The HIPPO helped me tear down walls with my neighbours and made it the best party ever!",
        author: "David H.",
        hippos: 5
    },
    {
        body: "Best Party ever? You mean best party NEVER!",
        author: "Bebe",
        hippos: 1
    }
];