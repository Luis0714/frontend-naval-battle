export default class Helper {
  static async loadView(viewName, data = {}) {
    const html = await fetch(`./pages/${viewName}/${viewName}.html`).then(
      (res) => res.text()
    );
    const container = document.getElementById("app");
    container.innerHTML = html;

    // 💥 Elimina cualquier estilo anterior
    const oldStyle = document.getElementById("view-style");
    if (oldStyle) oldStyle.remove();

    // 🧠 Agrega el CSS correspondiente a la vista
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `./pages/${viewName}/${viewName}.css`;
    link.id = "view-style";
    document.head.appendChild(link);

    // ⚙️ Ejecutar JS correspondiente
    const module = await import(`../pages/${viewName}/${viewName}.js`);
    if (typeof module.init === "function") {
      module.init({ navigateTo: this.loadView, data });
    }
  }
}
