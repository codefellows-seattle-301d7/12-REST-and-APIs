(function(module) {
  var repoView = {};
  /* TODO: Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var repoCompiler = function(repo) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(repo);
  };  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      repos.withTheAttribute('name')  // TODO: experiment changing this attribute field!
      .map(repoCompiler)
    );
  };
/* TODO: Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */

});
