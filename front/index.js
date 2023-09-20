async function githubLogin() {
  const result = await fetch("/api/sessions/github");

  console.log(result);
}
