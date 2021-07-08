window.addEventListener('load', (event) =>
{
    
    // clicks the next image link
    function cycle(amt)
    {
        var projects = document.getElementsByClassName('portfolio-focus')[0];
        var projectAmt = projects.childElementCount;
        var projectsX = [];
    
        // stores offset foreach project
        for (let x = 0; x < projects.childElementCount; x++)
        {
            var child = projects.children[x];
            projectsX.push(child.offsetLeft);
        }

        // finds the current element being viewed
        var closest = 0;
        var curOffset = projects.scrollLeft;

        for (let x = 1; x < projectsX.length; x++)
        {
            if (Math.abs(curOffset - projectsX[x]) < Math.abs(curOffset - projectsX[closest]))
            {
                closest = x;
            }
        }

        // cycles target
        closest += amt;

        if (closest < 0)
        {
            closest += projectAmt;
        }
        else if (closest <= projectAmt)
        {
            closest %= projectAmt;
        }

        // makes the move
        var nextLink = projects.children[closest];
        nextLink.scrollIntoView(true);
        
        
        // chrome will only scroll one element at a time, so this uses a timeout, so it won't scroll to the thumbnail till its on the right project
        if (navigator.userAgent.indexOf("Chrome") != -1 )
        {
            var scrollTarget = nextLink.offsetLeft;
            var curScrollSRC = nextLink.parentElement;
            
            var ScrollInterval = window.setInterval(() =>
            {
                if (curScrollSRC.scrollLeft === scrollTarget)
                {
                    nextLink = document.getElementById('portfolio-project-thumbnail-' + closest);
                    nextLink.scrollIntoView(true);
                    window.clearInterval(ScrollInterval);
                }
            }, 50);
        }
        
        // firefox allows both to scroll they are done simutaneously
        else
        {
            nextLink = document.getElementById('portfolio-project-thumbnail-' + closest);
            nextLink.scrollIntoView(true);
        }
    }

    // adds events
    var leftArrow = document.getElementsByClassName('arrow-left')[0].parentElement;
    var rightArrow = document.getElementsByClassName('arrow-right')[0].parentElement;

    leftArrow.addEventListener('click', (event) =>
    {
        cycle(-1);
    });

    rightArrow.addEventListener('click', (event) =>
    {
        cycle(1);
    });
});