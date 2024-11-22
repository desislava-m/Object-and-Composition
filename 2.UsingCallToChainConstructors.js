function Person(name) {
    this.name = name;
    Employee.call(this)
  }
  
  function Employee(name, job) {
    this.name = name;
    this.job = job; 
  }
  
  const emp = new Employee('Alice', 'Engineer');
  console.log(emp); // Output: Employee { name: 'Alice', job: 'Engineer' }
  