$(document).ready(function () {



    // Wrap unwrapped inputs
    $('input[type=checkbox]:visible').each(function () {
        $(this).wrap('<i class="alt-checkbox">');
    });
    $('input[type=radio]:visible').each(function () {
        $(this).wrap('<i class="alt-radio">');
    });

    $('i.alt-checkbox input, i.alt-radio input').each(function () {
        $(this).parent().addClass(this.className);
        //this.className = '';
    });


    // Add event listeners
    $(document)
        .on('click', 'label, .alt-checkbox, .alt-radio', function (event) {
            if (!$(event.target).is('input')) {
                event.preventDefault();
                event.stopImmediatePropagation();
                $(this)
                    .find('input[type=checkbox], input[type=radio]')
                    .each(function () {
                        //this.checked = !this.checked;
                        // TODO: remove this with YUI and add .change() after the each
                       // YAHOO.util.UserAction.click(this);
                    })


            }
        })
        .on('change', '.alt-checkbox input, .alt-radio input', function () {
            var $this = $(this);
            if ($this.is(':radio')) {
                $('input[type=radio][name=' + this.name + ']').parent().removeClass('checked');
                $this.parent().toggleClass('checked', this.checked);
            }
            $this.parent().toggleClass('checked', this.checked);
        });
    // Init
    $('.alt-checkbox input, .alt-radio input:checked').change();


  $('[data-toggle="popover"]').popover()

  $(".icon-add").on("click", function(){
    $(".workspace-hook").after("<li class='list-group-item clearfix'><h4 class='list-group-item-heading pull-left'><a href='#''>New Task</a></h4><div class='pull-right widget-icon-group'><span class='widget-icons icon-participants'></span> <span class='widget-icons icon-newfiles'></span> <span class='widget-icons icon-newcomments'></span> <span class='widget-icons icon-moreactions'></span></div></li>");

  });

$(".js-toggle-images").hide();
  $(".js-view-files").on("click", function(){
    $(this).parents(".list-group-item").find(".js-toggle-images").toggle();
  });

    $(".project-heading").on("click", function(){
    $(this).next(".js-tasks").toggle();
    $(this).next(".js-tasks").next(".js-tasks").toggle();
  });

$(".sortable").sortable();

   $( "#quick-access-sortable, .apps-sortable" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

var shareNewText = $(".share-new-text")

shareNewText.hide();
$(".share-new").hover( function(){
  shareNewText.show('slow');
},
function(){
shareNewText.hide();
});

$('#shareModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var image = button.data('image') // Extract info from data-* attributes

  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.img-solo').attr('src', image);
});

// Close widget sidebar
$(".js-close-widgets").on("click", function(){
  var self = $(this);
  $(".js-widget").toggle();
  self.find("span").toggleClass("icon-fast-forward").toggleClass("icon-rewind");
  $(".js-widget-column").toggleClass("col-md-4").toggleClass("col-md-2");
  $(".js-main-content").toggleClass("col-md-offset-2");
});


// The Tour!
var tour = new Tour({
  storage: false,
  steps: [
  {
    element: ".js-start-tour",
    title: "Welcome to Brandzone",
    content: "Welcome to your Brandzone, Matthew. Let us show you around the place.",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".tour-home",
    title: "Going home",
    content: "You're on the homepage right now. If you venture away and want to return, click the icon",
    backdrop: true
  },
  {
    element: ".tour-myapps",
    title: "The App menu",
    content: "This is your app menu. Drag to rearrange their order.",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".quick-tour",
    title: "Quick access apps",
    content: "Drag apps from the menu to this area to have easy access to your favourites",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".notifications-icon",
    title: "Notifications",
    content: "View all your latest notications here. Never miss a thing",
    backdrop: true,
    placement: "bottom"
  },
  {
    element: ".tour-share",
    title: "Sharing",
    backdrop: true,
    content: "See a piece of news, an image, or an asset that you want people to know about? Hit this button, fill in the modal, and you're on your way."
  },
  {
    element: ".js-widget-column",
    title: "My Widgets",
    backdrop: true,
    content: "These are your widgets. Add a new one by lorem ipsum. Drag to rearrange them. Choose to hide them by clicking the arrows. Don't use a widget anymore? Drag it into the recyling bin",
    placement: "left"
  },
  {
      element: ".workspaces",
      title: "Workspaces",
      backdrop: true,
      content: "Workspaces is the place to share files, ideas, in one place, lorem ipsum",
      placement: "left"
  },
    {
      element: ".my-tasks",
      title: "My Tasks",
      backdrop: true,
      content: "View all your latest tasks here",
      placement: "left"
  },
    {
      element: ".my-approvals",
      title: "My Approvals",
      backdrop: true,
      content: "View all your latest approvals here",
      placement: "left"
  }
]});

// Initialize the tour
tour.init();

$(".js-start-tour").on("click", function(e){
e.preventDefault();
// Start the tour
tour.start();
});




});
