const Employee = require ('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee("Alex", 6, "alystrife@gmail.com");
  
    expect(employee.name).toEqual(("Alex"));
    expect(employee.id).toEqual((6));
    expect(employee.email).toEqual(("alystrife@gmail.com"));
  });
