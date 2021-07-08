window.addEventListener('load', (event) =>
{
    var leftArrow = document.getElementsByClassName('arrow-left')[0];
    var rightArrow = document.getElementsByClassName('arrow-right')[0];
    
    // clicks the next image link
    function cycle(amt)
    {
        var curActiveLink = window.location.href.split('#');
        var baseurl = curActiveLink[0];
        var projects = document.getElementsByClassName('portfolio-carousel')[0].childElementCount;
        var nextLinkInt = 0;
        
        // if a link from the carousel has been selected
        // else image link has not been clicked yet. I assume the viewer is still looking at the project 0.
        if (curActiveLink.length > 1)
        {
            curActiveLink = parseInt(curActiveLink[1].split('-')[2]);
            nextLinkInt = curActiveLink;
        }
        
        nextLinkInt += amt;
        
        // keeps nextLinkInt within the appropriate range
        nextLinkInt = nextLinkInt % projects;
        
        if (nextLinkInt < 0)
        {
            nextLinkInt += projects;
        }
        
        // makes the move
        window.location = baseurl + "#portfolio-project-thumbnail-" + nextLinkInt;
        window.location = baseurl + "#portfolio-project-" + nextLinkInt;
    }

    // adds events
    leftArrow.addEventListener('click', (event) =>
    {
        cycle(-1);
    });

    rightArrow.addEventListener('click', (event) =>
    {
        cycle(1);
    });
});