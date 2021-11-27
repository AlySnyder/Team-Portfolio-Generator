const Intern = require ('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern("Alex", 6, "alystrife@gmail.com", "MIT");
  
    expect(intern.name).toEqual(("Alex"));
    expect(intern.id).toEqual((6));
    expect(intern.email).toEqual(("alystrife@gmail.com"));
    expect(intern.school).toEqual(("MIT"))
  });