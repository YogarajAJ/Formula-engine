// utils/parseFormula.js
import { evaluate } from "mathjs";

/**
 * Parses formulas inside {{ }} and evaluates them using provided variables
 * Supports "variables.a + variables.b" syntax.
 *
 * @param {string} content
 * @param {object} variables - Dynamic variable object passed as { a: 10, b: 20 }
 */
export const parseFormula = (content, variables = {}) => {
  const scope = { variables }; 

  return content.replace(/\{\{(.+?)\}\}/g, (match, formula) => {
    try {
      const result = evaluate(formula.trim(), scope);
      return result;
    } catch (err) {
      console.warn(`Error evaluating: ${formula}`, err.message);
      return "";
    }
  });
};
