"use client";

import { useMemo, useState } from "react";

type Choice = {
  label: string;
  score: number;
};

type Question = {
  prompt: string;
  choices: Choice[];
};

const questions: Question[] = [
  {
    prompt: "When someone is inconsistent, you usually...",
    choices: [
      { label: "Slow down and watch behavior", score: 0 },
      { label: "Feel curious but keep your pace", score: 1 },
      { label: "Want to fix the gap quickly", score: 2 },
    ],
  },
  {
    prompt: "Strong chemistry usually makes you...",
    choices: [
      { label: "Check for reciprocity first", score: 0 },
      { label: "Take a little more time", score: 1 },
      { label: "Overlook the warning signs", score: 2 },
    ],
  },
  {
    prompt: "A steady person feels...",
    choices: [
      { label: "Calming and easy to read", score: 0 },
      { label: "Unusual but promising", score: 1 },
      { label: "A bit flat or suspicious", score: 2 },
    ],
  },
  {
    prompt: "If someone respects your boundary, you...",
    choices: [
      { label: "Feel safer and more interested", score: 0 },
      { label: "Need a little time to trust it", score: 1 },
      { label: "Worry the spark will disappear", score: 2 },
    ],
  },
  {
    prompt: "Your dating pace is usually...",
    choices: [
      { label: "Intentional and observant", score: 0 },
      { label: "Flexible but cautious", score: 1 },
      { label: "Fast when you feel chemistry", score: 2 },
    ],
  },
];

const resultCopy = [
  {
    min: 0,
    max: 3,
    title: "Clear filter",
    summary:
      "Your attraction filter is relatively steady. You are more likely to notice safety cues before attachment takes over.",
  },
  {
    min: 4,
    max: 6,
    title: "Watchful filter",
    summary:
      "You see some red flags, but chemistry can still create drag. Keep using deliberate pacing and body-based check-ins.",
  },
  {
    min: 7,
    max: 8,
    title: "Pattern-sensitive filter",
    summary:
      "Your system may still treat uncertainty as chemistry. This is the zone where familiar intensity can override clarity.",
  },
  {
    min: 9,
    max: 10,
    title: "High-risk filter",
    summary:
      "Unsafe patterns are likely still sticky. Slow down, compare words to actions, and do not give charm more authority than consistency.",
  },
];

export function AttractionQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );

  const answeredCount = answers.filter((answer) => answer !== null).length;

  const score = useMemo(
    () =>
      answers
        .filter((answer): answer is number => answer !== null)
        .reduce((total, answer) => total + answer, 0),
    [answers],
  );

  const result = resultCopy.find(
    (item) => score >= item.min && score <= item.max,
  ) ?? resultCopy[resultCopy.length - 1];

  const complete = answeredCount === questions.length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Attraction filter setting
          </p>
          <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
            {complete ? result.title : "Answer all 5 questions"}
          </h3>
        </div>
        <div className="min-w-[180px]">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/50">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[var(--color-gold)] transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        {questions.map((question, index) => {
          const selected = answers[index];

          return (
            <fieldset
              key={question.prompt}
              className="rounded-[1.6rem] border border-white/10 bg-black/20 px-5 py-5"
            >
              <legend className="px-2 font-serif text-xl text-white sm:text-2xl">
                {index + 1}. {question.prompt}
              </legend>
              <div className="mt-4 grid gap-3">
                {question.choices.map((choice) => {
                  const active = selected === choice.score;

                  return (
                    <button
                      key={choice.label}
                      type="button"
                      onClick={() => {
                        setAnswers((current) => {
                          const next = [...current];
                          next[index] = choice.score;
                          return next;
                        });
                      }}
                      className={[
                        "flex min-h-12 items-center justify-between gap-4 rounded-full border px-4 py-3 text-left text-sm transition duration-300",
                        active
                          ? "border-[var(--color-gold)] bg-[rgba(214,161,128,0.14)] text-white"
                          : "border-white/10 bg-white/[0.03] text-white/76 hover:border-white/18 hover:bg-white/[0.06]",
                      ].join(" ")}
                    >
                      <span>{choice.label}</span>
                      <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                        {choice.score === 0
                          ? "Low"
                          : choice.score === 1
                            ? "Medium"
                            : "High"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-5 py-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
            Your result
          </p>
          <p className="mt-3 font-serif text-2xl text-white sm:text-3xl">
            {complete ? result.title : "Pending"}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
            {complete
              ? result.summary
              : "Choose one answer for each question to see your current attraction filter setting."}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <button
            type="button"
            onClick={() => setAnswers(Array(questions.length).fill(null))}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 px-5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white/32 hover:bg-white/[0.06]"
          >
            Reset quiz
          </button>
        </div>
      </div>
    </div>
  );
}
