const { Frame } = require('../src/Frame.js')
describe("Frame", () => {

  beforeEach( () => {
    frame = new Frame
  })

  test("calculates a total for two rolls", () => {
    var frame = new Frame([1,3]);
    var next = new Frame([0,0]);
    expect(frame.total(next)).toEqual(4);
  });

  test("calculates a total for one spare", () => {
    var frame = new Frame([5,5]);
    var next = new Frame([5,2]);
    expect(frame.total(next)).toEqual(15);
  });

  test("calculates a total for one strike", () => {
    var frame = new Frame([10]);
    var next = new Frame([5,2]);
    expect(frame.total(next)).toEqual(17);
  });

  test("calculates a total for two strikes in a row", () => {
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var frame_after_next = new Frame([5, 2]);
    expect(frame.total(next, frame_after_next)).toEqual(25);
  });

  test("calculates three strikes in a row", () =>{
    var frame = new Frame([10]);
    var next = new Frame([10]);
    var frame_after_next = new Frame([10]);
    expect(frame.total(next, frame_after_next)).toEqual(30);
  });

  test("calculates a strike in the final frame", () => {
    var frame = new Frame([10,10,10]);
    expect(frame.total()).toEqual(30);
  });

  test("calculates a strike in the final frame but one", () => {
    var frame = new Frame([10]);
    var next = new Frame([10,10,10]);
    expect(frame.total(next)).toEqual(30);
  });
})