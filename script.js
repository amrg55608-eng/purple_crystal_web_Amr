"use strict";
const QUESTIONS = [{"type":"mc","level":1,"q":"What is the result of 5 == 5?","opts":["True","False","5","Error"],"a":0,"why":"== checks whether the two values are equal."},{"type":"mc","level":1,"q":"What is the result of 8 != 3?","opts":["False","True","11","Error"],"a":1,"why":"!= means 'not equal to'; 8 and 3 are different."},{"type":"mc","level":1,"q":"Which operator means 'greater than or equal to'?","opts":["=>",">=","=<","=="],"a":1,"why":"The correct operator is >=."},{"type":"mc","level":1,"q":"What is the result of 4 < 9?","opts":["False","True","None","Error"],"a":1,"why":"4 is less than 9, so the expression is True."},{"type":"mc","level":1,"q":"What is the result of 12 <= 12?","opts":["True","False","12","Error"],"a":0,"why":"<= includes equality, so 12 <= 12 is True."},{"type":"mc","level":1,"q":"Which operator checks whether two values are equal?","opts":["=","!=","==",">"],"a":2,"why":"== compares values. A single = assigns a value."},{"type":"mc","level":1,"q":"What does the expression 3 > 10 return?","opts":["True","False","3","10"],"a":1,"why":"3 is not greater than 10."},{"type":"mc","level":1,"q":"Comparison operators usually produce which type of result?","opts":["String","Boolean (True/False)","List","Float only"],"a":1,"why":"A comparison expression returns a Boolean value: True or False."},{"type":"mc","level":1,"q":"Which expression is True?","opts":["6 < 2","7 == 8","9 >= 9","4 != 4"],"a":2,"why":"9 is equal to 9, and >= allows equality."},{"type":"mc","level":1,"q":"What is the result of 2 <= 1?","opts":["True","False","2","1"],"a":1,"why":"2 is greater than 1, so 2 <= 1 is False."},{"type":"mc","level":2,"q":"What is the result of True and False?","opts":["True","False","None","Error"],"a":1,"why":"and is True only when both operands are True."},{"type":"mc","level":2,"q":"What is the result of True or False?","opts":["True","False","None","Error"],"a":0,"why":"or is True when at least one operand is True."},{"type":"mc","level":2,"q":"What is the result of not True?","opts":["True","False","1","Error"],"a":1,"why":"not reverses the Boolean value."},{"type":"mc","level":2,"q":"What is the result of not False?","opts":["False","True","0","Error"],"a":1,"why":"not False evaluates to True."},{"type":"mc","level":2,"q":"What is the result of (5 > 2) and (3 < 1)?","opts":["True","False","5","Error"],"a":1,"why":"The first condition is True; the second is False. True and False is False."},{"type":"mc","level":2,"q":"What is the result of (5 > 2) or (3 < 1)?","opts":["True","False","None","Error"],"a":0,"why":"True or False evaluates to True."},{"type":"mc","level":2,"q":"Which expression evaluates to False?","opts":["True or False","not False","False and True","7 > 2"],"a":2,"why":"False and True is False because both sides must be True."},{"type":"mc","level":2,"q":"Which operator reverses True to False and False to True?","opts":["and","or","not","!="],"a":2,"why":"not negates a Boolean value."},{"type":"mc","level":2,"q":"What is the result of (4 == 4) and (2 != 2)?","opts":["True","False","4","Error"],"a":1,"why":"True and False evaluates to False."},{"type":"mc","level":2,"q":"What is the result of (6 <= 6) or (9 < 2)?","opts":["True","False","None","Error"],"a":0,"why":"The first comparison is True, so True or False is True."},{"type":"mc","level":1,"q":"When does an if statement execute its indented block?","opts":["Always","Only when its condition is True","Only when its condition is False","Only at the end of a program"],"a":1,"why":"An if block runs when its condition evaluates to True."},{"type":"mc","level":1,"q":"What is printed?\\nage = 20\\nif age >= 18:\\n    print('Eligible to vote.')","opts":["Eligible to vote.","Nothing","False","Error"],"a":0,"why":"20 >= 18 is True, so the print statement runs."},{"type":"mc","level":1,"q":"What is printed?\\nage = 15\\nif age >= 18:\\n    print('Eligible')","opts":["Eligible","15","Nothing","Error"],"a":2,"why":"15 >= 18 is False, so the if block is skipped."},{"type":"mc","level":2,"q":"What is the purpose of the colon at the end of an if line?","opts":["Ends the whole program","Introduces the indented block","Makes the condition False","Prints the result"],"a":1,"why":"The colon marks the start of the suite/block controlled by the condition."},{"type":"mc","level":2,"q":"In Python, which lines belong to an if block?","opts":["All lines after it forever","Lines indented under the if","Only comments","Only lines with print"],"a":1,"why":"Indentation determines which statements are inside the if block."},{"type":"mc","level":2,"q":"What happens if an if condition is False and there is no else?","opts":["The if block is skipped","The if block runs anyway","Python changes it to True","The program always crashes"],"a":0,"why":"Without an else branch, the block is simply skipped."},{"type":"mc","level":2,"q":"Which is the correct Python syntax?","opts":["if x > 3 then:","if (x > 3)","if x > 3:","if x > 3 do"],"a":2,"why":"Python uses if condition: followed by an indented block."},{"type":"mc","level":2,"q":"What is printed?\\nx = 4\\nif x > 2:\\n    print('Yes')","opts":["No","Yes","True","Nothing"],"a":1,"why":"4 > 2 is True, so 'Yes' is printed."},{"type":"mc","level":2,"q":"What is printed?\\nx = 1\\nif x > 2:\\n    print('A')\\nelse:\\n    print('B')","opts":["A","B","A then B","Nothing"],"a":1,"why":"The condition is False, so the else block prints B."},{"type":"mc","level":2,"q":"What does else represent in a two-way decision?","opts":["A second condition that must be True","The alternative block when if is False","A loop","A comparison operator"],"a":1,"why":"else runs when the if condition is False."},{"type":"mc","level":3,"q":"What is printed?\\na = 13\\nb = 33\\nprint(a > b)","opts":["True","False","13","33"],"a":1,"why":"13 is not greater than 33."},{"type":"mc","level":3,"q":"What is printed?\\na = 13\\nb = 33\\nprint(a < b)","opts":["True","False","13","33"],"a":0,"why":"13 is less than 33."},{"type":"mc","level":3,"q":"What is printed?\\na = 13\\nb = 33\\nprint(a == b)","opts":["True","False","46","Error"],"a":1,"why":"13 and 33 are not equal."},{"type":"mc","level":3,"q":"What is printed?\\na = 13\\nb = 33\\nprint(a != b)","opts":["True","False","13","33"],"a":0,"why":"The values are different, so != returns True."},{"type":"mc","level":3,"q":"What is printed?\\na = 13\\nb = 33\\nprint(a >= b)","opts":["True","False","None","Error"],"a":1,"why":"13 is neither greater than nor equal to 33."},{"type":"mc","level":3,"q":"What is printed?\\na = 13\\nb = 33\\nprint(a <= b)","opts":["True","False","None","Error"],"a":0,"why":"13 is less than 33, so <= is True."},{"type":"mc","level":3,"q":"What is printed?\\na = True\\nb = False\\nprint(a and b)","opts":["True","False","1","0"],"a":1,"why":"True and False evaluates to False."},{"type":"mc","level":3,"q":"What is printed?\\na = True\\nb = False\\nprint(a or b)","opts":["True","False","None","Error"],"a":0,"why":"True or False evaluates to True."},{"type":"mc","level":3,"q":"What is printed?\\na = True\\nprint(not a)","opts":["True","False","a","Error"],"a":1,"why":"not True is False."},{"type":"mc","level":3,"q":"What is printed?\\nx = 10\\nif x >= 10:\\n    print('Excellent')\\nelse:\\n    print('Failed')","opts":["Failed","Excellent","True","Nothing"],"a":1,"why":"10 >= 10 is True, so Excellent is printed."},{"type":"mc","level":3,"q":"What is printed?\\nscore = 40\\nif score >= 50:\\n    print('Passed')\\nelse:\\n    print('Failed')","opts":["Passed","Failed","40","Nothing"],"a":1,"why":"40 >= 50 is False, so the else branch runs."},{"type":"mc","level":3,"q":"What is printed?\\nx = 7\\ny = 12\\nif x > y:\\n    print('x is greatest')\\nelse:\\n    print('y is greatest')","opts":["x is greatest","y is greatest","Both","Nothing"],"a":1,"why":"7 > 12 is False, so the else branch prints y is greatest."},{"type":"mc","level":3,"q":"Which condition checks that x is between 1 and 10 inclusive?","opts":["x > 1 or x < 10","x >= 1 and x <= 10","x == 1 and x == 10","x <= 1 and x >= 10"],"a":1,"why":"Both inclusive boundaries must be satisfied, so use >=, <= with and."},{"type":"mc","level":3,"q":"What is the result of (8 != 5) and not (2 > 9)?","opts":["True","False","8","Error"],"a":0,"why":"8 != 5 is True; 2 > 9 is False, so not False is True. True and True is True."},{"type":"mc","level":3,"q":"What is printed?\\nn = 6\\nif n < 5:\\n    print('Low')\\nelse:\\n    print('High')","opts":["Low","High","6","Nothing"],"a":1,"why":"6 < 5 is False, so High is printed."},{"type":"essay","level":1,"q":"In your own words, what is a Boolean expression?","accepted":["true false","true or false","boolean result","produces true or false"],"sample":"A Boolean expression asks a question and evaluates to True or False.","why":"Boolean expressions produce a Boolean result: True or False."},{"type":"essay","level":1,"q":"Write the Python operator used to test equality (not assignment).","accepted":["==","double equals","two equals"],"sample":"==","why":"Use == to compare values for equality."},{"type":"essay","level":1,"q":"What does the != operator mean?","accepted":["not equal","not equal to","different"],"sample":"It means 'not equal to'.","why":"!= checks whether two values are different."},{"type":"essay","level":1,"q":"Write the six comparison operators shown in the lecture.","accepted":["== != > >= < <=","==, !=, >, >=, <, <=","equal not equal greater"],"sample":"==, !=, >, >=, <, <=","why":"These are equality, inequality, greater/greater-or-equal, and less/less-or-equal."},{"type":"essay","level":2,"q":"What is the difference between and and or?","accepted":["and both","and requires both","or one","or at least one","both true"],"sample":"and requires both conditions to be True; or requires at least one to be True.","why":"and needs both operands True; or needs at least one True."},{"type":"essay","level":2,"q":"What does the not operator do?","accepted":["reverses","negates","true to false","false to true"],"sample":"It reverses a Boolean value: True becomes False and False becomes True.","why":"not negates the Boolean value."},{"type":"essay","level":2,"q":"Explain when an if block executes.","accepted":["condition is true","if condition true","evaluates to true","when true"],"sample":"It executes only when the condition evaluates to True.","why":"This is the central behavior of an if statement."},{"type":"essay","level":2,"q":"What is the role of else in an if/else statement?","accepted":["when if is false","if condition false","alternative","otherwise"],"sample":"else runs the alternative block when the if condition is False.","why":"else provides the alternative branch."},{"type":"essay","level":2,"q":"What is important about indentation in Python conditional statements?","accepted":["defines block","shows which statements","indented block","indentation determines"],"sample":"Indentation identifies which statements belong to the conditional block.","why":"Python uses indentation to group statements."},{"type":"essay","level":3,"q":"What does this print: print(13 <= 33)?","accepted":["true"],"sample":"True","why":"13 is less than 33."},{"type":"essay","level":3,"q":"What does this print: print(True and False)?","accepted":["false"],"sample":"False","why":"Both operands must be True for and to return True."},{"type":"essay","level":3,"q":"What does this print: print(not False)?","accepted":["true"],"sample":"True","why":"not False evaluates to True."},{"type":"essay","level":3,"q":"Write an if/else statement that prints 'Adult' if age is at least 18, otherwise prints 'Minor'.","accepted":["if age >= 18","print('adult')","print(\"adult\")","else","minor"],"sample":"if age >= 18:\\n    print('Adult')\\nelse:\\n    print('Minor')","why":"The condition age >= 18 includes ages equal to 18 or above."},{"type":"essay","level":3,"q":"Given x = 4 and y = 9, which variable is greatest? Write the comparison that proves it.","accepted":["y","y > x","9 > 4"],"sample":"y is greatest because y > x (9 > 4).","why":"9 is greater than 4."},{"type":"essay","level":3,"q":"In one sentence, describe a two-way decision in Python.","accepted":["if else","if/else","true false","if condition"],"sample":"An if/else chooses one of two blocks depending on whether the if condition is True or False.","why":"Two-way decisions use if and else to choose between alternatives."}];

const AR_TRANSLATIONS = ["ما ناتج التعبير 5 == 5؟", "ما ناتج التعبير 8 != 3؟", "أي عامل يعني «أكبر من أو يساوي»؟", "ما ناتج التعبير 4 < 9؟", "ما ناتج التعبير 12 <= 12؟", "أي عامل يتحقق مما إذا كانت قيمتان متساويتين؟", "ماذا يُرجع التعبير 3 > 10؟", "ما نوع النتيجة التي تُنتجها عوامل المقارنة عادةً؟", "أي تعبير من التالي نتيجته True (صحيح)؟", "ما ناتج التعبير 2 <= 1؟", "ما ناتج True and False؟", "ما ناتج True or False؟", "ما ناتج not True؟", "ما ناتج not False؟", "ما ناتج (5 > 2) and (3 < 1)؟", "ما ناتج (5 > 2) or (3 < 1)؟", "أي تعبير تكون نتيجته False (خطأ)؟", "أي عامل يعكس True إلى False وFalse إلى True؟", "ما ناتج (4 == 4) and (2 != 2)؟", "ما ناتج (6 <= 6) or (9 < 2)؟", "متى تنفّذ جملة if الكتلة البرمجية ذات المسافة البادئة؟", "ما الذي سيُطبع؟\nage = 20\nif age >= 18:\n    print('Eligible to vote.')", "ما الذي سيُطبع؟\nage = 15\nif age >= 18:\n    print('Eligible')", "ما الغرض من النقطتين الرأسيتين (:) في نهاية سطر if؟", "في Python، أي الأسطر تنتمي إلى كتلة if؟", "ماذا يحدث إذا كان شرط if يساوي False ولا توجد جملة else؟", "أي مما يلي هو تركيب Python الصحيح؟", "ما الذي سيُطبع؟\nx = 4\nif x > 2:\n    print('Yes')", "ما الذي سيُطبع؟\nx = 1\nif x > 2:\n    print('A')\nelse:\n    print('B')", "ماذا تمثّل else في قرار ذي مسارين؟", "ما الذي سيُطبع؟\na = 13\nb = 33\nprint(a > b)", "ما الذي سيُطبع؟\na = 13\nb = 33\nprint(a < b)", "ما الذي سيُطبع؟\na = 13\nb = 33\nprint(a == b)", "ما الذي سيُطبع؟\na = 13\nb = 33\nprint(a != b)", "ما الذي سيُطبع؟\na = 13\nb = 33\nprint(a >= b)", "ما الذي سيُطبع؟\na = 13\nb = 33\nprint(a <= b)", "ما الذي سيُطبع؟\na = True\nb = False\nprint(a and b)", "ما الذي سيُطبع؟\na = True\nb = False\nprint(a or b)", "ما الذي سيُطبع؟\na = True\nprint(not a)", "ما الذي سيُطبع؟\nx = 10\nif x >= 10:\n    print('Excellent')\nelse:\n    print('Failed')", "ما الذي سيُطبع؟\nscore = 40\nif score >= 50:\n    print('Passed')\nelse:\n    print('Failed')", "ما الذي سيُطبع؟\nx = 7\ny = 12\nif x > y:\n    print('x is greatest')\nelse:\n    print('y is greatest')", "أي شرط يتحقق من أن قيمة x تقع بين 1 و10 شاملًا الحدّين؟", "ما ناتج (8 != 5) and not (2 > 9)؟", "ما الذي سيُطبع؟\nn = 6\nif n < 5:\n    print('Low')\nelse:\n    print('High')", "اشرح بأسلوبك ما المقصود بالتعبير المنطقي Boolean.", "اكتب عامل Python المستخدم لاختبار تساوي القيمتين (وليس إسناد قيمة).", "ماذا يعني العامل !=؟", "اكتب عوامل المقارنة الستة المذكورة في المحاضرة.", "ما الفرق بين and وor؟", "ماذا يفعل العامل not؟", "اشرح متى تُنفّذ الكتلة البرمجية التابعة لـ if.", "ما وظيفة else في جملة if/else؟", "ما أهمية المسافة البادئة (Indentation) في الجمل الشرطية بلغة Python؟", "ما ناتج تنفيذ: print(13 <= 33)؟", "ما ناتج تنفيذ: print(True and False)؟", "ما ناتج تنفيذ: print(not False)؟", "اكتب جملة if/else تطبع Adult إذا كان العمر 18 على الأقل، وإلا تطبع Minor.", "إذا كانت x = 4 وy = 9، فأي متغير قيمته أكبر؟ اكتب المقارنة التي تثبت ذلك.", "في جملة واحدة، اشرح معنى اتخاذ قرار ذي مسارين في Python."];
const $ = (id) => document.getElementById(id);
let deck = [], index = 0, score = 0, correctCount = 0, wrongCount = 0;
let selectedIndex = -1, answered = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function normalize(s) {
  return String(s || "").normalize("NFKC").toLowerCase().trim()
    .replace(/[’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ");
}
function pointsFor(level) { return level === 1 ? 10 : level === 2 ? 15 : 20; }
function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

function startGame() {
  deck = shuffle(QUESTIONS);
  index = 0; score = 0; correctCount = 0; wrongCount = 0;
  hide($("resultsPanel"));
  hide(document.querySelector(".hero"));
  show($("quizPanel"));
  renderQuestion();
}
function renderQuestion() {
  if (index >= deck.length) return renderResults();
  const q = deck[index];
  selectedIndex = -1; answered = false;
  $("questionCount").textContent = `${String(index + 1).padStart(2,"0")} / ${deck.length}`;
  $("levelCount").textContent = String(q.level).padStart(2,"0");
  $("scoreCount").textContent = `${score} PTS`;
  $("correctCount").textContent = correctCount;
  $("progressBar").style.width = `${(index / deck.length) * 100}%`;
  $("typeChip").textContent = q.type === "mc" ? "MULTIPLE CHOICE" : "SHORT ESSAY";
  $("levelTag").textContent = `LEVEL ${q.level}`;
  $("questionText").textContent = q.q.replace(/\\n/g, "\n");
  $("questionTranslation").textContent = AR_TRANSLATIONS[QUESTIONS.indexOf(q)] || "";
  $("feedback").textContent = "";
  $("feedback").className = "feedback hidden";
  $("statusText").textContent = "SYSTEM READY // Answer carefully";
  $("actionBtn").textContent = "CHECK ANSWER ↵";
  $("actionBtn").onclick = checkAnswer;
  $("options").innerHTML = "";
  hide($("essayInput"));
  $("essayInput").value = "";
  if (q.type === "mc") {
    show($("options"));
    q.opts.forEach((option, i) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = String.fromCharCode(65 + i);
      const label = document.createElement("span");
      label.textContent = option;
      btn.append(letter, label);
      btn.addEventListener("click", () => {
        if (answered) return;
        selectedIndex = i;
        document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
        btn.classList.add("selected");
      });
      $("options").appendChild(btn);
    });
  } else {
    hide($("options"));
    show($("essayInput"));
    $("essayInput").focus({preventScroll:true});
  }
}
function gradeEssay(q, answer) {
  const normalized = normalize(answer);
  const accepted = (q.accepted || []).map(normalize).filter(Boolean);
  // Mirror the original game's flexible keyword grading:
  // a complete accepted phrase is enough, otherwise two keyword fragments may match.
  if (accepted.some(a => normalized.includes(a))) return true;
  if (accepted.length >= 2) {
    const matches = accepted.filter(a => normalized.includes(a)).length;
    return matches >= Math.min(2, accepted.length);
  }
  return false;
}
function checkAnswer() {
  if (answered) return;
  const q = deck[index];
  let correct = false, given = "";
  if (q.type === "mc") {
    if (selectedIndex < 0) {
      $("statusText").textContent = "Choose an option before checking.";
      return;
    }
    given = q.opts[selectedIndex];
    correct = selectedIndex === q.a;
    document.querySelectorAll(".option").forEach((el, i) => {
      el.disabled = true;
      if (i === q.a) el.classList.add("correct");
      if (i === selectedIndex && !correct) el.classList.add("incorrect");
    });
  } else {
    given = $("essayInput").value.trim();
    if (!given) {
      $("statusText").textContent = "Write a short answer first.";
      return;
    }
    correct = gradeEssay(q, given);
    $("essayInput").disabled = true;
  }
  answered = true;
  const feedback = $("feedback");
  show(feedback);
  if (correct) {
    const points = pointsFor(q.level);
    score += points; correctCount++;
    feedback.className = "feedback good";
    feedback.textContent = `✓ CORRECT  +${points} PTS\n${q.why}`;
    $("statusText").textContent = "RESULT: PASS // Points added";
  } else {
    wrongCount++;
    feedback.className = "feedback bad";
    const detail = q.type === "mc" ? `Correct answer: ${q.opts[q.a]}` : `Sample answer: ${q.sample}`;
    feedback.textContent = `✕ NOT QUITE\n${detail}\n${q.why}`;
    $("statusText").textContent = "RESULT: REVIEW // Learn from the explanation";
  }
  $("scoreCount").textContent = `${score} PTS`;
  $("correctCount").textContent = correctCount;
  $("actionBtn").textContent = "NEXT QUESTION →";
  $("actionBtn").onclick = nextQuestion;
}
function nextQuestion() {
  index++;
  if (index < deck.length) $("essayInput").disabled = false;
  renderQuestion();
}
function renderResults() {
  hide($("quizPanel"));
  show($("resultsPanel"));
  $("progressBar").style.width = "100%";
  const accuracy = Math.round((correctCount / deck.length) * 100);
  $("finalScore").innerHTML = `${score} <small>PTS</small>`;
  $("resultCorrect").textContent = `${correctCount} / ${deck.length}`;
  $("resultWrong").textContent = wrongCount;
  $("resultAccuracy").textContent = `${accuracy}%`;
  $("resultSummary").textContent = accuracy >= 85
    ? "CRYSTAL MASTER // Excellent work!"
    : accuracy >= 65
      ? "LEVEL CLEARED // Keep practicing!"
      : "TRAINING MODE // Review the lecture and try again.";
  $("resultTitle").textContent = accuracy >= 85 ? "CRYSTAL MASTER" : accuracy >= 65 ? "LEVEL CLEARED" : "KEEP TRAINING";
}
function restartGame() {
  hide($("resultsPanel"));
  show(document.querySelector(".hero"));
  hide($("quizPanel"));
  $("essayInput").disabled = false;
  window.scrollTo({top:0, behavior:"smooth"});
}
$("startBtn").addEventListener("click", startGame);
$("restartBtn").addEventListener("click", restartGame);
