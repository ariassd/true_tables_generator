"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: "",
      history: [],
      error: null,
      loading: false,
      dark: false,
    };
    this.inputRef = React.createRef();
  }

  toggleTheme() {
    const dark = !this.state.dark;
    this.setState({ dark });
    document.body.classList.toggle("light", !dark);
  }

  insertSymbol(sym) {
    const input = this.inputRef.current;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const newVal = input.value.slice(0, start) + sym + input.value.slice(end);
    this.setState({ expr: newVal }, () => {
      input.selectionStart = input.selectionEnd = start + sym.length;
      input.focus();
    });
  }

  async evaluateExpr() {
    const expr = this.state.expr.trim();
    if (!expr) return;

    this.setState({ loading: true, error: null });

    try {
      const res = await fetch("/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression: expr }),
      });
      const data = await res.json();

      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState((prev) => ({
          history: [{ expr, ...data }, ...prev.history],
          expr: "",
        }));
      }
    } catch (err) {
      this.setState({ error: String(err) });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { expr, history, error, loading, dark } = this.state;

    return (
      <React.Fragment>
        <Header dark={dark} onToggle={() => this.toggleTheme()} />
        <SymbolBar onInsert={(sym) => this.insertSymbol(sym)} />
        <div className="input-area">
          <div className="input-wrap">
            <input
              type="text"
              ref={this.inputRef}
              value={expr}
              placeholder="e.g. (p∨¬q)→(¬p∧q)"
              autoComplete="off"
              onChange={(e) => this.setState({ expr: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && this.evaluateExpr()}
            />
          </div>
          <button disabled={loading} onClick={() => this.evaluateExpr()}>
            Evaluate
          </button>
        </div>

        {error && (
          <div className="result">
            <div className="error">Error: {error}</div>
          </div>
        )}

        {loading && (
          <div className="result">
            <span className="spinner"></span> Evaluating...
          </div>
        )}

        {history.map((item, i) => (
          <TruthTable
            key={i}
            expression={item.expr}
            headers={item.headers}
            rows={item.rows}
          />
        ))}
        <Footer />
      </React.Fragment>
    );
  }
}

document.querySelectorAll(".app").forEach((el) => {
  ReactDOM.render(React.createElement(App), el);
});
