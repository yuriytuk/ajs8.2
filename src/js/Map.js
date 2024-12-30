export default class ErrorRepository {
  constructor() {
    this.err = new Map();
  }

  add(code, string) {
    this.err.set(code, string);
  }

  translate(code) {
    if (this.err.has(code)) {
      return this.err.get(code);
    }
    return "Unknown error";
  }
}