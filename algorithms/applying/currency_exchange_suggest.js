const suggestedMoney = (money) => {
  const results     = initSuggest(money);
  const middle_deno = middleDenominate(); // 50000
  const last_deno   = lastDenominate();   // 100000
  const first_sur   = results.first % last_deno;
  if (first_sur && first_sur < middle_deno) {
    results.second  = results.first  + middle_deno - first_sur;
    results.third   = results.second + middle_deno;
  } else if (first_sur){
    results.second  = results.first  + last_deno - first_sur;
  }
  return results;
};

const initSuggest = (money) => {
  return {
    first : firstSuggest(money),
    second: 0,
    third : 0,
  };
}

const firstSuggest = (money) => {
  surplus = money % lastDenominate(); // money % 100000
  return money + denominates().find((item) => item >= surplus) - surplus;
}

const denominates = () => {
  return [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];
}

const lastDenominate = () => {
  return denominates().slice(-1)[0]; //100000
}

const middleDenominate = () => {
  return denominates()[Math.round((denominates().length - 1) / 2)]; // 50000
}
