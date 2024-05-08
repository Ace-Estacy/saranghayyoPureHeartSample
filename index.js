
 /*to change the navigation bar background-color  and font color */
gsap.to("#navbar", {    /*gsap animation  */
    color: "white",     /* this will change the color of the font in navigation bar once scrolled */ 
    backgroundColor: "#051f4f", /* this will change the color of the  background of  navigation bar once scrolled */ 
    scrollTrigger: {          /*this will help me change the styles once scrolled  */
        trigger: "#navbar",   /*in this i am telling that to which contaner to trigger  */
        scroller: "body",     /*in this i am telling what is scrolling to trigger the animation  */
        //markers: true,
        start: "top -4%",    /*i this i am setting the amount of scroll i want to start the animation  */
        end: "top -10%",     /*i this i am setting the amount of scroll i want to end  the animation  */
        scrub: 1             /*this is will help change color back to the orignal color's when scroll back up */

    }
})





/*to change the background-color of the main contaner  */
gsap.to("#main", {                                     /*the main div is being triggerd*/          
    backgroundColor: "rgba(116, 166, 160,0.90)",                      /*background color will change to light blue with 90% opacity  */ 
    scrollTrigger: {
        trigger: "#main",                        /*again calling what to change  */
        scroller:"body",                         /*what will be scrolled  */
       //markers: true,
        start: "top -10%",                       /*this will trigger the animation  */
        end: "top",
        scrub: 2

    }
})

/*the bar function  */
const heading = document.getElementById("heading");   /*calling all the tabs and title  */
const par = document.getElementById("par");
const btn1 = document.getElementById("first");
const btn2 = document.getElementById("second");
const btn3 = document.getElementById("third");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const tag1 = document.getElementById("tag1");
const tag2 = document.getElementById("tag2");
const tag3 = document.getElementById("tag3");  

/*for the 80% tab  */
btn1.addEventListener("click", function () {/*an eventlistener is a java script element that can help execute a function and click , mouse over, mouse leave etc  in this section click is used  */
    heading.innerHTML = "Maximizing Impact: Putting 80% of Every Pound to Good Use";/*the heading of the 80% bar will change when clicked back on the 80% bar */
    par.innerHTML = "A substantial 80% of each pound is thoughtfully allocated to support causes that have a profound impact on our communities and the world. These causes include access to quality education, healthcare for underserved populations, poverty alleviation programs, environmental conservation efforts, and initiatives that empower the less fortunate. This steadfast commitment ensures that the lion's share of our resources actively contributes to creating a brighter, more equitable future for all."; //this is for the description change
    heading.style.color = "#b0122f";//this eill chnage color of the heading 
    bar1.style.backgroundColor = "#b0122f";//this will change the color of the 80% bar if it was not currently selected
    bar1.style.color = "white"; //this will change the color of the inner text 
    tag1.style.color = "#b0122f";//this will change the upper heading of the bar
    tag2.style.color = "#611075"; //this will bring the default color back of the upprer text of bar 2
    bar2.style.color = "#4c5257";//this will reset the color of bar 2
    bar2.style.backgroundColor = "rgba(0,0,0,0)"; 
    bar3.style.backgroundColor = "rgba(0,0,0,0)";
    bar3.style.color = "#4c5257";
    tag2.style.color = "#4c5257"; 
    tag3.style.color = "#4c5257";
   
})

/*for the 10% tab  */
btn2.addEventListener("click", function () {
    heading.innerHTML = "Supporting Operational Efficiency: 10% of Each Pound Allocated to Virtual Costs";
    par.innerHTML = "Roughly 10% of every pound is dedicated to covering essential virtual costs, which play a critical role in maintaining operational efficiency.These costs encompass technology infrastructure, administrative support, and digital outreach strategies, ensuring the smooth operation and outreach of our initiatives.While not directly contributing to the causes we support.";
    heading.style.color = "#611075";
    bar1.style.backgroundColor = "rgba(0,0,0,0)";
    bar2.style.backgroundColor = "#611075";
    bar1.style.color = "#4c5257";
    bar2.style.color = "white";
    tag1.style.color = "4c5257";
    tag2.style.color = "#611075";
    bar3.style.backgroundColor = "rgba(0,0,0,0)";
    bar3.style.color = "#4c5257";
    tag1.style.color = "#4c5257";
    tag3.style.color = "#4c5257";
})

/*for another  10% tab  */
btn3.addEventListener("click", function () {
    heading.innerHTML = "Fostering Sustainability: 10% Invested in Raising the Next Pound";
    par.innerHTML = "Dedicated to ensuring the longevity and continuity of our mission, we allocate 10% of every pound toward raising the next. This strategic investment empowers us to expand our reach, enhance our programs, and engage with a wider network of supporters. By fostering sustainability in this manner, we are able to multiply the positive impact of every pound, effectively creating a ripple effect that advances our causes and secures a brighter future.";
    heading.style.color = "#0f9650";
    bar1.style.backgroundColor = "rgba(0,0,0,0)";
    bar1.style.color = "#4c5257";
    tag1.style.color = "#b0122f";
    tag2.style.color = "#611075";
    bar2.style.color = "#4c5257";
    bar2.style.backgroundColor = "rgba(0,0,0,0)";
    bar3.style.backgroundColor = "#0f9650";
    tag3.style.color = "#0f9650";
    bar3.style.color = "white";
    tag2.style.color = "#4c5257";
    tag1.style.color = "#4c5257";
})

