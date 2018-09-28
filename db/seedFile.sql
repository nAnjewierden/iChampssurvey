CREATE Table if not exists current_questions(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean
);

INSERT INTO current_questions (question, pos_or_neg)
    VALUES  ('question1', true),
            ('question2', false),
            ('question3', true),
            ('question4', false),
            ('question5', true),
            ('question6', true),
            ('question7', false),
            ('question8', false)