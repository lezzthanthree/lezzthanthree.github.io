var current_section = ''

function expand(section)
{
    current_section = section
    $("#main").fadeOut(300, () => {
        $(".page").fadeIn(300);
        $("#" + section).fadeIn(300);
    });
}

function reset()
{
    $(".page, #" + current_section).fadeOut(300, () => $("#main").fadeIn(300))
}