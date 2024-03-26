#!/usr/bin/env node
import inquirer from "inquirer";

const input = async (): Promise<string> => {
  const answers = await inquirer.prompt([
    {
      message: "Choose option: ",
      type: "list",
      name: "options",
      choices: [
        "Add_task",
        "Remove_task",
        "View_tasks",
        "Task_completed",
        "Quit",
        "Clear_list",
      ],
    },
  ]);
  return answers.options;
};

const getTask = async (statement: string): Promise<string> => {
  const ans = await inquirer.prompt([
    {
      message: statement,
      type: "string",
      name: "task",
    },
  ]);
  return ans.task;
};

let toDoList: string[] = [];

for (let i = 1; i > 0; i++) {
  const opt: string = await input();

  if (opt === "Add_task") {
    const task: string = await getTask("Write task you want to add: ");
    if (toDoList.includes(task)){
      console.log(`Task ${task} is also present in your todo list`)
    } else{
      toDoList.push(task);
      console.log(`Task ${task} has been added to your To-Do List`);
    }
  } else if (opt === "Remove_task") {
    const task: string = await getTask("Write task you want to remove: ");
    if (toDoList.includes(task)) {
      toDoList.indexOf(task);
      toDoList.splice(toDoList.indexOf(task), 1);
      console.log(`Task ${task} has been removed from your To-Do List`);
    } else {
      console.log(`Task ${task} not found in your To-Do List`);
    }
  } else if (opt === "View_tasks") {
    if (toDoList.length === 0) {
      console.log("Your To-Do List is empty.");
    } else {
      toDoList.forEach((task: string, i: number) => {
        console.log(i + 1, task);
      });
    }
  } else if (opt === "Task_completed") {
    const task: string = await getTask("Write task you have completed: ");
    if (toDoList.includes(task)) {
      toDoList.indexOf(task);
      toDoList[toDoList.indexOf(task)] += "  ✓";
      console.log(`To-Do List updated`);
    } else {
      console.log(`Task ${task} not found in your To-Do List`);
    }
  } else if (opt === "Quit") {
    console.log("Good Bye!");
    break;
  } else if (opt === "Clear_list") {
    toDoList.splice(0, toDoList.length);
    console.log("Your tasks are cleared. Now you have an empty list");
  }
}
