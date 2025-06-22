const RootLayout = ({
    children
}: {children: React.ReactNode}) => {
    return <html lang="eng">
        <body className="font'poppins antialiased">{children}</body>
    </html>
}

export default RootLayout