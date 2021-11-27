const Manager = require ('../lib/manager');

test('creates an mnager object', () => {
    const manager = new Manager("Alex", 6, "alystrife@gmail.com", "1");
  
    expect(manager.name).toEqual(("Alex"));
    expect(manager.id).toEqual((6));
    expect(manager.email).toEqual(("alystrife@gmail.com"));
    expect(manager.officenumber).toEqual(("1"))
  });