// EXERCISE INSTRUCTIONS:
//  1 - Attach a button listener to the button
//  2 - On click on the button, make an AJAX request to reddit for results of cute puppies
//  3 - http://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true
//  4 - For each of the elements in data.children, append a new <img> element to .text
//      with the src as the child.data.thumbnail

$('.btn').click(function() {
  $('.text').text('Working on it...');
  $.ajax({
    type: 'GET',
    data: {
      q: 'puppy',
      restrict_sr: 'true',
    },
    url: 'http://www.reddit.com/r/aww/search.json',
    success: function(res) {
      var i, children, pic;
      children = res.data.children;

      $('.text').html('');
      for(i=0; i<children.length; i++) {
        pic = '<img src="' + children[i].data.thumbnail + '" />';
        $('.text').append(pic);
      };
    },
  });
});

