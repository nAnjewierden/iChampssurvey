CREATE Table if not exists survey_reponses_5(
    ID serial primary key,
    name varchar(1000),
    pos_or_neg boolean,
    answer number
);

CREATE Table if not exists current_questions_5(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean,
    
);

-- INSERT INTO current_questions_5 (question, pos_or_neg)
--     VALUES  ('question1', true),
--             ('question2', false),
--             ('question3', true),
--             ('question4', false),
--             ('question5', true);

CREATE Table if not exists survey_reponses_10(
    ID serial primary key,
    name varchar(1000),
    pos_or_neg boolean,
    answer number
);

CREATE Table if not exists current_questions_10(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean
);

-- INSERT INTO current_questions_10 (question, pos_or_neg)
--     VALUES  ('question1', true),
--             ('question2', false),
--             ('question3', true),
--             ('question4', false),
--             ('question5', true),
--             ('question1', true),
--             ('question2', false),
--             ('question3', true),
--             ('question4', false),
--             ('question5', true);

CREATE Table if not exists survey_reponses_15(
    ID serial primary key,
    name varchar(1000),
    pos_or_neg boolean,
    answer number
);

CREATE Table if not exists current_questions_15(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean,
);

-- INSERT INTO current_questions_15 (question, pos_or_neg)
--     VALUES  ('question1', true),
--             ('question2', false),
--             ('question3', true),
--             ('question4', false),
--             ('question5', true),
--             ('question1', true),
--             ('question2', false),
--             ('question3', true),
--             ('question4', false),
--             ('question5', true),
--             ('question1', true),
--             ('question2', false),
--             ('question3', true),
--             ('question4', false),
--             ('question5', true);

CREATE Table if not exists survey_reponses_20(
    ID serial primary key,
    name varchar(1000),
    pos_or_neg boolean,
    answer number
);

CREATE Table if not exists current_questions_20(
    ID serial primary key,
    question varchar(1000),
    pos_or_neg boolean,
);

-- INSERT INTO current_questions_20 (question, pos_or_neg)
--     VALUES  ('question1'),
--             ('question2'),
--             ('question3'),
--             ('question4'),
--             ('question5'),
--             ('question1'),
--             ('question2'),
--             ('question3'),
--             ('question4'),
--             ('question5'),
--             ('question1'),
--             ('question2'),
--             ('question3'),
--             ('question4'),
--             ('question5'),
--             ('question1'),
--             ('question2'),
--             ('question3'),
--             ('question4'),
--             ('question5');
            
            
           