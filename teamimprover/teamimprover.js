function rec() {

    if (document.getElementById("desc").value == "crossfunctional" && document.getElementById("goal").value == "communication") 
    		{
        		document.getElementById("rec").innerHTML = "In your team meetings, make sure that each department's representative has a chance to speak and have their voice be heard.<br><br>One approach could be to have a regular agenda for meetings. Before the team meetings, each representative would add in the details of what they intend to discuss in relation to their particular business unit.";
    		} 

    else if (document.getElementById("desc").value == "crossfunctional" && document.getElementById("goal").value == "timemanagement") 
    		{
        		document.getElementById("rec").innerHTML = "Take inventory of all the regularly occurring meetings that are taking place in the other departments.<br><br>This will give you a better understanding of each member's other commitments. It will also help you to better prioritize the time that you're able to spend together as a cross-functional team and provide you with more insight into exactly why time management might be an issue.";
    		}

    else if (document.getElementById("desc").value == "crossfunctional" && document.getElementById("goal").value == "collaboration") 
    		{
        		document.getElementById("rec").innerHTML = "Host departmental lunch and learn sessions!<br><br>These can be a great way for team members to learn more about the work that is done by the various departments, and can spark new ideas for opportunities to collaborate.";
    		}

    else if (document.getElementById("desc").value == "temporary" && document.getElementById("goal").value == "communication") 
    		{
        		document.getElementById("rec").innerHTML = "Conduct a communication preferences inventory.<br><br>This will give each team member the opportunity to share exactly how they prefer to communicate (and also receive communication from others) and what should be avoided.";
    		}

    else if (document.getElementById("desc").value == "temporary" && document.getElementById("goal").value == "timemanagement") 
    		{
        		document.getElementById("rec").innerHTML = "Use a shared calendar to keep track of the team's most important dates and deadlines.<br><br>As part of this approach, also encourage each member of the team to become involved with the calendar so that it can remain current and accurate.";
    		}

    else if (document.getElementById("desc").value == "temporary" && document.getElementById("goal").value == "collaboration") 
    		{
        		document.getElementById("rec").innerHTML = "Trust falls! <br><br>(j/k)";
    		}

	else if (document.getElementById("desc").value == "someremote" && document.getElementById("goal").value == "communication") 
    		{
        		document.getElementById("rec").innerHTML = "Create a contact group for your team and use it to send out team email messages.<br><br>This helps to ensure that all team members will receive the messages, and that no one will be forgotten.";
    		}

    else if (document.getElementById("desc").value == "someremote" && document.getElementById("goal").value == "collaboration") 
    		{
        		document.getElementById("rec").innerHTML = "Whenever possible, use collaborative editors to work on projects together at the same time.<br><br>This opens up opportunities for getting more done together and avoids the need to pass documents back and forth.";
    		}

    else if (document.getElementById("desc").value == "someremote" && document.getElementById("goal").value == "timemanagement") 
    		{
        		document.getElementById("rec").innerHTML = "Use a shared calendar to keep track of the team's most important dates and deadlines.<br><br>This is an essential step to take for teams with remote members, since this helps them to stay involved in the coordination of team events.";
    		}

}
