# An interactive single page calendar implemented with React. Connected with a backend that I built: https://github.com/VodkaPeach/calendar-backend.

## I am using it for familiarizing React and other front-end web development techniques. You are welcome to clone, have a look, play around and make your own changes! This project is multiphased. I will continue to update its functionalities as I learn. You can contact me at 1293379294@qq.com.

## Progress Log:

<2022/07/14>:

Added Display:

1. a calendar in 3 formats: Month, Week, and Course mode.
2. A events/courses section.
3. Current date.
4. A date in the month format will display differently based on whether it: is in the current month of display, is selected by clicking and the user input, is hovered upon by mouse.
5. A search bar.

Added Interactivity:

1. Select a date by clicking and by html date input, the full month that the date is in should be displayed in the month format.
2. Switch between view modes by buttons.
3. Return the selected date back to today.

<2022/07/18>:

Connected with a backend: https://github.com/DayDreamWake/calendar-backend

Display:

1. User-specific events and courses section now can be seen in their respective display modes.
2. The current user.
3. A day is the month display that has at least one event now has its date in bold.
4. When a day is selected, the event section displays only events on that day.

Interactivity:

1. Register and login.
2. Add/delete/edit an event.

<2022/08/08>

1. Files restructured, now the src folder is organized into a more readable and controllable manner.
2. The usage of cookies is replaced with react context.
3. Temporarily disabled the week display mode, since it's basically the same design pattern as the Course mode. 

<2022/08/09>

1. Dismembered Main.component.jsx, code refactor.
2. Added util folder for storing time related constants and functions.

<2022/08/11>

1. fixed exisiting props drilling with using context instead.
2. users now can logout.

<2022/08/12>
1. created utils/axios-config.js that stores resusable axios configuration generation function.
2. created form-input.js for that stores a resuable form input element component.
3. relative repetitive code refactored using 1 & 2
4. users can now click on grayed out dates (dates from last/next month) on month display and the display will update to the selected month.
### All major functionalities of a monthly calendar are set. Version 1.0 ready to deploy!
