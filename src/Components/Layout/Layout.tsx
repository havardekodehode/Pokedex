import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}
