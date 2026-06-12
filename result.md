# p -> q
| p | q | p → q |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

-----------------
# p <-> q
| p | q | p ↔ q |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | V |

-----------------
# (p∨¬q)→(¬p∧q)
| p | q | ¬q | p ∨ ¬q | ¬p | q ∧ ¬p | (p ∨ ¬q) → (q ∧ ¬p) |
| --- | --- | --- | --- | --- | --- | --- |
| V | V | F | V | F | F | F |
| V | F | V | V | F | F | F |
| F | V | F | F | V | V | V |
| F | F | V | V | V | F | F |

-----------------
# ((p & q) | (p & r)) >> t
| p | q | r | t | p ∧ q | p ∧ r | (p ∧ q) ∨ (p ∧ r) | ((p ∧ q) ∨ (p ∧ r)) → t |
| --- | --- | --- | --- | --- | --- | --- | --- |
| V | V | V | V | V | V | V | V |
| V | V | V | F | V | V | V | F |
| V | V | F | V | V | F | V | V |
| V | V | F | F | V | F | V | F |
| V | F | V | V | F | V | V | V |
| V | F | V | F | F | V | V | F |
| V | F | F | V | F | F | F | V |
| V | F | F | F | F | F | F | V |
| F | V | V | V | F | F | F | V |
| F | V | V | F | F | F | F | V |
| F | V | F | V | F | F | F | V |
| F | V | F | F | F | F | F | V |
| F | F | V | V | F | F | F | V |
| F | F | V | F | F | F | F | V |
| F | F | F | V | F | F | F | V |
| F | F | F | F | F | F | F | V |

-----------------
# (p & q) >> r
| p | q | r | p ∧ q | (p ∧ q) → r |
| --- | --- | --- | --- | --- |
| V | V | V | V | V |
| V | V | F | V | F |
| V | F | V | F | V |
| V | F | F | F | V |
| F | V | V | F | V |
| F | V | F | F | V |
| F | F | V | F | V |
| F | F | F | F | V |

-----------------
# ((p | q) & ~r) >> s
| p | q | r | s | ¬r | p ∨ q | (p ∨ q) ∧ ¬r | ((p ∨ q) ∧ ¬r) → s |
| --- | --- | --- | --- | --- | --- | --- | --- |
| V | V | V | V | F | V | F | V |
| V | V | V | F | F | V | F | V |
| V | V | F | V | V | V | V | V |
| V | V | F | F | V | V | V | F |
| V | F | V | V | F | V | F | V |
| V | F | V | F | F | V | F | V |
| V | F | F | V | V | V | V | V |
| V | F | F | F | V | V | V | F |
| F | V | V | V | F | V | F | V |
| F | V | V | F | F | V | F | V |
| F | V | F | V | V | V | V | V |
| F | V | F | F | V | V | V | F |
| F | F | V | V | F | F | F | V |
| F | F | V | F | F | F | F | V |
| F | F | F | V | V | F | F | V |
| F | F | F | F | V | F | F | V |

-----------------
# (((p & q) | (r & ~s)) >> (t | u)) & ((p >> r) | (q >> s))
| p | q | r | s | t | u | p → r | q → s | (p → r) ∨ (q → s) | p ∧ q | ¬s | r ∧ ¬s | (p ∧ q) ∨ (r ∧ ¬s) | t ∨ u | ((p ∧ q) ∨ (r ∧ ¬s)) → (t ∨ u) | (((p ∧ q) ∨ (r ∧ ¬s)) → (t ∨ u)) ∧ ((p → r) ∨ (q → s)) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V | V | V | V | V | V | V | V | V | V | F | F | V | V | V | V |
| V | V | V | V | V | F | V | V | V | V | F | F | V | V | V | V |
| V | V | V | V | F | V | V | V | V | V | F | F | V | V | V | V |
| V | V | V | V | F | F | V | V | V | V | F | F | V | F | F | F |
| V | V | V | F | V | V | V | F | V | V | V | V | V | V | V | V |
| V | V | V | F | V | F | V | F | V | V | V | V | V | V | V | V |
| V | V | V | F | F | V | V | F | V | V | V | V | V | V | V | V |
| V | V | V | F | F | F | V | F | V | V | V | V | V | F | F | F |
| V | V | F | V | V | V | F | V | V | V | F | F | V | V | V | V |
| V | V | F | V | V | F | F | V | V | V | F | F | V | V | V | V |
| V | V | F | V | F | V | F | V | V | V | F | F | V | V | V | V |
| V | V | F | V | F | F | F | V | V | V | F | F | V | F | F | F |
| V | V | F | F | V | V | F | F | F | V | V | F | V | V | V | F |
| V | V | F | F | V | F | F | F | F | V | V | F | V | V | V | F |
| V | V | F | F | F | V | F | F | F | V | V | F | V | V | V | F |
| V | V | F | F | F | F | F | F | F | V | V | F | V | F | F | F |
| V | F | V | V | V | V | V | V | V | F | F | F | F | V | V | V |
| V | F | V | V | V | F | V | V | V | F | F | F | F | V | V | V |
| V | F | V | V | F | V | V | V | V | F | F | F | F | V | V | V |
| V | F | V | V | F | F | V | V | V | F | F | F | F | F | V | V |
| V | F | V | F | V | V | V | V | V | F | V | V | V | V | V | V |
| V | F | V | F | V | F | V | V | V | F | V | V | V | V | V | V |
| V | F | V | F | F | V | V | V | V | F | V | V | V | V | V | V |
| V | F | V | F | F | F | V | V | V | F | V | V | V | F | F | F |
| V | F | F | V | V | V | F | V | V | F | F | F | F | V | V | V |
| V | F | F | V | V | F | F | V | V | F | F | F | F | V | V | V |
| V | F | F | V | F | V | F | V | V | F | F | F | F | V | V | V |
| V | F | F | V | F | F | F | V | V | F | F | F | F | F | V | V |
| V | F | F | F | V | V | F | V | V | F | V | F | F | V | V | V |
| V | F | F | F | V | F | F | V | V | F | V | F | F | V | V | V |
| V | F | F | F | F | V | F | V | V | F | V | F | F | V | V | V |
| V | F | F | F | F | F | F | V | V | F | V | F | F | F | V | V |
| F | V | V | V | V | V | V | V | V | F | F | F | F | V | V | V |
| F | V | V | V | V | F | V | V | V | F | F | F | F | V | V | V |
| F | V | V | V | F | V | V | V | V | F | F | F | F | V | V | V |
| F | V | V | V | F | F | V | V | V | F | F | F | F | F | V | V |
| F | V | V | F | V | V | V | F | V | F | V | V | V | V | V | V |
| F | V | V | F | V | F | V | F | V | F | V | V | V | V | V | V |
| F | V | V | F | F | V | V | F | V | F | V | V | V | V | V | V |
| F | V | V | F | F | F | V | F | V | F | V | V | V | F | F | F |
| F | V | F | V | V | V | V | V | V | F | F | F | F | V | V | V |
| F | V | F | V | V | F | V | V | V | F | F | F | F | V | V | V |
| F | V | F | V | F | V | V | V | V | F | F | F | F | V | V | V |
| F | V | F | V | F | F | V | V | V | F | F | F | F | F | V | V |
| F | V | F | F | V | V | V | F | V | F | V | F | F | V | V | V |
| F | V | F | F | V | F | V | F | V | F | V | F | F | V | V | V |
| F | V | F | F | F | V | V | F | V | F | V | F | F | V | V | V |
| F | V | F | F | F | F | V | F | V | F | V | F | F | F | V | V |
| F | F | V | V | V | V | V | V | V | F | F | F | F | V | V | V |
| F | F | V | V | V | F | V | V | V | F | F | F | F | V | V | V |
| F | F | V | V | F | V | V | V | V | F | F | F | F | V | V | V |
| F | F | V | V | F | F | V | V | V | F | F | F | F | F | V | V |
| F | F | V | F | V | V | V | V | V | F | V | V | V | V | V | V |
| F | F | V | F | V | F | V | V | V | F | V | V | V | V | V | V |
| F | F | V | F | F | V | V | V | V | F | V | V | V | V | V | V |
| F | F | V | F | F | F | V | V | V | F | V | V | V | F | F | F |
| F | F | F | V | V | V | V | V | V | F | F | F | F | V | V | V |
| F | F | F | V | V | F | V | V | V | F | F | F | F | V | V | V |
| F | F | F | V | F | V | V | V | V | F | F | F | F | V | V | V |
| F | F | F | V | F | F | V | V | V | F | F | F | F | F | V | V |
| F | F | F | F | V | V | V | V | V | F | V | F | F | V | V | V |
| F | F | F | F | V | F | V | V | V | F | V | F | F | V | V | V |
| F | F | F | F | F | V | V | V | V | F | V | F | F | V | V | V |
| F | F | F | F | F | F | V | V | V | F | V | F | F | F | V | V |

-----------------
