// sets up image/video swapping once the page is loaded
window.addEventListener("load", function(event)
{
    var projects = document.getElementsByClassName("portfolio-project");
    
    // iterates through all projects in the portfolio
    for (i = 0; i < projects.length; i++)
    {
        var project = projects[i];
        var children = project.children;
        var video = -1;

        // iterates through the child elements of each project
        // to find the thumbnail and video elements
        for (j = 0; j < children.length; j++)
        {
            var child = children[j];

            if (child.classList.contains("portfolio-video"))
            {
                video = j;
                break;
            }
        }

        if (video === -1)
        {
            console.error("Unable to find a video in a portfolio project.");
        }
        else
        {
            // stores their indice in the project element, so the can be accessed outside of this file
            project.video_index = video;

            // adds hover events
            project.onmouseenter = (event) => {
                var elements = getElements(event.target);
                playOnHover(elements);
            };
            
            project.onmouseleave = (event) => {
                var elements = getElements(event.target)
                pauseOnLeave(elements);
            };
        }
    }
});

// parses event for target element and its 2 specific children
function getElements(target)
{
    var x = {};
    x.project = target;
    x.video = x.project.children[x.project.video_index];

    return x;
}

// hides the image and plays the video
function playOnHover(elements)
{
    elements.video.play();
}

// stops/hides the video and shows the image
function pauseOnLeave(elements)
{
    elements.video.pause();
}