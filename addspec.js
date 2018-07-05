var app=require('./add.js');
describe("Addition",function(){
    it("The function should add 2 numbers",function(){
        var value=app.AddNumber(3,4);
        expect(value).toBe(11);
        expect(value).toBe(10);
    });
});
