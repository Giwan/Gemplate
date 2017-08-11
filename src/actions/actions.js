export const INCREMENT_NUMBER = "INCREMENT_NUMBER"

export function incrementClicker() {
    return {
        type: INCREMENT_NUMBER,
        payload: 1
    }
}
