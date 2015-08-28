/**
 * Created by alejandro on 8/28/15.
 */

describe("Give a user", function() {
        describe("When user loging with userid and password are correct", function () {
                it("Then should return true for login", function () {
                    var usr = "alejandro";
                    var pass = "123";
                    expect(checkUser(usr,pass)).toBe(true);
                });
            });
    });

describe("Give a user", function() {
    describe("When user loging with userid and password", function () {
        it("Then should return false for login", function () {
            var usr = "alejandro";
            var pass = "12";
            expect(checkUser(usr,pass)).toBe(false);
        });
    });
});

describe("Validate alfa numeric User", function() {
    it("Then should return true for alfa numeric", function () {
        expect(validateAlphaNum("aA123")).toBe(true);
    });
});

describe("Validate non alfa numeric User", function() {
    it("Then should return false for non alfa numeric", function () {
        expect(validateAlphaNum("a&/s34&D")).toBe(false);
    });
});

describe("Hello World", function() {
        it("Then should return Hello World", function () {
            expect(helloWorld()).toEqual("Hello World");
        });
});