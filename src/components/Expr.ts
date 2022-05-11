import { Token } from "./Token";

export type Expr = Expr.Unary | Expr.Binary | Expr.Variable | Expr.Grouping;

export namespace Expr {
    export class Unary {
        operator: Token;
        right: Expr;

        constructor(operator: Token, right: Expr) {
            this.operator = operator;
            this.right = right;
        }
    }

    export class Binary {
        left: Expr;
        operator: Token;
        right: Expr;

        constructor(left: Expr, operator: Token, right: Expr) {
            this.left = left;
            this.operator = operator;
            this.right = right;
        }
    }

    export class Variable {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    export class Grouping {
        expression: Expr;

        constructor(expression: Expr) {
            this.expression = expression;
        }
    }
}