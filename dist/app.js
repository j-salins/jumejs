let url = "https://public-api.wordpress.com/rest/v1.1/sites/thefrost-vqank.wordpress.com/posts/?number=2&pretty=true"
let fetchFAQ = async () => {
  return await new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        let details = JSON.parse(data).posts;
        resolve(details);
        console.log(details);
      });
  });
}

function getFAQ(json) {
  let faqList = [];
  let detail, summary;

  json.table.rows.forEach((row, i) => {
    if (i == 0) return; // The first row is the header        

    try { detail = row.c[0].f ? row.c[0].f : row.c[0].v }
    catch (e) { detail = '' }

    try { summary = row.c[1].f ? row.c[1].f : row.c[1].v }
    catch (e) { summary = '' }

    faqList.push([detail, summary]);
  });

  return faqList;
}