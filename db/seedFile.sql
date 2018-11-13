CREATE Table if not exists survey-reponses_5(
    ID serial primary key,
    name varchar(1000),
    pos_or_neg boolean,
    answer number
);

CREATE Table if not exists current_questions_5(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean,
    answer number
);

INSERT INTO current_questions_5 (question, pos_or_neg, answer)
    VALUES  ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0);

CREATE Table if not exists current_questions_10(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean,
    answer number
);

INSERT INTO current_questions_10 (question, pos_or_neg, answer)
    VALUES  ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0),
            ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0);

CREATE Table if not exists current_questions_15(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean,
    answer number
);

INSERT INTO current_questions_15 (question, pos_or_neg, answer)
    VALUES  ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0),
            ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0),
            ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0);

CREATE Table if not exists current_questions_20(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean,
    answer number
);

INSERT INTO current_questions_20 (question, pos_or_neg, answer)
    VALUES  ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0),
            ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0),
            ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0),
            ('question1', true, 0),
            ('question2', false, 0),
            ('question3', true, 0),
            ('question4', false, 0),
            ('question5', true, 0);
            
            
           