UPDATE current_questions
SET question = $2, pos_or_neg = $3 WHERE ID = $1;