/*
 * TODO: 
 * USE SETTERS FOR INITIAL SETTING (SEE PROJECT.JS)
 * CHANGE ALERTS TO ERROR MESSAGES
 * GIVE A HELPFUL ERROR IF removeFromChecklist's ITEM DOESN'T EXIST
 */

import { isValid } from "date-fns";

const Todo = ({title, description="", dueDate=Date.now(), priority=1, notes="", checklist=[]}) => {
  let [_title, _description, _dueDate, _priority, _notes, _checklist] = [title, description, dueDate, priority, notes, checklist];
  return {

    get title() { return _title },
    get description() { return _description },
    get dueDate() { return _dueDate },
    get priority() { return _priority },
    get notes() { return _notes },
    get checklist() { return _checklist },
    
    set title(newTitle) {
      if (newTitle.length < 1) {
        alert("Title is required.")
        return;
      }
      _title = newTitle;
    },
    
    set description(value) {
      _description = value;
    },
    
    set dueDate(newDate) {
      const date = new Date(newDate)
      if (!isValid(date)) {
        alert("Due date must be a valid date.")
        return;
      }
      _dueDate = date;
    },
    
    set priority(value) {
      if (isNaN(+value) || +value < 1 || +value > 5) {
        alert("Priority must be a number between one and five.")
        return;
      }
      _priority = value;
    },
    
    set notes(value) {
      _notes = notes;
    },
    
    addToChecklist(item) {
      _checklist.push(item);
    },

    removeFromChecklist(item) {
      const index = _checklist.indexOf(item);
      _checklist.splice(index, 1);
    } 
  }
}

export default Todo
