
export default function (accessor) {
  accessor.listen("plugin.load", () => {
    console.log("Plugin Test loaded.")
  })
}