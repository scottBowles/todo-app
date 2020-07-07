/*
 *   TODO: 
 *   GIVE HELPFUL RESPONSES IF TRYING TO SET CATEGORIES 
 *   OR REMOVE A CATEGORY THAT ISN'T THERE
 *   CHANGE ALERTS TO ERROR MESSAGES
 */ 

const Project = ({title, description="", status="active", categories=[]}) => {
  let _title = "";
  let _description = "";
  let _status = "active";
  let _categories = [];

  const _statusOptions = ['active', 'archived'];

  const api = {
    get title() { return _title },
    get description() { return _description },
    get status() { return _status },
    get categories() { return _categories },

    set title(newTitle) {
      if ( newTitle === "" || newTitle.length > 100 ) {
        alert("Title must be between 1 and 100 characters.");
        return
      }
      _title = newTitle;
    },
    set description(newDescription) {
      _description = newDescription;
    },
    set status(newStatus) {
      let matchFound = false
      for (option of _statusOptions) {
        regex = new RegExp(`${option}`, "i");
        if (newStatus.match(regex)){
          _status = option;
          matchFound = true
        }
      }
      if (matchFound === false) {
        const last = _statusOptions.length - 1;
        const options = `'${_statusOptions.slice(0, last).join("', '")}' or '${_statusOptions[last]}'.`;
        alert(`Status must be ${options}`)
      }
    },
    addCategory(newCategory) {
      if (newCategory === "") {
        alert("Category cannot be empty");
        return;
      }
      _categories.push(newCategory);
    },
    removeCategory(category) {
      const index = _categories.indexOf(category);
      _categories.splice(index, 1);
    }
  }
  api.title = title
  api.description = description
  api.status = status
  api.categories = categories
  return api
}

export default Project