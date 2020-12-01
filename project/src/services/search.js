export function getLists(value) {
  return fetch('/api/getListsAsync?value=' + value).then(res =>
    res.json().catch(e => {
      console.log(e);
    }),
  );
}
