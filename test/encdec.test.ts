import { describe, test, expect } from "@jest/globals";
import { antoTransform } from "../src/modules/encdec";

describe("Anto enc/dec", () => {
  test("enc1", () => {
    expect(antoTransform("你好")).toBe("我坏");
  });

  test("enc2", () => {
    expect(antoTransform("事必躬亲的她")).toBe("无所用心的她");
  });

  test("enc3", () => {
    expect(antoTransform("我我行我素我")).toBe("你言听计从你");
  });

  test("dec1", () => {
    expect(antoTransform(antoTransform("你好"))).toBe("你好");
  });

  test("dec2", () => {
    expect(antoTransform(antoTransform("事必躬亲的她"))).toBe("事必躬亲的她");
  });

  test("dec3", () => {
    expect(antoTransform(antoTransform("我我行我素我"))).toBe("我我行我素我");
  });
});
