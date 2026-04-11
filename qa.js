const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    document.querySelectorAll(".answer").forEach(a => {
      if (a !== q.nextElementSibling) {
        a.style.display = "none";
      }
    });

    const answer = q.nextElementSibling;

    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});