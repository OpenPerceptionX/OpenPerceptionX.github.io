// Shared data for user study charts

export type UserStudyAverageRecord = {
  category: string;
  value1: number;
  value2: number;
  value3: number;
  fill1: string;
  fill2: string;
  fill3: string;
};

export const userStudyAverageData: UserStudyAverageRecord[] = [
  { category: "1", value1: 0.047, value2: 0.239, value3: 0.285, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "2", value1: 0.048, value2: 0.040, value3: 0.229, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "3", value1: 0.049, value2: 0.306, value3: 0.317, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "4", value1: 0.096, value2: 0.142, value3: 0.336, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "5", value1: 0.037, value2: 0.199, value3: 0.240, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  { category: "6", value1: 0.055, value2: 0.222, value3: 0.281, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  // { category: "7", value1: 0.135, value2: 0.284, value3: 0.410, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
  // { category: "8", value1: 0.041, value2: 0.246, value3: 0.262, fill1: "var(--color-1)", fill2: "var(--color-2)", fill3: "var(--color-3)" },
];

export type UserStudySingleRecord = { browser: string; visitors: number; fill: string };

export function getUserStudySingleData(category: string): UserStudySingleRecord[] {
  const rec = userStudyAverageData.find((r) => r.category === category);
  if (!rec) return [];
  return [
    { browser: "1", visitors: rec.value1, fill: rec.fill1 },
    { browser: "2", visitors: rec.value2, fill: rec.fill2 },
    { browser: "3", visitors: rec.value3, fill: rec.fill3 },
  ];
}





