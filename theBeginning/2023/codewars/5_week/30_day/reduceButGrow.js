//Given a non-empty array of integers, return the result of multiplying the values together in order.

const grow = x => x.reduce((tot,n) => tot * n);