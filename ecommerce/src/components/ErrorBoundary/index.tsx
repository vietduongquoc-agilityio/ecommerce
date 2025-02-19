"use client";

import ErrorPage from "@/app/error";
import { ErrorBoundary } from "react-error-boundary";

export default function ErrorBoundaryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorPage error={error} reset={resetErrorBoundary} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
