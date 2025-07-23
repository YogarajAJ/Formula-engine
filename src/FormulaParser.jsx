export const parseFormula = (expression) => {
  const variableRegex = /\b[A-Za-z_][A-Za-z0-9_]*\b/g;
  const operatorRegex = /[+\-*/^=()]/g;

  const variables = [...new Set(expression.match(variableRegex) || [])].filter(
    (v) => isNaN(v)
  );
  const operators = expression.match(operatorRegex) || [];

  return {
    variables,
    operators,
  };
};
