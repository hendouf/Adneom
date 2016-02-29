var app = angular.module("myApp", []);

app.service("newsService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('http://adneom.herokuapp.com/api/posts').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getNews = function ()
	{
		return deferred.promise;
	}
})




app.controller("MainController", function ($scope, newsService)
{
	var promise = newsService.getNews();
	promise.then(function (data)
	{
		$scope.News = data.data;
		console.log($scope.News);
	});
	   $scope.newsservices = newsService;
	   
$scope.savePost = function(){	

	$scope.News.push({ 'title':$scope.title, 'link': $scope.link});
	$scope.title='';
	$scope.link='';
	
};
   

})


    //Adding a vote
    $scope.addVote = function (post) {
        //Increment the number
        post.votes++;
        //Save to the Firebase
        News.$save(post);
    }

   

   

