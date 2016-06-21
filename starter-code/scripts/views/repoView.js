(function(module) {
  var repoView = {};
  /* DONE: Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var repoCompiler = function() {
    var template = Handlebars.compile($('#repo-template').html());
    return template(this);
    console.log('repo compiler');
  };  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      repos.withTheAttribute('name')  // TODO: experiment changing this attribute field!
      .map(repoCompiler)
    );
  };
/* DONE: Call the function that loads (or 'requests') our repo data.
    Pass in some view funcyion as a higher order callback, so our repos
    will render after the data is loaded. */

  repos.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
