import IsPass from "../src/main";

test("input isEmpty?", () => {
  const inputNoEmpty = new IsPass();
  inputNoEmpty.setInput("123");
  expect(new IsPass("").isEmpty("Please input somethings!").isPass).toBeFalsy();
  expect(new IsPass("123").isEmpty("Please input somethings!").isPass).toBeTruthy();
  expect(inputNoEmpty.isEmpty("Please input somethings!").isPass).toBeTruthy();
});

test("input isMinLength?", () => {
  expect(new IsPass("123").minLength(4, "Please input shorter then 4!").isPass).toBeFalsy();
  expect(new IsPass("123").minLength(3, "Please input shorter then 3!").isPass).toBeTruthy();
});

test("input isMaxLength?", () => {
  expect(new IsPass("123").maxLength(3, "Please input longer then 4!").isPass).toBeTruthy();
  expect(new IsPass("123").maxLength(2, "Please input longer then 3!").isPass).toBeFalsy();
});

test("input isEmail?", () => {
  expect(new IsPass("123").isEmail("Please input Email!").isPass).toBeFalsy();
  expect(new IsPass("zenoslin@outlook.com").isEmail("Please input Email!").isPass).toBeTruthy();
});

test("input isURL?", () => {
  expect(new IsPass("123").isURL("Please input URL!").isPass).toBeFalsy();
  expect(new IsPass("http://zenoslin.top").isURL("Please input URL!").isPass).toBeTruthy();
  expect(new IsPass("https://zenoslin.top").isURL("Please input URL!").isPass).toBeTruthy();
  expect(new IsPass("ftp://zenoslin.top").isURL("Please input URL!").isPass).toBeTruthy();
});

test("input isMobile?", () => {
  expect(new IsPass("123").isMobile("Please input mobile!").isPass).toBeFalsy();
  expect(new IsPass("12312312312").isMobile("Please input mobile!").isPass).toBeFalsy();
  expect(new IsPass("15602250888").isMobile("Please input mobile!").isPass).toBeTruthy();
});

test("input requireRegexp?", () => {
  expect(
    new IsPass("123").requireRegexp(/^[1]([3-9])[0-9]{9}$/, "Please input mobile!")
      .isPass
  ).toBeFalsy();
  expect(
    new IsPass("12312312312").requireRegexp(/^[1]([3-9])[0-9]{9}$/, "Please input mobile!")
      .isPass
  ).toBeFalsy();
  expect(
    new IsPass("15602250888").requireRegexp(/^[1]([3-9])[0-9]{9}$/, "Please input mobile!")
      .isPass
  ).toBeTruthy();
});
