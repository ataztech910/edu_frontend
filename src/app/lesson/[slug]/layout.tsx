import AppDataProvider from "./data-provider";

export default function LessonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <AppDataProvider>
            {children}
        </AppDataProvider>
  );
}
