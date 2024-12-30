import ErrorRepository from "../Map";

const error = new ErrorRepository();

test("Ответ по коду ошибки", () => {
  error.add(400, "ошибочный запрос");
  expect(error.translate(400)).toBe('ошибочный запрос');
});

test("Unknown error", () => {
  expect(error.translate(77)).toBe('Unknown error');
});