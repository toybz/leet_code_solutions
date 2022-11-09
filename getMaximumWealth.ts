/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​th customer has in the j​th bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 * Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
 */
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
function maximumWealth(accounts: number[][]): number {
  // get totalBalance for each user
  const totalUserBalance = accounts.map((account) => {
    return account.reduce((prev, next) => prev + next);
  });

  // find the highest balance
  let highestBalance = totalUserBalance.find((balance) => {
    return totalUserBalance.every((currentAmount) => balance >= currentAmount);
  });

  return highestBalance as number;
}
