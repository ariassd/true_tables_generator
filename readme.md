# Boolean Expression Truth Table Generator

A Python utility that generates **Markdown truth tables** from logical expressions using **SymPy**. The script automatically discovers all intermediate subexpressions and includes them as separate columns, making it useful for studying propositional logic, validating logical equivalences, and creating educational material.

## Features

* Parse logical expressions from strings
* Automatically detect variables (symbols)
* Extract intermediate subexpressions recursively
* Generate complete truth tables
* Include step-by-step evaluation columns
* Export results directly to a Markdown file
* Support common logical operators:

  * AND (`&`)
  * OR (`|`)
  * NOT (`~`)
  * IMPLIES (`>>`)

## Example

Input expression:

```python
"((p & q) | (p & r)) >> t"
```

Generated table:

| p   | q   | r   | t   | p ∧ q | p ∧ r | (p ∧ q) ∨ (p ∧ r) | ((p ∧ q) ∨ (p ∧ r)) → t |
| --- | --- | --- | --- | ----- | ----- | ----------------- | ----------------------- |
| T   | T   | T   | T   | T     | T     | T                 | T                       |
| T   | T   | T   | F   | T     | T     | T                 | F                       |
| ... | ... | ... | ... | ...   | ...   | ...               | ...                     |

## Requirements

* Python 3.10+
* SymPy

## Installation

```bash
pip install sympy
```

## Usage

Define one or more expressions:

```python
expressions = [
    "((p & q) | (p & r)) >> t",
    "(p & q) >> r",
    "((p | q) & ~r) >> s",
    "(((p & q) | (r & ~s)) >> (t | u)) & ((p >> r) | (q >> s))",
]
```

Run the script:

```bash
python main.py
```

A file named `result.md` will be generated in the project root.

## Supported Operators

| Operator | Meaning         |            |
| -------- | --------------- | ---------- |
| `&`      | Logical AND     |            |
| `        | `               | Logical OR |
| `~`      | Logical NOT     |            |
| `>>`     | Logical IMPLIES |            |

### Examples

```python
"(p & q)"
```

```python
"(p & q) >> r"
```

```python
"((p | q) & ~r) >> s"
```

```python
"(((p & q) | (r & ~s)) >> (t | u)) & ((p >> r) | (q >> s))"
```

## How It Works

1. Parse the expression using SymPy.
2. Discover all variables automatically.
3. Traverse the expression tree recursively.
4. Extract every Boolean subexpression.
5. Evaluate each subexpression for every possible truth assignment.
6. Generate a Markdown table with:

   * Variable columns
   * Intermediate evaluation columns
   * Final result column

For example:

```text
((p & q) | (p & r)) >> t
```

Produces the following evaluation sequence:

```text
p & q
p & r
(p & q) | (p & r)
((p & q) | (p & r)) >> t
```

Each step becomes a separate column in the output.

## Output

Generated Markdown is written to:

```text
./result.md
```

The file contains one section per expression:

```markdown
# ((p & q) | (p & r)) >> t

| p | q | r | t | ... |
|---|---|---|---|-----|
| T | T | T | T | ... |

-----------------

# (p & q) >> r

| p | q | r | ... |
```

## Educational Uses

This tool is useful for:

* Discrete Mathematics
* Logic courses
* Computer Science education
* Boolean Algebra
* Proof verification
* Studying logical equivalences
* Creating classroom materials

## Future Ideas

* HTML export
* CSV export
* LaTeX export
* Parenthesized pretty-printing
* Logical equivalence comparison
* Expression simplification analysis
* Interactive web interface

## Author

**Luis Arias** | [@ariassd](https://github.com/ariassd)

## License

This project is open source and licensed under the MIT License.

---

© 2026 Luis Arias. All rights reserved.

