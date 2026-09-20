"use client";

export default function DossierPrintButton({ className, children }) {
    return <button onClick={() => window.print()} className={className}>{children}</button>;
}
