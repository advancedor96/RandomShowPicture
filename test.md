Requirement implementation
Use a <GridLayout> to arrange a <TextField> and a <Button> on the page. The latter two form the input functionality of the app.

Use a <ListView> to show tasks below the input field.

Delete the <Label> component from the first <TabViewItem> block for the first tab.
Drag and drop a <StackLayout> component within the <TabViewItem> block for the first tab.
The default code creates a colorful vertical stack.
Delete all <Label> components from the <StackLayout> block.
Drag and drop a <GridLayout> component within the <StackLayout> block for the first tab.
The default code creates a colorful table that shows how to position elements and merge grid cells.
Delete all <Label> components from the <GridLayout> block.
Configure the <StackLayout>.

Remove background color.
Set width and height both to 100%.
Configure the <GridLayout>.

Set the grid to consist of two columns and one row, with the width of the first column set to twice that of the second.
Set the width of the grid to 100% so that it takes the entire width of the screen.
Set the height of the grid to 25%. Otherwise, the <ListView> you'll be adding later might overlap the <GridLayout>.
Remove any additional settings for the grid.
Drag and drop a <TextField> and a <Button> within the <GridLayout> block.
The Playground adds JavaScript code to your code for the first time. Note the data() and methods blocks added in the <script> block below. In next implementation steps, you will need to add code to these sections to create some of the app functionality.
Drag and drop a <ListView> below the grid.
The default code creates a list of countries and country flag icons within a <FlexboxLayout>.
Configure the positioning of the elements within the grid.

Set the <TextField> to inhabit the first column and the first row.
Set the <Button> to inhabit the second column and the first row.
Configure the <TextField>.

Make the text field editable.
Enable adding tasks using Return from the keyboard.
Clean up and configure the <ListView>.

Remove all its nested blocks except for the <Label>.
Set its height to 75%. Otherwise, the <ListView> might overlap the <GridLayout>.
Replace the countries-related binding with a binding to your array of active tasks.
In the <script> block, remove the array of countries and create an empty array for your active tasks.
In the <scripts> block, tie some logic to the tapping of the button.

Check if the input is an empty string.
Log newly added tasks in the console.
Add newly added tasks into the array of active tasks. Use unshift to place new items at the top of the page.
Clear the text field after input.
Use the <Label> in the <ListView> to list the newly added task on the screen.