export const shuffleAnswers = (question) => {
    const { A, B, C, D } = question;
    const answers = [A, B, C, D];
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
};
