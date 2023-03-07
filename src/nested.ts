/* eslint-disable indent */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubQs = questions.filter((Q: Question): boolean => Q.published);
    return pubQs;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptQs = questions.filter(
        (Q: Question): boolean =>
            Q.body !== "" || Q.expected !== "" || Q.options.length !== 0
    );
    return nonEmptQs;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    //const qIDs = questions.map((q: Question): number => q.id);
    //const ind = qIDs.findIndex((id1: number): boolean => id1 === id);
    const index = questions.findIndex((q: Question): boolean => q.id === id);
    if (index !== -1) {
        return questions[index];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filtQs = questions.filter((Q: Question): boolean => Q.id !== id);
    return filtQs;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((q: Question): string => q.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (total: number, q: Question) => total + q.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pub = getPublishedQuestions(questions);
    const sum = sumPoints(pub);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published\n";
    const qCSV = questions
        .map(
            (q: Question): string =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
        )
        .join("\n");
    return header.concat(qCSV);
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans: Answer[] = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pub = questions.map(
        (q: Question): Question => ({ ...q, published: true })
    );
    return pub;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const shortAns = questions.every(
        (q: Question): boolean => q.type === "short_answer_question"
    );
    const multi = questions.every(
        (q: Question): boolean => q.type === "multiple_choice_question"
    );
    return shortAns || multi;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const q = makeBlankQuestion(id, name, type);
    const qWithNew = [...questions, q];
    return qWithNew;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    /*
    const ind = questions.findIndex(
        (q: Question): boolean => q.id === targetId
    );*/
    const renamed = questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q
    );
    return renamed;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newType = questions.map(
        (q: Question): Question =>
            q.id === targetId
                ? newQuestionType !== "multiple_choice_question"
                    ? { ...q, type: newQuestionType, options: [] }
                    : { ...q, type: newQuestionType }
                : q
    );
    return newType;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function makeDeepCopyQs(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );
    return deepCopy;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const deepCopy = makeDeepCopyQs(questions);
    /*
    const ind = deepCopy.findIndex((q: Question): boolean => q.id === targetId);
    if (targetOptionIndex !== -1) {
        deepCopy[ind].options.splice(targetOptionIndex, 1, newOption);
    } else {
        deepCopy[ind].options.splice()
    }
    */
    const newOpt = deepCopy.map(
        (q: Question): Question =>
            q.id === targetId
                ? targetOptionIndex === -1
                    ? { ...q, options: [...q.options, newOption] } // eslint-disable-next-line indent, prettier/prettier
                    : {
                          ...q, // eslint-disable-next-line indent, prettier/prettier
                          options: q.options
                              .slice(0, targetOptionIndex)
                              .concat(newOption)
                              .concat(q.options.slice(targetOptionIndex + 1))
                      }
                : q
    );
    return newOpt;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const ind = questions.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    const newQ = duplicateQuestion(newId, questions[ind]);
    const dupQ = questions
        .slice(0, ind + 1)
        .concat(newQ)
        .concat(questions.slice(ind + 1, questions.length));
    return dupQ;
}
