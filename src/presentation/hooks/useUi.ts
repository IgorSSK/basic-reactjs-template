import { UiContext } from "@presentation/contexts/UiContext"
import { useContext } from "react"

export const useUi = () => {
    const context = useContext(UiContext)

    return context
}