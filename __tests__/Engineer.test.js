const Engineer = require ('../lib/engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer("Alex", 6, "alystrife@gmail.com", "alysnyder");
  
    expect(engineer.name).toEqual(("Alex"));
    expect(engineer.id).toEqual((6));
    expect(engineer.email).toEqual(("alystrife@gmail.com"));
    expect(engineer.github).toEqual(("alysnyder"))
  });