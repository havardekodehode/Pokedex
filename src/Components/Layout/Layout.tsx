import { ReactNode } from "react";
import Header from "../Header/Header";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}
