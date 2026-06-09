from itertools import product
from sympy import sympify, sstr
from sympy.logic.boolalg import BooleanFunction
from pathlib import Path


def pretty(expr):
    return (
        str(expr)
        .replace("~", "¬")
        .replace(" & ", " ∧ ")
        .replace(" | ", " ∨ ")
        .replace("Implies(", "(")
        .replace(", ", " → ")
        .rstrip(")")
    )


def truth_table_markdown(expression: str) -> str:
    """
    Generate a markdown truth table including all intermediate
    boolean subexpressions.

    Example:
        truth_table_markdown("((p & q) | (p & r)) >> t")
    """

    expr = sympify(expression)

    # Variables sorted by name
    variables = sorted(expr.free_symbols, key=lambda s: s.name)

    # Collect subexpressions in evaluation order
    subexpressions = []

    def visit(node):
        for arg in getattr(node, "args", ()):
            visit(arg)

        if isinstance(node, BooleanFunction) and node not in subexpressions:
            subexpressions.append(node)

    visit(expr)

    headers = [str(v) for v in variables] + [pretty(s) for s in subexpressions]

    lines = [
        "| " + " | ".join(headers) + " |",
        "| " + " | ".join(["---"] * len(headers)) + " |",
    ]

    for values in product([True, False], repeat=len(variables)):
        env = dict(zip(variables, values))

        row = ["T" if v else "F" for v in values]

        for subexpr in subexpressions:
            result = bool(subexpr.subs(env))
            row.append("T" if result else "F")

        lines.append("| " + " | ".join(row) + " |")

    return "\n".join(lines)


expresions = [
    "((p & q) | (p & r)) >> t",
    "(p & q) >> r",
    "((p | q) & ~r) >> s",
    "(((p & q) | (r & ~s)) >> (t | u)) & ((p >> r) | (q >> s))",
]


result_file_name = "./result.md"

Path.unlink(result_file_name, missing_ok=True)


for e in expresions:
    result = truth_table_markdown(e)

    with open(result_file_name, "a") as file:
        file.write(f"# {e}\n")
        file.write(result)
        file.write("\n\n-----------------\n")
