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

    $(function () {
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

});

});
