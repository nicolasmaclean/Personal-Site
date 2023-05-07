if(window.addEventListener)
{
    window.addEventListener('load', burger);
}
else
{
    window.attachEvent('onload', burger);
}

function burger()
{
    let stateful_elements = document.getElementsByClassName("stateful");

    for (let i = 0; i < stateful_elements.length; i++)
    {
        let el = stateful_elements[i];
        button = document.getElementById(el.getAttribute("for"));

        // get element dimensions (default to close state)
        el.style.maxHeight = el_closed = 0;

        // get optional speed attribute
        speed = el.getAttribute("speed");
        speed = speed ? speed : 400;
        
        button.addEventListener('click', function (e)
        {
            // update element classes
            el.classList.toggle('active');
            button.classList.toggle('active');
            
            // dynamically open/close
            if (el.classList.contains('active'))
            {
                open_height = el.scrollHeight;

                // calculate animation duration from speed
                total_time = el.scrollHeight / speed;
                el.style.transition = "ease-in-out " + total_time + "s max-height";

                // set max height
                el.style.maxHeight = el.scrollHeight + "px";
            }
            else
            {
                el.style.maxHeight = 0;
            }
        });
    }
};