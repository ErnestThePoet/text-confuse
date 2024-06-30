import { describe, test, expect } from "@jest/globals";
import { antoEncode, antoDecode } from "../src/modules/encdec";

describe("Anto enc/dec", () => {
  test("enc1", () => {
    expect(antoEncode("你好")).toBe("我坏");
  });

  test("enc2", () => {
    expect(antoEncode("事必躬亲的她")).toBe("无所用心的她");
  });

  test("enc3", () => {
    expect(antoEncode("我我行我素我")).toBe("你言听计从你");
  });

  test("dec1", () => {
    expect(antoDecode(antoEncode("你好"))).toBe("你好");
  });

  test("dec2", () => {
    expect(antoDecode(antoEncode("事必躬亲的她"))).toBe("事必躬亲的她");
  });

  test("dec3", () => {
    expect(antoDecode(antoEncode("我我行我素我"))).toBe("我我行我素我");
  });
});
