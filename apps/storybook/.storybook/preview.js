// This does not work
// neither does relative path
// but it does work to add css classes to globals.css
// import "ui/globals.css"

// This works
import "../styles/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
