var current_section = 'main'

var videoLinks = 
{
    "introMonika" : "https://www.youtube.com/embed/YONRwNL1C3E?si=D81sM4Mvxf8TuoQt",
    "YOHAQUEST": "https://www.youtube.com/embed/3FCkCSVESY0?si=EH5bcpBwrxr5GL5R",
    "karinMilk" : "https://www.youtube.com/embed/SQl7fg_QSQM?si=qYnfhRtXFv98qYz1",
    "kasumiBurger": "https://www.youtube.com/embed/B0xk99GcOAk?si=yXqPqMC46Q5pCLWE",
    "noDokiKnows": "https://www.youtube.com/embed/Hi9I4KD-uT0?si=_-CtpTD72BW1ju8o",
    "hey": "https://www.youtube.com/embed/0qTNnB7WES0?si=RpcsInhjo80Tgsk3",
    "animePlot": "https://www.youtube.com/embed/Uh6vl2l-E3o?si=M6b4Fuw4UFyPNvbX",
    "ligma": "https://www.youtube.com/embed/odaV9n9uJhA?si=XQsQEbpcW_fOB54D",
    "setsunaTricycle": "https://www.youtube.com/embed/jGyeH5ilvEU?si=pysk8eortanqjIjT"
}

function expand(section)
{
    current_section = section
    $("#main").fadeOut(300, () => {
        $(".page")
            .css({display: "flex"})
            .hide()
            .fadeIn(300);
        $("#" + section)
            .css({display: "flex"})
            .hide()
            .fadeIn(300);
    });

    if (section == 'edits')
    {
        $("#edit-preview").fadeIn(300)
    }
}

function reset()
{
    $(".page, #" + current_section).fadeOut(300, () => $("#main").fadeIn(300))
    current_section = 'main'
    $('#video-preview').attr('src', videoLinks['introMonika']);
}

function showpreview(url)
{
    $("#video-preview").attr('src', videoLinks[url])
}