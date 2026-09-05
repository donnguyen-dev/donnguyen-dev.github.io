import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Oscar Foxtrot | Independent Software Studio',description:'Oscar Foxtrot Pty Ltd is an independent Australian software studio building practical Salesforce tools, including Picklist Doctor.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
