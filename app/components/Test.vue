

<template>
  <Page class="page">
    <ActionBar title="My Task" class="action-bar"/>
    <TabView height="100%" androidTabsPosition="bottom">
      <TabViewItem title="To Do">
        <StackLayout width="100%" height="100%">
          <GridLayout columns="2*,*" rows="*" width="100%" height="15%">
            <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <TextField
              col="0"
              row="0"
              v-model="textFieldValue"
              hint="Type new task..."
              editable="true"
              @returnPress="onButtonTap"
            />

            <Button col="1" row="0" text="Add task" @tap="onButtonTap"/>
          </GridLayout>
          <ListView class="list-group" for="(todo, idx) in todos" @itemTap="onItemTap" style="height:85%">
            <v-template>
              <Label
                id="active-task"
                col="0"
                :text="todo.name"
                class="list-group-item-heading"
                textWrap="true"
              />
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Completed">
          <ListView  class="list-group" for="dd in dones" style="height:85%">
            <v-template>
              <Label :text="JSON.stringify(dd)"  textWrap="true" class="list-group-item-heading"/>
            </v-template>
          </ListView>

      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
export default {
  mounted() {},
  data: () => ({
    textFieldValue: "",
    todos: [{name: 'to do '}],
    dones: [{name: 'test TXT'}]
  }),
  methods: {
    onButtonTap() {
      if (this.textFieldValue === "") return; // Prevents users from entering an empty string.
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.unshift({ name: this.textFieldValue }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
    },
    onItemTap(args) {
      console.log("Item with index: " + args + " tapped");
      console.log("index: " + args.index + " tapped");
      console.log("item: " + args.item + " tapped");
      console.dir(args);
      
      action("你想幹嘛？", '取消', ['Mark completed', 'Delete'])
        .then(result => {
          switch ( result){
            case 'Mark completed':
              let obj = Object.assign({}, args.item);
              console.log('要丟入的: ',obj)
              
              this.dones.push(obj);
              this.todos.splice(args.index, 1);
              break;
            case 'Delete':
              this.todos.splice(args.index, 1);
              break;
            case '取消':
              break;
          }
          
        })
    }
  }
};
</script>

<style>
#active-task{
  font-size: 20;
  margin-left:20;
  padding-top:5;
  padding-bottom: 10;
}
</style>
