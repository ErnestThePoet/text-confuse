import antoTable_ from "../assets/anto.json";

const antoTable = antoTable_ as Record<string, string>;

const antoKeyLengths = Array.from(
  Object.keys(antoTable)
    .reduce<Set<number>>((p: Set<number>, c) => {
      p.add(c.length);
      return p;
    }, new Set())
    .values()
).sort((a, b) => b - a);

export function antoTransform(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; ) {
    let foundAnto = false;

    for (const j of antoKeyLengths) {
      if (i + j > s.length) {
        continue;
      }

      const currentSlice = s.substring(i, i + j);

      if (currentSlice in antoTable) {
        const anto = antoTable[currentSlice];
        result += anto;
        foundAnto = true;
        i += anto.length;
        break;
      }
    }

    if (!foundAnto) {
      result += s[i];
      i++;
    }
  }

  return result;
}
