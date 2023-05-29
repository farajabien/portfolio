import React from "react"

type LoadingComponentProps = {
  size?: string
  color?: string
  borderWidth?: string
}

const LoadingComponent = ({
  size,
  color,
  borderWidth,
}: LoadingComponentProps) => {
  const spinnerSize = size || "h-32 w-32"
  const spinnerColor = color || "border-black"
  const spinnerBorderWidth = borderWidth || "border-y-2"

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`animate-spin rounded-full ${spinnerSize} ${spinnerBorderWidth} ${spinnerColor}`}
      ></div>
    </div>
  )
}

export default LoadingComponent
